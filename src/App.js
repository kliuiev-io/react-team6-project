import "./styles.css";
import { GetCard } from "./components/Card";

export default function App() {
  const card = GetCard({
    image: "https://content1.rozetka.com.ua/goods/images/preview/242978958.jpg",
    title: "test",
    price: 100,
  });
  return (
    <div className="App">
      <h1>Hello Branch 1</h1>
      {card}
      <h2>Start editing to see some magic happen!</h2>
      <h2>Blah-blah-blah</h2>
    </div>
  );
}
