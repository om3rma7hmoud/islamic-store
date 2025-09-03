// pages/Cart.jsx
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>🛒 سلة التسوق</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>الكمية: {item.quantity}</p>
          <p>السعر: {item.quantity * item.price} </p>
          <button onClick={() => dispatch({ type: "INCREASE", id: item.id })}>
            ➕
          </button>
          <button onClick={() => dispatch({ type: "DECREASE", id: item.id })}>
            ➖
          </button>
          <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
            ❌ حذف
          </button>
        </div>
      ))}
      <h3>الإجمالي: {total} جنيه</h3>
    </div>
  );
}
