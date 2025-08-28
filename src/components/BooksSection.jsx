import Container from "@mui/material/Container";
import CategoryFilter from "./CategoryFilter";
import BookCard from "./BookCard";
import BooksData from "../data/books.json";
import Grid from "@mui/material/Grid";

export default function BooksSection() {
  return (
    <Container>
      <CategoryFilter />
      <Grid container gap={3} justifyContent="center" alignItems={"stretch"}>
        {BooksData.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
