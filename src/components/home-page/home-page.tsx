import React, { useEffect } from "react";
import { CssBaseline, Box } from "@mui/material";
import Header from "../header/header";
import SideBar from "../side-bar/side-bar";
import Gallery from "../gallery/gallery";

interface HomePageProps {
  page?: string;
}

const HomePage = ({ page }: HomePageProps) => {
  useEffect(() => {
    console.log("page", page);
  }, [page]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
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
    </Box>
  );
};

export default HomePage;
