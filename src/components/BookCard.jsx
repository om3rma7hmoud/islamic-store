/* MUI */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

/* OTHERS */
import imageUrlTest from "/images/nwaqed.jpg";

/* STYLE */
import "../styles/book-card.css";
import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { dispatch, cart } = useCart();
  const inCart = cart.some((item) => item.id === book.id);
  return (
    <Card className="book-card" sx={{ maxWidth: 345, boxShadow: "0" }}>
      <CardMedia
        component="img"
        height="500"
        image={imageUrlTest}
        // image={`${import.meta.env.BASE_URL}` + book.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h3">
          {book.title}
        </Typography>
        <Typography variant="body" sx={{ color: "text.secondary" }}>
          {book.description}
        </Typography>
      </CardContent>
      <CardActions style={{ gap: "10px" }} className="add-button">
        <Link to={`/islamic-store/BookDetails/${book.id}`}>
          <Button variant="contained" color="secondary">
            التفاصيل
          </Button>
        </Link>
        {!inCart ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch({ type: "ADD", book })}
          >
            أضف إلى السلة
          </Button>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch({ type: "REMOVE", id: book.id })}
          >
            إزالة من السلة
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
