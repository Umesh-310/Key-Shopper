import React, { FormEvent } from "react";
import Button from "../UI/Button";
const SignUpForm = (props: {
  onInputhandler: (event: { target: { value: string; name: string } }) => void;
  onSubmitHandler: (event: FormEvent) => void;
  formInput: {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}) => {
  return (
    <div className="sign-up-container">
      <h2>{"Don't have an account"}</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={props.onSubmitHandler} action="">
        <div className="group">
          <label className="shrink form-input-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={props.onInputhandler}
            value={props.formInput.displayName}
            type="text"
            name="displayName"
            className="form-input"
            required
          />
        </div>
        <div className="group">
          <label className="shrink form-input-label" htmlFor="email">
            email
          </label>
          <input
            onChange={props.onInputhandler}
            value={props.formInput.email}
            type="email"
            name="email"
            className="form-input"
            required
          />
        </div>
        <div className="group">
          <label className="shrink form-input-label" htmlFor="password">
            Password
          </label>
          <input
            onChange={props.onInputhandler}
            value={props.formInput.password}
            type="password"
            name="password"
            autoComplete="on"
            className="form-input"
            required
          />
        </div>
        <div className="group">
          <label className="shrink form-input-label" htmlFor="cpassword">
            Confirm Password
          </label>
          <input
            onChange={props.onInputhandler}
            value={props.formInput.confirmPassword}
            type="password"
            name="confirmPassword"
            autoComplete="on"
            className="form-input"
            required
          />
        </div>
        <Button otherProps={{type : "submit"}} >Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
