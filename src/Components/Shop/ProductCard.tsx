import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { contextUser } from "@/pages/_app";
import { cartContextAction } from "@/Redux-context/cartContext";
import Image from "next/image";

import Button from "../UI/Button";

const ProductCard = (props: {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}) => {
  const user: any = useContext(contextUser);
  const dispacth = useDispatch();
  const setToCartItem = () => {
    // addOrder
    if (user) {
      const order = {
        ...props,
        Userid: user.uid,
        displayName: user.displayName,
      };
      dispacth(cartContextAction.addOrder(order));
    } else {
      alert("Log-in first");
    }
  };
  return (
    <div className="product-card-container">
      <Image width="500" height="500" src={props.imageUrl} alt={props.name} />
      <div className="footer">
        <span className="name">{props.name}</span>
        <span className="price">${props.price}</span>
        <Button onClick={setToCartItem} buttonType="inverted">
          ADD TO CARD
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
