import React, { Fragment, ReactNode, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { getCatrgoriesAndDocuments, signOutUser } from "../utils/firebase/firebase.utils";
import { contextUser } from "@/pages/_app";
import CartIcon from "../Cart-icon/CartIcon";
import CartItemDropdown from "../Cart-drop-down/CartItemDropdown";
import { useSelector , useDispatch } from "react-redux";
import { ProductsContextAction } from "@/Redux-context/productsContext";

const Navigation = (props: { children: ReactNode }) => {
  const { cartOpen } = useSelector((state: any) => state.cartContext);
    const dispatch = useDispatch();
  const user = useContext(contextUser);

   useEffect(() => {
    const getCategoriesMap = async () => {
      const data = await getCatrgoriesAndDocuments();
      const tempData = [];
      for (const key in data) {
        const obj = {
          id: key,
          title : key ,
          items : data[key]
        };
        tempData.push(obj);
      }
      dispatch(ProductsContextAction.setProducts(tempData));
      console.log(data);
    };
    getCategoriesMap();
  }, [dispatch]);

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
          <Link className="nav-link" href="">
            <CartIcon />
          </Link>
          {cartOpen && <CartItemDropdown />}
        </div>
      </div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Navigation;
