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
      <Gallery />
    </Box>
  );
};

export default HomePage;
