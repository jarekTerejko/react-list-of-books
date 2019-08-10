import React, { useContext, useState } from "react";
import { BookContext } from "../Contexts/BookContext";

const BookDetails = ({ book }) => {
  const { deleteBook, updateBook, toggleCompletion, toggleRecommendation } = useContext(BookContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  console.log(isEditing);

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateSubmit = e => {
    e.preventDefault();
    updateBook(book.id, title, author);
    toggleForm();
  };

  // const handleToggleCompletion = () => {
  //   toggleCompletion(book.id);
  // };

  // const handleToggleRecommendation= ()=> {
  //   toggleRecommendation(book.id)
  // }

  let result;
  if (isEditing) {
    result = (
      <div className="my-2">
        <li className="list-group-item  bg-warning">
          <form onSubmit={handleUpdateSubmit} className="my-2">
            <h4 className="text-white">Editing...</h4>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-sm"
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>
            <button className="btn btn-success btn-sm">
              <i className="far fa-check-square" /> Update
            </button>
          </form>
        </li>
      </div>
    );
  } else {
    result = (
      <div className="my-2">
        <li className="list-group-item">
          <h5 style={{ fontWeight: 400 }}>Tilte: {book.title}</h5>
          <h6 style={{ fontWeight: 400 }}>Author: {book.author}</h6>
          <button
            className="btn btn-danger m-1"
            onClick={() => deleteBook(book.id)}
          >
            <i className="far fa-trash-alt" /> Remove
          </button>
          <button className="btn btn-primary m-1" onClick={toggleForm}>
            <i className="far fa-edit" /> Edit
          </button>
          <button
            className={
              book.completed ? "btn btn-success m-1" : "btn btn-secondary m-1"
            }
            onClick={()=> toggleCompletion(book.id)}
          >
            <i className={book.completed ? "far fa-smile" : "far fa-meh"} />{" "}
            Status
          </button>
          <button className={ book.recommended ? "btn btn-primary m-1" : "btn btn-secondary m-1"} onClick={()=> toggleRecommendation(book.id)}>
          <i className="fas fa-clipboard-check"></i> Recommend
          </button>
        </li>
      </div>
    );
  }

  return result;
};

export default BookDetails;
