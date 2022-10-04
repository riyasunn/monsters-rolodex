import Card from "../card/card.component.func";
import "./card-list.styles.css";

const CardList61 = ({ monsters }) => (

    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster}/>;
      })}
    </div>
)


export default CardList61;
