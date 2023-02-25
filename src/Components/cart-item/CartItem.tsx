import React from "react";
import Button from "../UI/Button";

const CartItem = (props: {
  name: string;
  price: string;
  count: string;
  imageUrl: string;
}) => {
  return (
    <div className="cart-item-container">
      <img src={props.imageUrl} alt={props.name} />
      <div className="item-details">
        <span className="name">{props.name}</span>
        <span className="price">
          {props.count} x ${props.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
