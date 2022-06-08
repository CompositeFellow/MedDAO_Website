import { GridItem, Heading, VStack } from "@chakra-ui/react";

type HeroCardProps = {
  title: string;
};

export const HeroCard = ({ title }: HeroCardProps) => (
  <>
    <GridItem
      as="li"
      w="100%"
      h={{base: '24rem', md:"22rem"}}
      bg={"#FF003F"}
      colSpan={{ sm: 1, md: 2 }}
      listStyleType="none"
      color="black"
    >
      <VStack
        as="section"
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          fontSize="5rem"
          textAlign={"center"}
          color="white"
          fontWeight={400}
        >
          {title}
        </Heading>
      </VStack>
    </GridItem>
  </>
);
