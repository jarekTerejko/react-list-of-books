import React, { useContext, useState } from "react";
import { BookContext } from "../Contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  const [search, setSearch] = useState("");

  const handleChange = term => {
    setSearch(term);
  };

  return books.length ? (
    <div className="container">
      <div className="my-5">
        <h3 className="my-3">Search for a Book from Your List</h3>
        <label htmlFor="search">Search...</label>
        <div className="input-group mb-3">
          <input
            placeholder="Type book title or author here"
            className="form-control"
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={e => handleChange(e.target.value)}
          />
        </div>
        <h3 className="my-3">List of Books</h3>
        <ul className="list-group">
          {books
            .filter(book => {
              const titleAndAuthor =
                book.title.toLowerCase() + " " + book.author.toLowerCase();
              return titleAndAuthor.indexOf(search.toLowerCase()) >= 0;
            })
            .map(book => {
              return <BookDetails book={book} key={book.id} />;
            })}
        </ul>
      </div>
    </div>
  ) : (
    <div className="container">
      <h2>Your List Of Books is empty :(</h2>
    </div>
  );
};

export default BookList;
