import React from "react";
import { CssBaseline, Box } from "@mui/material";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Gallery from "../gallery/gallery";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <SideBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "64px", // Adjust based on the height of your Header
        }}
      >
        <Gallery />
      </Box>
    </Box>
  );
};

export default HomePage;
