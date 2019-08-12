import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import { StatisticsContext } from "../Contexts/StatisticsContext";

const Navbar = () => {
  const { deleteAllBooks } = useContext(BookContext);
  const { toggleStatistics } = useContext(StatisticsContext);

  // console.log(statisticsVisible);
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-book-reader" /> List Of Books
        </a>
        <div>
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={toggleStatistics}
          >
            <i className="fas fa-info" /> Show Statistics
          </button>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={deleteAllBooks}
          >
            <i className="far fa-trash-alt" /> Remove Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
