import React from "react";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className="cart-icon" role="img" aria-label="Cart">
        🛒
      </span>
      <span className="cart-notification">4</span>
    </div>
  );
};

export default CartWidget;
