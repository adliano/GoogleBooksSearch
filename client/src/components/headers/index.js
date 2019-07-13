/**
 * This will be used for Headers container
 */
import React from 'react'
import Typography from '@material-ui/core/Typography'


export function H2 (props) {
  /// Return the <h2> component
  return (
    <>
      <Typography variant='h2' component='h2' align='center'>
        {props.children}
      </Typography>
    </>
  )
}

export function P (props) {
    /// Return the <h2> component
    return (
      <>
        <Typography variant='p' component='p' align='center'>
          {props.children}
        </Typography>
      </>
    )
  }
