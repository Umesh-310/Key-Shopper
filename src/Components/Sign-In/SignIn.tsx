import React, { FormEvent, useState } from "react";
import Button from "../UI/Button";
import {
  createUserDocumentAuth,
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";

const formInputs = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formInput, setFormInput] = useState(formInputs);

  // use redux

  // google login
  const logGoogleuser = async () => {
    await signInWithGooglePopup();
  };

  // submit handler login
  const onSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await signAuthUserWithEmailAndPassword(
        formInput.email,
        formInput.password
      );

      setFormInput(formInputs);
    } catch ({ code }) {
      console.log(code);
      switch (code) {
        case "auth/user-not-found":
          alert("No user have with this email");
          break;
        case "auth/wrong-found":
          alert("incorrect password for email");
        default:
          break;
      }
    }
  };
  const onInputhandler = (event: {
    target: { value: string; name: string };
  }) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };
  return (
    <div className="sign-up-container">
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler} action="">
        <div className="group">
          <label className="shrink form-input-label" htmlFor="email">
            email
          </label>
          <input
            onChange={onInputhandler}
            value={formInput.email}
            type="email"
            name="email"
            autoComplete="on"
            className="form-input"
            required
          />
        </div>
        <div className="group">
          <label className="shrink form-input-label" htmlFor="password">
            Password
          </label>
          <input
            onChange={onInputhandler}
            value={formInput.password}
            type="password"
            name="password"
            autoComplete="on"
            className="form-input"
            required
          />
        </div>
        <div className="buttons-container">
          <Button otherProps={{ type: "submit" }}>Sign IN</Button>
          <Button
            otherProps={{ type: "button" }}
            buttonType="google"
            onClick={logGoogleuser}
          >
            SIGN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
