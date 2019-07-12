import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import ViewIcon from '@material-ui/icons/Visibility'

export default function DeleteBtn (props) {
  return (
    <Button variant='contained' color='primary' className={null}>
      View
      <ViewIcon />
    </Button>
  )
}

/// ///// NOtes \\\\\\\\\
/*
    // <span className="delete-btn" {...props} role="button" tabIndex="0">
    //   ✗
    // </span>
*/
