import React from 'react'
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton
} from '@material-ui/core'

import { Search as SearchIcon, Save as SaveIcon } from '@material-ui/icons'

import Style from './styles'

export default function Nav () {
  const classes = Style()

  return (
    <div className={classes.root}>
      <AppBar fixed='top'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
          />
          <Typography variant='h6' className={classes.title}>
            Google Books Search
          </Typography>
          <Button color='inherit'>
            <SearchIcon />
          </Button>
          <Button color='inherit'>
            <SaveIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

/*
  -------------- NOtes -------------
  className={Style.root}

  // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  //   <a className="navbar-brand" href="/">
  //     React Reading List
  //   </a>
  // </nav>

  className={Style.title}
  // <AppBar fixed='top'>
    //   <BookIcon />
    //   <Typography className={Style.title} variant='h6' noWrap>
    //   <Typography variant='h6' noWrap>
    //     Google Books
    //   </Typography>
    //   <IconButton aria-label='Show 4 new mails' color='inherit'>
    //       <SearchIcon />
    //   </IconButton>
    // </AppBar>

*/
