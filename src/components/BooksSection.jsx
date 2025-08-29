import Container from "@mui/material/Container";
import CategoryFilter from "./CategoryFilter";
import BookCard from "./BookCard";
import BooksData from "../data/books.json";
import Grid from "@mui/material/Grid";

export default function BooksSection() {
  return (
    <Container fixed>
      <CategoryFilter />
      <Grid
        container
        // spacing={3}
        gap={3}
        justifyContent="center"
        // alignItems={"stretch"}
        // columns={{ xs: 12, sm: 8, md: 12 }}
      >
        {BooksData.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
