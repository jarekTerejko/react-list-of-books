import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";
import { StatisticsContext } from "../Contexts/StatisticsContext";

const Navbar = () => {
  const { books, deleteAllBooks } = useContext(BookContext);
  // const statisticsVisible = useContext(StatisticsContext)
  const {statisticsVisible, toggleStatistics} = useContext(StatisticsContext)

  console.log(statisticsVisible)
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className="fas fa-book-reader" /> List Of Books
        </a>
        {/* <span className="text-white">
          Currently you have{" "}
          <span className="text-warning text-uppercase">
            {books.length} books
          </span>{" "}
          on your list
        </span> */}
        <button className="btn btn-primary btn-sm" onClick={toggleStatistics}>
        <i class="fas fa-eye"></i> Show Statistics
        </button>
        <button className="btn btn-danger btn-sm" onClick={deleteAllBooks}>
          <i className="far fa-trash-alt" /> Remove Books
        </button>
      </div>
    </div>
  );
};

export default Navbar;
