import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/CartItem";
import Button from "../UI/Button";

const CartItemDropdown = () => {
  const { cartItem } = useSelector((state: any) => state.cartContext);

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
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartItemDropdown;
