import React from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../utils/firebase/firebase.utils";
import SignUp from "../signUp/SignUp";
import SignIn from "../Sign-In/SignIn";

const SignIN = () => {
  return (
    <div className="SignInPage-container">
      {/* <button onClick={logGoogleuser}>Sign In With Google</button> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignIN;
