import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import CartItem from "../cart-item/CartItem";
import Button from "../UI/Button";
import { cartContextAction } from "@/Redux-context/cartContext";

const CartItemDropdown = () => {
  const { cartItem } = useSelector((state: any) => state.cartContext);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((value: any) => {
          return (
            <CartItem
              key={value.id}
              name={value.name}
              price={value.price}
              imageUrl={value.imageUrl}
              count={value.count}
            />
          );
        })}
      </div>
      <Link href="/checkout">
        <Button
          onClick={() => {
            dispatch(cartContextAction.openCart());
          }}
        >
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};

export default CartItemDropdown;
