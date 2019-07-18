/**
 * This will be used for Headers container
 */
import React from 'react'
import Typography from '@material-ui/core/Typography'


export function H2 (props) {
  /// Return the <h2> component
  return (
    <>
      <Typography variant='h2' component='h2' {...props}>
        {props.children}
      </Typography>
    </>
  )
}

export function H3 (props) {
  /// Return the <h3> component
  return (
    <>
      <Typography variant='h3' component='h3' {...props}>
        {props.children}
      </Typography>
    </>
  )
}

export function H6 (props) {
  /// Return the <h6> component
  return (
    <>
      <Typography variant='h6' component='h6' {...props}>
        {props.children}
      </Typography>
    </>
  )
}


export function P (props) {
    /// Return the <p> component
    return (
      <>
        <Typography variant='caption' component='p' {...props}>
          {props.children}
        </Typography>
      </>
    )
  }

  export function H5 (props) {
    /// Return the <h5> component
    return (
      <>
        <Typography variant='h5' component='h5' {...props}>
          {props.children}
        </Typography>
      </>
    )
  }
