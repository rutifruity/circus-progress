import React from "react";
import { Drawer, Toolbar, Box } from "@mui/material";

const drawerWidth = 240;

const SideBar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        {/* <List>
          {content.sidebarItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Drawer>
  );
};

export default SideBar;
