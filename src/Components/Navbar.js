import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-book-reader" /> Reading List
        </a>
        <span className="text-white">
          Currently you have{" "}
          <span className="text-warning text-uppercase">
            {books.length} books
          </span>{" "}
          on your list
        </span>
      </div>
    </div>
  );
};

export default Navbar;
