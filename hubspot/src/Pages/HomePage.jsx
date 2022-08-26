import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HomePageBody from "./HomePageBody";

const HomePage = () => {
  const mainNav = {
    position: "sticky",
    top: "-50px",
    backgroundColor: "white",
    zIndex: 1000,
    marginBottom: "3rem",
  };
  const bs = "base";
  return (
    <Box>
      <Navbar s={mainNav} bs={bs} />
      <HomePageBody />
      <Footer />
    </Box>
  );
};

export default HomePage;
