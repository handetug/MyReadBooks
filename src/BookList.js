import React from 'react';
import Shelves from './Shelves';
import { Link } from 'react-router-dom';


//organize books by category
const BookList = (props) => {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelves
              books={props.currentlyReading}
              ShelfChange={props.ShelfChange}
              shelfName="Currently Reading"
             />
            <Shelves
              books={props.wantToRead}
              ShelfChange={props.ShelfChange}
              shelfName="Want To Read" />
            <Shelves
              books={props.read}
              ShelfChange={props.ShelfChange}
              shelfName="Read" />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    );
  }
  
  export default BookList;