// src/context/CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";
import { useSnackbar } from "../context/SnackbarContext";

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

export function CartProvider({ children }) {
  const { showHideSnackbar } = useSnackbar();
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD": {
        showHideSnackbar("تم إضافة الكتاب إلى سلة المشتريات");
        const newState = [...state, { ...action.book, quantity: 1 }];
        return newState;
      }
      case "REMOVE": {
        showHideSnackbar("تم إزالة الكتاب من سلة المشتريات");
        const newState = state.filter((item) => item.id !== action.id);
        return newState;
      }
      case "INCREASE": {
        showHideSnackbar("تم زيادة الكمية");
        const newState = state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return newState;
      }
      case "DECREASE": {
        showHideSnackbar("تم تقليل الكمية");
        const newState = state
          .map((item) =>
            item.id === action.id && item.quantity > 0
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
        return newState;
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
