import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Paper from "./components/paper"
import { H2, P } from "./components/headers"

function App() {
  return (
    <div>
      <Nav />
      {/* <Books /> */}
      {/* <Paper h2='Google Books Search' p='Search for and Save Books of Interest'/> */}
      <Paper>
        <H2>Google Books Search</H2>
        <P>Search for and Save Books of Interest</P>
      </Paper>
      <Paper>
        ksnncjkncdjk;
      </Paper>
    </div>
  );
}

export default App;
