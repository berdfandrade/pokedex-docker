import React from "react";
import { Box, Badge, Text } from "@chakra-ui/react";

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface PokemonTypeBadgeProps {
  types: PokemonType[];
}

const typeColorMap: { [key: string]: string } = {
  normal: "gray",
  fire: "red",
  water: "blue",
  electric: "yellow",
  grass: "green",
  ice: "cyan",
  fighting: "orange",
  poison: "purple",
  ground: "orange",
  flying: "gray",
  psychic: "pink",
  bug: "teal",
  rock: "orange",
  ghost: "purple",
  dragon: "purple",
  dark: "purple",
  steel: "gray",
  fairy: "pink",
};

const PokemonTypeBadge: React.FC<PokemonTypeBadgeProps> = ({ types }) => {
  return (
    <Box mt={2}>
      {types.map((typeInfo) => (
        <Badge
          p={1}
          pr={4}
          pl={4}
          borderRadius={"full"}
          key={typeInfo.slot}
          colorScheme={typeColorMap[typeInfo.type.name] || "gray"}
          mr={1}
        >
          <Text>{typeInfo.type.name}</Text>
        </Badge>
      ))}
    </Box>
  );
};

export default PokemonTypeBadge;
