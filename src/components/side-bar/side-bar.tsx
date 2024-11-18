import React, { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import content from "@/text-content";
import { NavItem } from "./nav-item.type";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import StarIcon from "@mui/icons-material/Star";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

const drawerWidth = 240;

const SideBar: React.FC = () => {
  const navItems: NavItem[] = Object.values(content.sideBar).map((value) => {
    return { text: value, path: `/tricks/${value.toLowerCase()}` };
  });

  const getIcon = (text: string) => {
    switch (text.toLowerCase()) {
      case "chinstand":
        return <SportsGymnasticsIcon />;
      case "inspirations":
        return <StarIcon />;
      case "bridge":
        return <SelfImprovementIcon />;
      case "handstand":
        return <WavingHandIcon />;
      default:
        return null;
    }
  };

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
        <List>
          {navItems.map((item) => (
            <Link href={item.path} passHref key={item.text}>
              <ListItem
                sx={{
                  "&:hover": {
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon sx={{ color: "#D8BFD8" }}>
                    {getIcon(item.text)}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </Box>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
