import React from 'react'
import Books from './pages/Books'
import Nav from './components/Nav'
import Paper from './components/paper'
import { H2, H5, P } from './components/headers'

function App () {
  return (
    <div>
      <Nav />
      {/* <Books /> */}
      <Paper>
        <H2 align='center'>Google Books Search</H2>
        <P align='center'>Search for and Save Books of Interest</P>
      </Paper>
      <Paper>
        <P align='inherit'>Saved Books</P>
        <Paper>
          <H5 align='inherit'>Anim incididunt .</H5>
          <P>
            Quis sint mollit ut quis qui proident. Minim tempor irure qui
            proident et amet labore ex minim. Ad amet id excepteur nulla culpa
            pariatur nostrud dolor aliquip proident magna elit tempor. Velit
            nostrud dolor laboris laboris deserunt. Duis laboris dolore ut sit
            laborum cupidatat incididunt. Sit voluptate id ut nulla adipisicing.
            Fugiat amet reprehenderit do nisi. Nisi mollit dolor anim incididunt
            aliqua. Ullamco amet ut sint cillum ipsum sit eiusmod et aute fugiat
            qui laborum cillum. Culpa eu ad labore minim consectetur quis dolore
            culpa. Nostrud quis Lorem ex cupidatat labore est ad tempor magna
            aliquip occaecat fugiat eiusmod quis. Cupidatat esse nisi in
            proident eiusmod exercitation commodo. Aliquip do est eu ipsum et
            mollit. Pariatur nisi dolore aute laboris in ullamco cillum
            consequat sunt laboris do. Elit quis aliqua aliqua consequat fugiat
            dolor. Consectetur cupidatat quis aute eu officia nisi magna aliquip
            velit. Sit proident occaecat aute id qui ullamco. Mollit pariatur
            voluptate tempor ad sunt nisi et labore qui aute labore sint
            consectetur ad. Id culpa aute cupidatat do. Deserunt officia tempor
            adipisicing officia elit aliqua laboris mollit do amet voluptate.
            Aliquip dolor quis sunt elit qui magna nulla. Cillum aute ullamco
            cupidatat incididunt in exercitation enim. Amet labore magna aliqua
            ullamco ullamco duis. Elit nostrud occaecat officia sunt nisi veniam
            magna dolore excepteur enim dolor esse do. Reprehenderit laborum
            pariatur eiusmod ullamco do irure consequat aliqua aliqua. Consequat
            quis dolore laborum ullamco.
          </P>
        </Paper>
      </Paper>
    </div>
  )
}

export default App
