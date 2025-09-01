export const addToCart = (book) => {
  let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (bookId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  cart = cart.filter((item) => item.id !== bookId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const isInCart = (bookId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  let isInCart = cart.find((book) => book.id == bookId);
  return isInCart;
};
