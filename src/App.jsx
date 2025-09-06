import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { CartProvider } from "./context/CartContext";
import { SnackbarProvider } from "./context/SnackbarContext";

function App() {
  return (
    <div className="app">
      <SnackbarProvider>
        <CartProvider>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/islamic-store" element={<Home />} />
              <Route
                path="/islamic-store/BookDetails/:id"
                element={<BookDetails />}
              />
              <Route path="/islamic-store/Cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
