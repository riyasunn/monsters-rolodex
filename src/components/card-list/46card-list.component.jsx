import { Component } from "react";

class CardList46 extends Component {
  render() {
    console.log('render');
    const { monsters } = this.props;
    
        return (
            <div>
            {monsters.map((monster) => (
                <h1 key={monster.id}>{monster.name}</h1>
            ))}
            </div>
        )
   
  }
}

export default CardList46;