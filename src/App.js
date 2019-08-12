import React from "react";
import BookContextProvider from "./Contexts/BookContext";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import BookForm from "./Components/BookForm";
import Statistics from "./Components/Statistics";
import StatisticsContextProvider from "./Contexts/StatisticsContext";
import Footer from "./Components/Footer";

function App() {
  return (
    <BookContextProvider>
      <StatisticsContextProvider>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 168px)" }}>
          <Statistics />
          <BookForm />
          <BookList />
        </main>
      </StatisticsContextProvider>
      <Footer />
    </BookContextProvider>
  );
}

export default App;
