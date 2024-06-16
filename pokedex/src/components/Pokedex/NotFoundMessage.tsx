import React from "react";
import { Center, Icon, Text } from "@chakra-ui/react";
import { TbPokeball } from "react-icons/tb";

const NotFoundMessage: React.FC = () => {
  return (
    <Center flexDirection="column">
      <Icon as={TbPokeball} boxSize={'200px'}/>
      <Text fontSize="xl">Pokémon not found!</Text>
    </Center>
  );
};

export default NotFoundMessage;