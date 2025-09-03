// src/context/CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD": {
        return [...state, { ...action.book, quantity: 1 }];
      }
      case "REMOVE": {
        return state.filter((item) => item.id !== action.id);
      }
      case "INCREASE": {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      case "DECREASE": {
        return state
          .map((item) =>
            item.id === action.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
      }
      case "CLEAR": {
        return [];
      }
      default:
        return state;
    }
  }

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
