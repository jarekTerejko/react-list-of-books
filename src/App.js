import React from "react";
import BookContextProvider from "./Contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
import Statistics from "./Components/Statistics";
import StatisticsContextProvider from "./Contexts/StatisticsContext";

function App() {
  return (
    <BookContextProvider>
      <StatisticsContextProvider>
        <Navbar />
        <Statistics />
      </StatisticsContextProvider>
      <div className="container">
      <BookForm />
        <BookList />
        
      </div>
    </BookContextProvider>
  );
}

export default App;
