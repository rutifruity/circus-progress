import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import content from "@/text-content";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" noWrap>
            {content.header}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
