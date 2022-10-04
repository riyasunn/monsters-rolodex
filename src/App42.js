import { Component } from "react";
import "./App.css";
//import logo from './logo.svg';

class App42 extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField:'',
    };
    // console.log('1');
  }

  componentDidMount() {
    // console.log('3')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          },
        //   () => {
        //     console.log(this.state);
        //   }
        )
      );
  }

  render() {
    // console.log("render");
    const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
      <input className="search-box" type="search" placeholder="search monsters" onChange={(event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField};
        });
    }}/>
      
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App42;