import React, { useContext } from "react";
import { BookContext } from "../Contexts/BookContext";

const Statistics = () => {
  const { books } = useContext(BookContext);
  console.log(books);
  const getRecommended = () => {
    let recommended = 0;
    books.forEach(book => {
      if (book.recommended) {
        recommended = recommended + 1;
        console.log(recommended);
      }
    });

    return recommended;
  };

  const getNotRecommended = () => {
    let notRecommended = 0
    books.forEach(book => {
      if (!book.recommended) {
        notRecommended = notRecommended +1;
      }
    });

    return notRecommended;
  };


  const getCompleted = () => {
      let completed = 0
      books.forEach(book => {
          if(book.completed) {
              completed = completed +1
          }
      });
      return completed
   }
  const getNotCompleted = () => {
      let notCompleted = 0
      books.forEach(book => {
          if(!book.completed) {
              notCompleted = notCompleted +1
          }
      });
      return notCompleted
   }

  return (
    <div className="my-5">
    <h3 className="my-3">Statistics</h3>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">All books</th>
            <td>{books.length}</td>
          </tr>
          <tr>
            <th scope="row">Recommended</th>
            <td>{getRecommended()}</td>
          </tr>
          <tr>
            <th scope="row">Not Recommended</th>
            <td>{getNotRecommended()}</td>
          </tr>
          <tr>
            <th scope="row">Read</th>
            <td>{getCompleted()}</td>
          </tr>
          <tr>
            <th scope="row">Unread</th>
            <td>{getNotCompleted()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
