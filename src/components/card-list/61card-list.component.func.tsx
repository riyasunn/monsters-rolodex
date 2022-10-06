// import { type } from "os";
import { Monster } from "../../App";
import Card from "../card/card.component.func";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
}
const CardList61 = ({ monsters }: CardListProps) => (

    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster}/>;
      })}
    </div>
)


export default CardList61;
