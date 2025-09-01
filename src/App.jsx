import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/islamic-store" element={<Home />} />
        <Route
          path="/islamic-store/BookDetails/:id"
          element={<BookDetails />}
        />
        <Route path="/islamic-store/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
