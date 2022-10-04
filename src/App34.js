import { Component } from "react";
import "./App.css";
//import logo from './logo.svg';

class App34 extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
                { name: 'Linda',
                  id: '123ddefa',
                },
                { name: 'Frank',
                  id: '123efa',
                },
                { name: 'Jacky',
                  id: '123ddreefa',
                },
                { name: 'Jackey',
                  id: '123ddefadf',
                },
            ]
        };
    }

    render() {
        return(
            <div className='App'>
            { this.state.monsters.map((el) => {
                return(
                    <div key={el.id}>
                        <h1>{el.name}</h1>
                    </div>
                    );
            })}
            </div>
        );

    }

}


export default App34;