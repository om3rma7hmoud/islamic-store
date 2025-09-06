import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Button from "@mui/material/Button";

import { useCart } from "../context/CartContext";

import "../styles/added-book-card.css";

export default function AddedBookCard({ book }) {
  const { cart, dispatch } = useCart();
  return (
    <Card
      sx={{
        display: "flex",
        width: 480,
        borderRadius: 3,
        boxShadow: 4,
        transition: "0.3s",
        "&:hover": { boxShadow: 8, transform: "scale(1.02)" },
      }}
      className="added-book-card"
    >
      {/* Card Content */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {/* Title */}
          <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
            {book.title}
          </Typography>
          {/*=== Title ===*/}
          {/* Description */}
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "text.secondary", mt: 0.5 }}
          >
            {book.description}
          </Typography>
          {/*=== Description ===*/}
          {/* Total Price */}
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "black", mt: 3 }}
          >
            السعر: {book.quantity * book.price} ريال
          </Typography>
          {/*=== Total Price ===*/}
        </CardContent>

        {/* Card Actions */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pr: 1,
            pl: 2,
            pb: 2,
            gap: 1,
          }}
        >
          {/* Amount */}
          <div
            className="amount-action"
            style={{
              display: "flex",
              alignItems: "center",
              pl: 2,
              pb: 2,
              gap: 1,
              marginBottom: "15px",
            }}
          >
            <IconButton
              onClick={() => dispatch({ type: "INCREASE", id: book.id })}
              aria-label="previous"
              color="primary"
            >
              <AddOutlinedIcon
                fontSize="large"
                style={{ border: "1px solid" }}
              />
            </IconButton>
            {/* Amount */}
            <Typography
              variant="h4"
              component="div"
              sx={{ mt: 0.5, mx: "10px" }}
            >
              {book.quantity}
            </Typography>
            {/*=== Amount ===*/}
            <IconButton
              onClick={() => dispatch({ type: "DECREASE", id: book.id })}
              aria-label="next"
              color="primary"
            >
              <RemoveOutlinedIcon
                fontSize="large"
                style={{ border: "1px solid" }}
              />
            </IconButton>
          </div>
          {/*=== Amount ===*/}
          <Button
            onClick={() => dispatch({ type: "REMOVE", id: book.id })}
            variant="contained"
            color="error"
          >
            إزالة من السلة
          </Button>
        </Box>
        {/*=== Card Actions ===*/}
      </Box>
      {/*=== Card Content ===*/}

      <CardMedia
        component="img"
        image={`${import.meta.env.BASE_URL}` + book.image}
        sx={{
          width: 200,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          objectFit: "cover",
        }}
        alt={book.title}
      />
    </Card>
  );
}
