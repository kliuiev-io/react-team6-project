import { GetCard } from "./Card";

export function CardList(props) {
  return (
    <div>
      {props.map((item) => {
        return GetCard(item);
      })}
    </div>
  );
}
