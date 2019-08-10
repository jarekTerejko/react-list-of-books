import React from "react";
import BookContextProvider from "./Contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
import Statistics from "./Components/Statistics";

function App() {
  return (
    
      <BookContextProvider>
        <Navbar />
        <div className="container">
        <Statistics />
        <BookList />
        <BookForm/>
        </div>
        
      </BookContextProvider>
    
  );
}

export default App;
