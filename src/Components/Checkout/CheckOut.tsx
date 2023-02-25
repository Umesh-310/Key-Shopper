import React from "react";
import { useSelector } from "react-redux";
import CheckOutTable from "./CheckOutTable";

const CheckOut = () => {
  const { cartItem } = useSelector((state: any) => state.cartContext);
  const total = cartItem.length
    ? cartItem
        .map((value: any) => {
          return value.count * value.price;
        }).reduce((a: number, b: number) => a + b)
    : 0;
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItem.map((value: any) => {
        return (
          <CheckOutTable
            key={value.id}
            id={value.id}
            name={value.name}
            price={value.price}
            imageUrl={value.imageUrl}
            count={value.count}
          />
        );
      })}
      <span className="total"> Total : {total}</span>
    </div>
  );
};

export default CheckOut;
