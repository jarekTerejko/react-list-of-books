import React, { useContext, useState } from "react";
import { BookContext } from "../Contexts/BookContext";
import BookDetails from "./BookDetails";

// import BookSearch from "./BookSearch";

const BookList = () => {
  const { books } = useContext(BookContext);

  const [search, setSearch] = useState("");

  const handleChange = (term) => {
    
    setSearch(term);
 
  };

  return books.length ? (
    <div className="my-5">
      <h3 className="my-3">Search Your Book List</h3>

        <label htmlFor="search" >Search Your Book List</label>

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
        .filter(book=>{
          const titleAndAuthor = book.title.toLowerCase() + " " + book.author.toLowerCase()
          return titleAndAuthor.indexOf(search.toLowerCase()) >= 0
        })
        .map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>No books to read :(</p>
    </div>
  );
};

export default BookList;
