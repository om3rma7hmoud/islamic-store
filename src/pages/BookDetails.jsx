import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

/* Books */
import booksData from "../data/books.json";

/* Hooks */
import { useParams } from "react-router-dom";

/* Style */
import "../styles/BookDetails.css";

/* Others */
// import { addToCart, removeFromCart, isInCart } from "../utils/cart";
import { useCart } from "../context/CartContext";

export default function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((book) => {
    return book.id === parseInt(id);
  });

  const { dispatch, cart } = useCart();
  const inCart = cart.find((item) => item.id === book.id);
  return (
    <Container>
      <div className="book-page">
        <div className="book-hero">
          {/* صورة الغلاف */}
          <div className="book-cover">
            <img
              src={`${import.meta.env.BASE_URL}` + book.image}
              alt={book.title}
            />
          </div>

          {/* معلومات الكتاب */}
          <div className="book-info">
            <h1>{book.title}</h1>
            <p className="author">المؤلف: {book.author}</p>
            <p className="price">{book.price} ريال</p>
            <p className="description">{book.description}</p>
            {!inCart ? (
              <Button
                className="add-to-cart"
                variant="contained"
                color="primary"
                onClick={() => dispatch({ type: "ADD", book })}
              >
                أضف إلى السلة
              </Button>
            ) : (
              <Button
                className="remove-from-cart"
                variant="contained"
                color="error"
                onClick={() => dispatch({ type: "REMOVE", id: book.id })}
              >
                إزالة من السلة
              </Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
