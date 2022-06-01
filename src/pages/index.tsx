import { GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";
import HealthCareThree from "../components/HealthCareThree";
import Hero from "../components/Hero";
import LogoTransition from "../components/LogoTransition";
import TextScroll from "../components/TextScroll";
import What from "../components/What";

const Home: NextPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* grid item ensures the 1st item starts below navbar */}
      <GridItem gridColumn={2} h="5rem" />
      <Hero />
      <LogoTransition />
      <What />
      <HealthCareThree />
      <TextScroll />
      <GridItem gridColumn={2} h="5rem" />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
