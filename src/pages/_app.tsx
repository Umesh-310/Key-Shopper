import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Navigation from "@/Components/Navigation/Navigation";

import "@/styles/globals.css";
import "../Components/Home-Page-component/HomeComponents.styles.scss";
import "../Components/Navigation//navigation.scss";
import "../Components/signUp/form-input.scss";
import "../Components/signUp/sign-up-page.styles.scss";
import "../Components/UI/Button.scss";
import "../Components/signInPage/SignInPage.scss";
import "../Components/Shop/ProductCart.scss";
import "../Components/Cart-icon/CartIcon.scss";
import "../Components/Cart-drop-down/CartItemDropdown.scss";
import "../Components/cart-item/CartItem.scss";
import "../Components/Checkout/Checkout.scss";

import { Provider } from "react-redux";
import store from "@/Redux-context/Index.redux";
import {
  createUserDocumentAuth,
  onAuthStateChangedListener,
} from "@/Components/utils/firebase/firebase.utils";


export const contextUser = React.createContext({});

function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentAuth(user);
      }
      setUser(user);
    });
    return unsuscribe;
  }, []);
 
 
  return (
    <contextUser.Provider value={!!user}>
      <Provider store={store}>
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </Provider>
    </contextUser.Provider>
  );
}
export default App;
