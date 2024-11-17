import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Gallery() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Typography>Main Section (Empty for now)</Typography>
    </Box>
  );
}
