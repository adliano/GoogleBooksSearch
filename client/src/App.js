import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './components/Nav'
import Paper from './components/paper'
import { H2, P } from './components/headers'
import SearchPage from './components/pages/SearchPage'
import SavedPage from './components/pages/SavedPage'


class App extends Component {

  render () {
    return (
      <BrowserRouter>
      <>
        <Nav />
        <Paper>
          <H2 align='center'>Google Books Search</H2>
          <P align='center'>Search for and Save Books of Interest</P>
        </Paper>
        <Route exact path='/' component={SearchPage}/>
        <Route exact path='/saved' component={SavedPage}/>
        </>
      </BrowserRouter>
    )
  }
}

export default App
