import React, { useEffect } from "react";
import { CssBaseline, Box } from "@mui/material";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Gallery from "../gallery/gallery";
import { useRouter } from "next/router";

interface HomePageProps {
  page?: string;
}

const HomePage = ({ page }: HomePageProps) => {
  useEffect(() => {
    console.log("page", page);
  }, [page]);

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
          marginTop: "64px",
        }}
      >
        <Gallery />
        {page && <p>Current Page: {page}</p>}
      </Box>
    </Box>
  );
};

export default HomePage;
