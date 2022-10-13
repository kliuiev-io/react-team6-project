import { GetCard } from "./Card";

export function CardList(props) {
  return (
    <div className="cardList">
      {props.map((item) => {
        return GetCard(item);
      })}
    </div>
  );
}
