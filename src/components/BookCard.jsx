import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

import imageUrlTest from "/images/nwaqed.jpg";

import "../styles/book-card.css";

export default function BookCard({ book }) {
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
        <Typography variant="body" sx={{ color: "text.secondary" }}>
          السعر: {book.price}
        </Typography>
      </CardContent>
      <CardActions style={{ gap: "10px" }} className="add-button">
        <Link to={`/islamic-store/BookDetails/${book.id}`}>
          <Button variant="contained" color="secondary">
            التفاصيل
          </Button>
        </Link>
        <Button variant="contained" color="primary">
          أضف إلى السلة
        </Button>
      </CardActions>
    </Card>
  );
}
