import { Box, Drawer, Toolbar } from "@mui/material";
import React from "react";

const drawerWidth = 240;

export default function SideBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        {/* <List>
        {["Item 1", "Item 2", "Item 3", "Item 4"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      </Box>
    </Drawer>
  );
}
