import { cartContextAction } from "@/Redux-context/cartContext";
import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
const CheckOutTable = (props: {
  imageUrl: string;
  name: string;
  count: number;
  price: number;
  id: string;
}) => {
  const dispacth = useDispatch();

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <Image src={props.imageUrl} alt={props.name} width='0'height='0' />
      </div>
      <span className="name">{props.name}</span>
      <span className="quantity">
        <button
          onClick={() => dispacth(cartContextAction.decrementOrder(props.id))}
          className="arrow"
        >
          &#10094;
        </button>
        {props.count}
        <button
          onClick={() => dispacth(cartContextAction.incrementOrder(props.id))}
          className="arrow"
        >
           &#10095;
        </button>
      </span>
      <span className="price">{props.count * props.price}</span>
      <div className="remove-button">
        <button
          onClick={() => dispacth(cartContextAction.removeOrder(props.id))}
        >
          &#x2718;
        </button>
      </div>
    </div>
  );
};

export default CheckOutTable;
