import React, { FormEvent, useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentAuth,
} from "../utils/firebase/firebase.utils";
import SignUpForm from "./SignUpForm";

const formInputs = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formInput, setFormInput] = useState(formInputs);

  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (formInput.password !== formInput.confirmPassword) {
      console.log("miss match");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        formInput.email,
        formInput.password
      );
      const UserDocRef = await createUserDocumentAuth(response!.user, {
        displayName: formInput.displayName,
      });

      setFormInput(formInputs);
    } catch ({ code }) {
      if (code === "auth/email-already-in-use") {
        alert("user already exists ");
      }
    }
  };
  const onInputhandler = (event: {
    target: { value: string; name: string };
  }) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  return (
    <SignUpForm
      onInputhandler={onInputhandler}
      onSubmitHandler={onSubmitHandler}
      formInput={formInput}
    />
  );
};

export default SignUp;
