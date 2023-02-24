import React, { Fragment, ReactNode, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useSelector } from "react-redux";

import { signOutUser } from "../utils/firebase/firebase.utils";
import { contextUser } from "@/pages/_app";
import CartIcon from "../Cart-icon/CartIcon";
import CartItemDropdown from "../Cart-drop-down/CartItemDropdown";
import { useSelector } from "react-redux";

const Navigation = (props: { children: ReactNode }) => {
  const { cartOpen } = useSelector((state: any) => state.cartContext);
  console.log(cartOpen);

  const user = useContext(contextUser);

  const onSignOut = async () => {
    await signOutUser();
  };
  const signType = user ? (
    <Link onClick={onSignOut} className="nav-link" href="/sign-in">
      SIGN OUT
    </Link>
  ) : (
    <Link className="nav-link" href="/sign-in">
      SIGN IN
    </Link>
  );

  return (
    <Fragment>
      <div className="navigation">
        <Link href="/">
          <Image
            className="logo-container"
            src="/key-logo.svg"
            alt="Logo"
            width={0}
            height={0}
            priority
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" href="/shop">
            SHOP
          </Link>
          <Link className="nav-link" href="/contact">
            CONTACT
          </Link>
          {/* <Link className="nav-link" href="/sign-in"> */}
          {signType}
          {/* </Link> */}
          <Link className="nav-link" href="/shop">
            <CartIcon />
          </Link>
          {cartOpen &&<CartItemDropdown />}
        </div>
      </div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navigation;
