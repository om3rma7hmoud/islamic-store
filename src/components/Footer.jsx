import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/footer.css";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1976d2",
        color: "white",
        fontWeight: "bold",
        py: 2,
        mt: 6,
        borderTop: "1px solid #ddd",
        width: "100%",
      }}
    >
      <Container
        fixed
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* النص */}
        <Typography variant="subtitle1">
          © {new Date().getFullYear()} موقعك – جميع الحقوق محفوظة
        </Typography>

        {/* روابط سريعة */}
        <Box>
          <Link to="/islamic-store/" className="footer-links" color="inherit">
            الرئيسية
          </Link>
          <Link
            to={"/islamic-store/Cart"}
            className="footer-links"
            color="inherit"
          >
            المنتجات
          </Link>
          <Link className="footer-links" color="inherit">
            تواصل معنا
          </Link>
        </Box>

        {/* سوشيال ميديا */}
        <Box>
          <a
            href="https://github.com/om3rma7hmoud/"
            target="_blank"
            style={{ color: "white" }}
          >
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/om3rmah7moud"
            target="_blank"
            style={{ color: "white" }}
          >
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="mailto:wearethe1u@gmail.com"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
