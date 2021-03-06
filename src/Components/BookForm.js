import React, { useContext, useState } from "react";
import { BookContext } from "../Contexts/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (title !== "" && author !== "") {
      addBook(title, author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div className="container">
      <div className="my-5">
        <h3 className="text-capitalize">Add new book to list</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              className="form-control"
              id="title"
              type="text"
              placeholder="Enter book title here"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Book Author</label>
            <input
              id="author"
              className="form-control"
              type="text"
              placeholder="Enter book author here"
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
          </div>
          <button className="btn btn-success btn-sm">
            <i className="fas fa-plus" /> Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
