import { Component } from "react";
import "./App.css";
import logo from './logo.svg';

class App31 extends Component {
    constructor() {
        super();

        this.state = {
            name: {firstName: 'Yihua', lastName: 'Zhang'},
            company: 'ZTM',
        };
    }

    render() {
        return(
            <div className='App'>
                <header className="App-header">
                    <img  src={logo} className='App-logo' alt='logo' />
                    <p>
                    Hi {this.state.name.firstName} {this.state.name.lastName} , I work at {this.state.company}
                    </p>
                    <button 
                        onClick={ () => {
                            this.setState (
                                () => {
                                return {
                                    name: { firstName: 'Andrei', lastName: 'Neaogie'},
                                }
                            }, 
                            
                            () => {
                                console.log(this.state);
                            });
                        }}
                               
                            
                            
                    > change the name
                    </button>
                </header>
            </div>
        )



    }


    }
        
    


















export default App31;