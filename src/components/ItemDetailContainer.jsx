import React from "react";
import { useParams } from "react-router-dom";
import mateImage from "../imgs/mate.jpg";
import matesuliImage from "../imgs/matesuli.jpg";
import vasoImage from "../imgs/vaso.jpg";
import vasuliImage from "../imgs/vasuli.jpg";
import tazaImage from "../imgs/taza.jpg";
import tazuliImage from "../imgs/tazuli.jpg";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { categoryName } = useParams();
  console.log("Category from params:", categoryName);

  const itemsData = {
    Mates: [
      {
        id: "item1",
        name: "Mate de Ebano",
        description: "Mate de Ebano de la mas fina calidad",
        price: 100,
        imageUrl: mateImage,
      },
      {
        id: "item2",
        name: "Mate de Caoba",
        description: "Mate de Caoba de 100 años",
        price: 150,
        imageUrl: matesuliImage,
      },
    ],
    Vasos: [
      {
        id: "item3",
        name: "Vaso Largo",
        description: "Vaso Largo para tomarte un Fernando",
        price: 30,
        imageUrl: vasoImage,
      },
      {
        id: "item4",
        name: "Vaso G",
        description: "Vaso para tomar unos buenos Jugitos",
        price: 25,
        imageUrl: vasuliImage,
      },
    ],
    Tazas: [
      {
        id: "item5",
        name: "Taza de Porcelana",
        description: "Taza de Porcelana echa por maestros tazeros",
        price: 30,
        imageUrl: tazaImage,
      },
      {
        id: "item6",
        name: "Taza Cambia Formas",
        description:
          "Taza Moldeable que imita una taza de porcelana(solo imita tazas de porcela)",
        price: 35,
        imageUrl: tazuliImage,
      },
    ],
  };

  const categoryItems = itemsData[categoryName];

  if (!categoryItems) {
    return <div>Category not found</div>;
  }

  return (
    <div className="card-container">
      {categoryItems.map((item) => (
        <div className="item-card" key={item.id}>
          <img src={item.imageUrl} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p className="price">Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
