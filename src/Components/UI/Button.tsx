import React from "react";

const Button = (props: {
  children?: string;
  onClick?: () => void;
  buttonType?: string;
  otherProps?: {};
}) => {
  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
  };
  return (
    <button
      {...props.otherProps}
      className={`button-container ${props.buttonType}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
