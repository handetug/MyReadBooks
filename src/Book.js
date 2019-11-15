import React, { Component } from "react";

class Book extends Component {
    book = this.props.book;
    render() {
        let isThumbExist = typeof this.book.imageLinks !== "undefined" ? true : false;
        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128, height: 188, backgroundImage: isThumbExist
                                ? `url(${this.book.imageLinks.thumbnail})`
                                : null
                        }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select id={this.book.id} onChange={this.props.onCategorySelectionChanged} value={this.props.book.shelf}>
                                <option value="moveto" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.book.title}</div>
                    {this.book.authors ? this.book.authors.map(author => (
                        <div key={author} className="book-authors">{author}</div>
                    )) : ''}
                </div>
            </div>

        );
    }
}
export default Book