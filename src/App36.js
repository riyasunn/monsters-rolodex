import { Component } from "react";
import "./App.css";
//import logo from './logo.svg';

class App36 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.monsters.map((el) => {
          return (
            <div key={el.id}>
              <h1>{el.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App36;
