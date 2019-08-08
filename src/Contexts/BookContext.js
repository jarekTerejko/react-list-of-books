import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const initialData = JSON.parse(localStorage.getItem("books")) || [];

  const [books, setBooks] = useState(
    // [
    // {
    //   title: "Game of thrones",
    //   author: "George R. R. Martin",
    //   id: Math.random()
    // },
    // {
    //   title: "Niewidzialny w sieci",
    //   author: "Kevin Mitnick",
    //   id: Math.random()
    // }
    // ]
    initialData
  );

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (title, author) => {
    setBooks([
      ...books,
      { title: title, author: author, id: Math.random(), completed: false }
    ]);
  };

  const deleteBook = id => {
    setBooks(
      books.filter(book => {
        return book.id !== id;
      })
    );
  };

  const toggleCompletion = id => {
    const booksToToggle = books.map(book => {
      if (book.id === id) {
        return { ...book, completed: !book.completed };
      }
      return book;
    });

    setBooks(booksToToggle);
  };

  const updateBook = (id, title, author) => {
    const booksToUpdate = books.map(book => {
      if (book.id === id) {
        return { ...book, title: title, author: author };
      }
      console.log(book);
      return book;
    });

    setBooks(booksToUpdate);
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, deleteBook, updateBook, toggleCompletion }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
