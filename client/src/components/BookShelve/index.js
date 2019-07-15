import React from 'react'
// import Books from './pages/Books'
import { H2, H5, P } from '../headers'

import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

import Book from '../Book'

function BookShelve (props) {
  /**
   * Theme
   */
  const theme = {
    spacing: 8
  }

  return (
    <div>
      <Box m={2}>
        <H5 style={{ margin: 10 }} align='inherit'>
          {props.header}
        </H5>
        <Box border={0} borderColor='grey.500' borderRadius={5}>
          {/* ************************************************************** */}
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          <Book title='Book Name' author='Somebody' previewLink='' thumbnail='https://via.placeholder.com/250x250' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>          
          {/* <Book /> */}
          {/* *************************************************************** */}
        </Box>
      </Box>
    </div>
  )
}

export default BookShelve

/* <H3>{props.name}</H3>
              <H5>{props.gretting}</H5>
              <H5>{props.author}</H5>
              <P>{props.about}</P> */
              /*
{
    id: "N9Sk0uyOf-8C"
    title: "Crash",
    author: ["Ann Harth"],
    description:
    "Highlights! is an innovative series of original works of fiction aimed at students aged between 10 to 15 years who find reading challenging. In the book Crash!, it deals with courage and self-reliance. Nalini and Zed are flying to visit their relatives for a holiday. Their plane encounters a huge storm and crashes near a deserted island. The pilot is killed and the teenagers are along. They manage to find shelter, food and even water. It seems almost too easy for two young people stranded all alone. Or are they alone?",
    previewLink: "https://books.google.com/books?id=N9Sk0uyOf-8C&printsec=frontcover&dq=crash&hl=&cd=6&source=gbs_api#v=onepage&q=crash&f=false",
    thumbnail: "https://books.google.com/books/content?id=N9Sk0uyOf-8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  }
*/
