import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {/* Aquí iría el contenido de la lista de productos */}
    </div>
  );
};

export default ItemListContainer;
