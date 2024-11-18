import { Box } from "@mui/material";
import React from "react";
import TrickCard, { TrickCardProps } from "./trick-card";
import moment from "moment";

export default function Gallery() {
  const cards: TrickCardProps[] = [
    {
      img: "/imgs/one.jpeg",
      trick: "chinstand",
      date: moment("2023-10-28").toDate(),
      notes: "First practtice after two weeks off, got fired that day",
      id: "1",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {cards.map((card, index) => (
        <TrickCard key={index} {...card} />
      ))}
    </Box>
  );
}
