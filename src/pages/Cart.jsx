import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AddedBookCard from "../components/AddedBookCard";

import { useCart } from "../context/CartContext";

export default function MediaControlCard() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <Container fixed style={{ marginTop: "25px" }}>
      {/* Books Grid */}
      <Grid container gap={5} justifyContent="center" className="books-grid">
        {/* Book */}
        {cart.map((book) => (
          <Grid key={book.id} xs={12} sm={8} md={6} lg={4}>
            <AddedBookCard book={book} />
          </Grid>
        ))}
        {/*=== Book ===*/}
      </Grid>
      {/*=== Books Grid ===*/}
      {/* Total */}
      <Typography
        variant="h5"
        align="center"
        sx={{ mt: 3, fontWeight: "bold" }}
      >
        الإجمالي: {total} ريال
      </Typography>
    </Container>
  );
}
