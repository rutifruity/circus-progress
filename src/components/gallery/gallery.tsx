import { Box } from "@mui/material";
import React from "react";
import TrickCard from "./trick-card";
import { cards } from "./static-cards";

export default function Gallery() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {cards.map((card, index) => (
        <TrickCard key={index} {...card} />
      ))}
    </Box>
  );
}
