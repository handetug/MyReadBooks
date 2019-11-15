import React from 'react';
import Book from './Book';

//update shelf When changes
class Shelves extends React.Component {
    ShelfChange = (event) => {
        event.preventDefault();
        this.props.ShelfChange(event.target.id, event.target.value);
    }
    
    render() {
        const shelfBooks = this.props.books.map(book => {
            return (
                <Book
                    key={book.id}
                    book={book}
                    onCategorySelectionChanged={this.ShelfChange}
                />
            );
        });
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelves;