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

export default function Nav (props) {
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
          <Button color='inherit' href='/'>
            <SearchIcon />
          </Button>
          <Button color='inherit' href='/saved'>
            <SaveIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
