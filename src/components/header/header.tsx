import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" noWrap>
            Header
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
