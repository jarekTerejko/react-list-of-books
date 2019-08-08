import React from "react";
import BookContextProvider from "./Contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";

function App() {
  return (
    
      <BookContextProvider>
        <Navbar />
        <div className="container">
        <BookList />
        <BookForm/>
        </div>
        
      </BookContextProvider>
    
  );
}

export default App;
