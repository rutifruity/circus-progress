import content from "@/text-content";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" noWrap>
            {content.header}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
