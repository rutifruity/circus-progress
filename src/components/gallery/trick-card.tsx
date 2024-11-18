import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export type TrickCardProps = {
  img: string;
  trick: string;
  date: Date;
  notes: string;
  id: string;
};

export default function TrickCard({
  trick,
  date,
  notes,
  id,
  img,
}: TrickCardProps) {
  return (
    <Card key={id} sx={{ width: "calc(25% - 16px)", marginBottom: 2 }}>
      <CardMedia component="img" height="140" image={img} alt={trick} />
      <CardContent>
        <Typography variant="h5" component="div">
          {trick}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {notes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date.toDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
