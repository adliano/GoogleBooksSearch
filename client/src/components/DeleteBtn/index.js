import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// Styles
// import "./style.css";

export default function DeleteBtn(props) {
  return (
    <Button variant="contained" color="secondary" className={null}>
        Delete
        <DeleteIcon className={null} />
      </Button>
  );
}

//////// NOtes \\\\\\\\\
/*
    // <span className="delete-btn" {...props} role="button" tabIndex="0">
    //   ✗
    // </span>
*/
