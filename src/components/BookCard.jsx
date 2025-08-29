import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default function BookCard({ book }) {
  console.log(book.image);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        image={`${import.meta.env.BASE_URL}` + book.image}
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
      <CardActions>
        <Button variant="contained" color="primary">
          أضف إلى السلة
        </Button>
      </CardActions>
    </Card>
  );
}
