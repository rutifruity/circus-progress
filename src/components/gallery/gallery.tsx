import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Gallery() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {cards.map((card, index) => (
        <Card key={index} sx={{ width: "calc(25% - 16px)", marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Card {card}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is card number {card}.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
