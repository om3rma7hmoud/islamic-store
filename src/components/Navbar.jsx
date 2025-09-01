import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import "../styles/navbar.css";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalQuantity = quantity !== 0 ? quantity : "0";

  return (
    <AppBar position="sticky" color="primary">
      <Container fixed>
        <Toolbar>
          <Typography
            className="nav-logo"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/islamic-store/"
            >
              مكتبة تراث
            </Link>
          </Typography>
          <Link style={{ color: "white" }} to={"/islamic-store/Cart"}>
            <IconButton
              className="nav-link"
              size="large"
              aria-label="show 17 new shoppingcart"
              color="inherit"
            >
              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
