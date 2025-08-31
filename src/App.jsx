import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/islamic-store" element={<Home />} />
        <Route
          path="/islamic-store/BookDetails/:bookId"
          element={<BookDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
