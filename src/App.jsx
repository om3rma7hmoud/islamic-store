import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { SnackbarProvider } from "./context/SnackbarContext";

function App() {
  return (
    <div className="app">
      <SnackbarProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/islamic-store" element={<Home />} />
            <Route
              path="/islamic-store/BookDetails/:id"
              element={<BookDetails />}
            />
            <Route path="/islamic-store/Cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
