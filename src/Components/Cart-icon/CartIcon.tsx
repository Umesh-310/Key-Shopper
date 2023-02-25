import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartContextAction } from "@/Redux-context/cartContext";
const CartIcon = () => {
  const dispatch = useDispatch();
  const countObj = useSelector((state: any) => state.cartContext.cartItem);
  const count = countObj.length
    ? countObj
        .map((val: any) => val.count)
        .reduce((a: number, b: number) => a + b)
    : 0;

  return (
    <div
      onClick={() => {
        dispatch(cartContextAction.openCart());
      }}
      className="cart-icon-container"
    >
      <Image
        src="/shopping-bag.svg"
        className="shopping-icon"
        alt="Logo"
        width={0}
        height={0}
        priority
      />
      <span className="item-count">{count}</span>
    </div>
  );
};

export default CartIcon;
