import React, { useContext } from "react";

import SignUp from "../signUp/SignUp";
import SignIn from "../Sign-In/SignIn";
import { useRouter } from "next/router";
import { contextUser } from "@/pages/_app";

const SignIN = () => {
  const user: any = useContext(contextUser);
  const router = useRouter()
  if(user){
    router.push('/')
  }
  return (
    <div className="SignInPage-container">
      {/* <button onClick={logGoogleuser}>Sign In With Google</button> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignIN;
