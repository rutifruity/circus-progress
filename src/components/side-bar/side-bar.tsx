import React from "react";
import Link from "next/link";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import content from "@/text-content";

const drawerWidth = 240;

const SideBar: React.FC = () => {
  const navItems = Object.values(content.sideBar).map((value) => {
    return { text: value, path: `/tricks/${value.toLowerCase()}` };
  });

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
        {navItems.map((item) => (
          <List key={item.text}>
            <ListItem key={item.text}>
              <Link href={item.path} passHref>
                <ListItemText primary={item.text} />
              </Link>
            </ListItem>
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default SideBar;
