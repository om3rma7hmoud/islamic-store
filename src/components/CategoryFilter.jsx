import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState } from "react";

export default function CategoryFilter({ changeFilter }) {
  const [category, setCategory] = useState("الكل");

  const handleCategory = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
      changeFilter(newCategory);
    }
  };
  return (
    <ToggleButtonGroup
      sx={{
        direction: "ltr",
        margin: "20px auto",
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
        rowGap: "20px",
      }}
      value={category}
      exclusive
      onChange={handleCategory}
      aria-label="text alignment"
      color="primary"
    >
      <ToggleButton value="تاريخ" aria-label="تاريخ">
        تاريخ
      </ToggleButton>
      <ToggleButton value="سيرة" aria-label="سيرة">
        سيرة
      </ToggleButton>
      <ToggleButton value="علوم الحديث" aria-label="علوم الحديث">
        علوم الحديث
      </ToggleButton>
      <ToggleButton value="حديث" aria-label="حديث">
        حديث
      </ToggleButton>
      <ToggleButton value="علوم القرآن" aria-label="علوم القرآن">
        علوم القرآن
      </ToggleButton>
      <ToggleButton value="تفسير" aria-label="تفسير">
        تفسير
      </ToggleButton>
      <ToggleButton
        sx={{ borderLeft: "1px solid rgba(0, 0, 0, 0.12) !important" }}
        value="فقه"
        aria-label="فقه"
      >
        فقه
      </ToggleButton>
      <ToggleButton value="أصول الفقه" aria-label="أصول الفقه">
        أصول الفقه
      </ToggleButton>
      <ToggleButton value="عقيدة" aria-label="عقيدة">
        عقيدة
      </ToggleButton>
      <ToggleButton value="الكل" aria-label="الكل">
        الكل
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
