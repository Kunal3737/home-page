import React from "react";
import "./Button.css";

const Button = (props) => {
  const variant =
    props.variant && props.color
      ? `${props.variant} ${props.color}`
      : props.variant
      ? props.variant
      : props.color
      ? props.color
      : "default";

  const size = props.size ? props.size : "";
  const removeBorderRadius = props.joinFrom ? props.joinFrom : "";
  const buttonStyle = `button ${variant} ${size} ${
    "remove-border-radius--" + removeBorderRadius
  }`;

  return (
    <button className={buttonStyle}>
      {props.content ? props.content : "Default"}
    </button>
  );
};

export default Button;
