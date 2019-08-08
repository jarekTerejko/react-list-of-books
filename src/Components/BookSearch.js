import React, { useState, useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const BookSearch = props => {
  const { books, searchBook } = useContext(BookContext);

  console.log(props);
  const [search, setSearch] = useState("");

  const handleChange = term => {
    setSearch(term);
    props.getSearch(term);

    console.log(term);
  };

  return (
    <div>
      <input
        type=""
        name="search"
        value={search}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
};

export default BookSearch;
