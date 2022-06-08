import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { roadmap } from "../../constants/daoInfo";
import EmptyCircle from "./EmptyCircle";
import FullCircle from "./FullCircle";
import HalfCircle from "./HalfCircle";

const Objectives = roadmap.map((obj) => (
  <Tr key={obj.id} bg={obj.id % 2 ? "white" : "#fff4f7"} h="5rem">
    <Td color="black" borderBottom="none">
      <Text fontSize="xl" fontWeight={400}>{obj.objective}</Text>
    </Td>
    <Td>
      <Flex justifyContent="center">
        {obj.completed ? <FullCircle /> : <EmptyCircle />}
      </Flex>
    </Td>
    <Td>
      <Flex justifyContent="center">
        {obj.inProgress ? <HalfCircle /> : <EmptyCircle />}
      </Flex>
    </Td>
    <Td>
      <Flex justifyContent="center">
        {obj.futurePlans ? <FullCircle /> : <EmptyCircle />}
      </Flex>
    </Td>
  </Tr>
));

export const DesktopView = () => (
  <TableContainer>
    <Table variant="striped" colorScheme="brand" textAlign="center">
      <Thead>
        <Tr display={{ base: "none", md: "table-row" }}>
          <Th></Th>
          <Th color="black">
            <Text
              fontFamily="IBM Plex Mono"
              fontWeight={400}
              fontSize="1rem"
              textAlign="center"
            >
              Completed
            </Text>
          </Th>
          <Th color="black">
            <Text
              fontFamily="IBM Plex Mono"
              fontWeight={400}
              fontSize="1rem"
              textAlign="center"
            >
              In Progress
            </Text>
          </Th>
          <Th color="black">
            <Text
              fontFamily="IBM Plex Mono"
              fontWeight={400}
              fontSize="1rem"
              textAlign="center"
            >
              Future Plans
            </Text>
          </Th>
        </Tr>
      </Thead>
      <Tbody>{Objectives}</Tbody>
    </Table>
  </TableContainer>
);
