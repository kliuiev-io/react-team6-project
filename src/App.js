import "./styles.css";
import { GetCard } from "./components/Card";
import { CardList } from "./components/CardList";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const card = [
    {
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/242978958.jpg",
      title: "test",
      price: 100,
    },
    {
      image:
        "https://content1.rozetka.com.ua/goods/images/preview/242978958.jpg",
      title: "test2",
      price: 150,
    },
  ];
  return (
    <div className="App">
      <h1>Hello Branch 1</h1>
      {CardList(card)}
      <h2>Start editing to see some magic happen!</h2>
      <h2>Blah-blah-blah</h2>
    </div>
  );
}
