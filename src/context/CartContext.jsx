// src/context/CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

function cartReducer(state, action) {
  let updatedCart;
  switch (action.type) {
    /* Add Book */
    case "ADD": {
      const exist = state.find((item) => item.id === action.book.id);
      if (exist) {
        updatedCart = state.map((item) =>
          item.id === action.book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state, { ...action.book, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    /*=== Add Book ===*/

    /* Remove Book */
    case "REMOVE": {
      updatedCart = state.filter((item) => item.id !== action.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    /*=== Remove Book ===*/

    /* Increase Book */
    case "INCREASE": {
      updatedCart = state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    /*=== Increase Book ===*/

    /* Decrease Book */
    case "DECREASE": {
      updatedCart = state.map((item) =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    /*=== Decrease Book ===*/

    case "CLEAR": {
      localStorage.removeItem("cart");
      return [];
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // عشان يفضل الـ localStorage متزامن
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = { cart, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
