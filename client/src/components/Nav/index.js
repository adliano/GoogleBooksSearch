import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


import SearchIcon from '@material-ui/icons/Search';
import SaveIcon from '@material-ui/icons/Save';
import { fade, makeStyles } from '@material-ui/core/styles';

import Style from './styles'

export default function Nav () {
  const classes = Style();

  return (
    <div className={classes.root}>
    <AppBar fixed='top'>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit"><SearchIcon/></Button>
        <Button color="inherit"><SaveIcon/></Button>
      </Toolbar>
    </AppBar>
  </div>
  );
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
