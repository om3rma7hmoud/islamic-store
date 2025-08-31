import booksData from "../data/books.json";

import { useParams } from "react-router-dom";

import "../styles/BookDetails.css";

export default function BookDetails() {
  const { bookId } = useParams();
  const book = booksData.find((book) => {
    return book.id == bookId;
  });

  return (
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
          <button className="add-to-cart"> أضف للسلة</button>
        </div>
      </div>
    </div>
  );
}
