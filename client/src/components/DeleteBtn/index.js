import React from "react";
import Button from '@material-ui/core/Button'
// Styles
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export default function DeleteBtn(props) {
  return (
    <Button>delete</Button>
    // <span className="delete-btn" {...props} role="button" tabIndex="0">
    //   ✗
    // </span>
  );
}

