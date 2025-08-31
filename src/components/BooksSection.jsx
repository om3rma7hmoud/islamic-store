import Container from "@mui/material/Container";
import CategoryFilter from "./CategoryFilter";
import BookCard from "./BookCard";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import BooksData from "../data/books.json";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BooksSection() {
  /* Search Type */
  const [searchType, setSearchType] = useState("عنوان الكتاب");
  const [searchText, setSearchText] = useState("");
  /*=== Search Type ===*/

  /* Filter Books */
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  let filteredBooks = BooksData.filter((book) => {
    const matchCategory =
      selectedCategory === "الكل" || book.category === selectedCategory;

    const matchSearch =
      searchType === "عنوان الكتاب"
        ? book.title.includes(searchText)
        : book.author.includes(searchText);
    return matchCategory && matchSearch;
  });
  /*=== Filter Books ===*/
  return (
    <Container fixed>
      {/* Filter Books */}
      <CategoryFilter changeFilter={setSelectedCategory} />
      {/*=== Filter Books ===*/}
      {/* Search a Book */}
      <Grid spacing={3} container style={{ marginBottom: "25px" }}>
        <Grid size={8}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label={searchType}
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Grid>
        <Grid size={4}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <MenuItem value={"عنوان الكتاب"}>عنوان الكتاب</MenuItem>
              <MenuItem value={"مؤلف الكتاب"}>مؤلف الكتاب</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/*=== Search a Book ===*/}
      {/* Books Grid */}
      <Grid container gap={3} className="books-grid">
        {filteredBooks.map((book) => (
          <Grid key={book.id} xs={12} sm={6} md={4}>
            <Item className="book-item">
              <BookCard book={book} />
            </Item>
          </Grid>
        ))}
      </Grid>
      {/*=== Books Grid ===*/}
    </Container>
  );
}
