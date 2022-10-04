import { Component } from "react";
import "./App.css";

class App1 extends Component {
    constructor() {
        super();
        this.state = { monsters:[] };
    }

componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        this.setState({ monsters: users });
    });
}


render() {
    return( 
        <div className="App1">
        {this.state.monsters.map( (monster) => {
            return (
                <div key={monster.id}>
                <h1> {monster.name} </h1> 
                </div>
                
                );
            
        }
        )}
        </div>
    )
}

}


















export default App1;