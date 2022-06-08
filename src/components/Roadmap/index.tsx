import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import MainColumn from "../../global/Layout/MainColumn";
import { useIsMobile } from "../_hooks";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

const Roadmap = () => {
  const isMobile = useIsMobile();
  return (
    <MainColumn>
      <Flex py={{ base: "4rem", md: "2rem" }} direction="column">
        <Heading
          as="h3"
          color="black"
          id="Roadmap"
          fontWeight={500}
          fontSize="6xl"
          p={0}
          px={{ base: "2rem", md: "none", lg:"1rem" }}
          pt="2rem"
        >
          Roadmap
        </Heading>
        {!isMobile && <DesktopView />}
        {isMobile && <MobileView />}
      </Flex>
    </MainColumn>
  );
};

export default Roadmap;
