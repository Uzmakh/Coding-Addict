import React from 'react'
import ReactDOM from 'react-dom/client'
// import BookList from './singleComponent/index'
import BookList from './BookList/index'
// import Book from './component/Book';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookList />
    {/* <Book/> */}
  </React.StrictMode>,
)
