import { Component } from "react";
import "./App.css";
//import logo from './logo.svg';

class App32 extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
                { name: 'Linda' },
                { name: 'Frank' },
                { name: 'Jacky' },
                { name: 'Jacky' },
            ]
        };
    }

    render() {
        return(
            <div className='App'>
            { this.state.monsters.map(
                    (el) => {
                    return <h1>{el.name}</h1>;
                    }
                )
            }
            </div>
        );

    }

}


export default App32;