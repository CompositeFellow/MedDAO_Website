import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FullBleed from "../global/Layout/FullBleed";
import { RedBullet } from "./RedBullet";
import { TrippleChevron } from "./TrippleChevron";

const HealthCareThree = () => {
  return (
    <FullBleed>
      <Flex
        as="section"
        w="100%"
        minH="500px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        bg="linear-gradient(180deg, #ff003f 0%, #0b0006 211.38%)"
        p="2rem"
      >
        {/* &gt;&gt;&gt; */}

        <Heading
          as="h2"
          fontFamily="Neue Montreal"
          fontSize={{base: '2rem',md:"3rem"}}
          color="white"
          fontWeight={700}
          my="2rem"
        >
          Web3 <TrippleChevron /> Healthcare 3.0
        </Heading>
        <List
          w="100%"
          maxW="1280px"
          bg="white"
          spacing={{base: 8, md:4}}
          py="3rem"
          px={{ base: "2rem", md: "4rem", lg: "6rem" }}
          listStyleImage="./bullet.png"
          borderRadius="1em"
          mt="1em"
          boxShadow="inset 10px 10px 10px #E8D3D3, inset -10px -10px 10px #FFF4F7;"
        >
          <ListItem
            color="black"
            fontSize="xl"
            fontFamily="Neue Montreal"
            fontWeight={400}
          >
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1rem">
              Aligned incentives using blockchain technology
            </Text>
          </ListItem>
          <ListItem
            color="black"
            fontSize="xl"
            fontFamily="Neue Montreal"
            fontWeight={400}
          >
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1rem">
              Knowledge and data owned by members of the DAO rather than
              companies
            </Text>
          </ListItem>
          <ListItem
            color="black"
            fontSize="xl"
            fontFamily="Neue Montreal"
            fontWeight={400}
          >
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1rem">
              Increase trust in the knowledge available through multiple
              opinions & collective wisdom
            </Text>
          </ListItem>
          <ListItem
            color="black"
            fontSize="xl"
            fontFamily="Neue Montreal"
            fontWeight={400}
          >
            <ListIcon as={RedBullet} />
            <Text as="span" ml="1rem">
              Collaborative participation of our community including healthcare
              providers, patients, developers and industry partners
            </Text>
          </ListItem>
        </List>
      </Flex>
    </FullBleed>
    // <GradientContainer>
    //   <Header> Healthcare 3.0</Header>
    //   <Container />
    // </GradientContainer>
  );
};

export default HealthCareThree;
