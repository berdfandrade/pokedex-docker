import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  Button,
  useDisclosure,
  Center,
  Spinner,
  Flex,
  Icon,
  Badge,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerFooter,
  Grid,
  useColorMode
} from "@chakra-ui/react";

import PokemonTypeBadge from "./PokemonTypeBadge";
import { PokeCellProps, PokemonDetails } from "../types/PokemonTypes";
import StatsSection from "./StatsSection";
import isMega from "../../helpers/isMega";
import heightHandle from "../../helpers/heightHandle";
import weightHandle from "../../helpers/weightHandle";
import { FaRuler, FaWeight } from "react-icons/fa";
import PlayButton from "./CryPlayButton";

const PokeCell: React.FC<PokeCellProps> = ({ pokemon }) => {

  const { colorMode } = useColorMode();

  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the Pokémon details!",
          error
        );
        setLoading(false);
      });
  }, [pokemon.url]);

  const handlePokemonClick = () => {
    onOpen();
  };

  return (
    <>
      <Box
        p={5}
        shadow="lg"
        borderWidth="1px"
        borderRadius="lg"
        onClick={handlePokemonClick}
        cursor="pointer"
        transition="transform 0.2s ease-in-out"
        _hover={{
          transform: "translateY(-9px)",
          shadow: "xl",
        }}
      >
        {loading ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          pokemonDetails && (
            <>
              <Center>
                <Box
                  bg={colorMode === 'dark' ? 'gray.900' : 'transparent'}
                  backgroundImage='url("https://www.transparenttextures.com/patterns/worn-dots.png")'
                  backgroundRepeat="repeat"
                  backgroundSize="auto"
                  borderRadius={"md"}
                  p={4}
                  w={"100%"}
                >
                  <Image
                    mr={"auto"}
                    ml={"auto"}
                    boxSize="150px"
                    src={
                      pokemonDetails.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt={pokemonDetails.name}
                  />
                </Box>
              </Center>
              <Flex flexDir="row" justifyContent={"space-between"}>
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  textTransform="capitalize"
                >
                  {isMega(pokemon.name) ? (
                    <Box>
                      <Text>{pokemon.name}</Text>
                      <Badge>MEGA</Badge>
                    </Box>
                  ) : null}

                  {pokemon.name}
                </Text>
                <Text as="b" fontSize="xs" mt={2} color={"gray.400"}>
                  Nº {pokemonDetails.id}
                </Text>
              </Flex>
              <PokemonTypeBadge types={pokemonDetails.types} />
            </>
          )
        )}
      </Box>
      <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text textTransform="capitalize">{pokemonDetails?.name}</Text>
            </DrawerHeader>
            <DrawerBody>
              {loading ? (
                <Center>
                  <Spinner size="xl" />
                </Center>
              ) : pokemonDetails ? (
                <>
                  <Center>
                    <Box
                      borderRadius={"md"}
                      mb={3}
                      bg={colorMode === 'dark' ? 'gray.900' : 'transparent'}
                      backgroundImage='url("https://www.transparenttextures.com/patterns/worn-dots.png")'
                      backgroundRepeat="repeat"
                      backgroundSize="auto"
                      p={4}
                    >
                      <Image
                        src={
                          pokemonDetails.sprites.other["official-artwork"]
                            .front_default
                        }
                        alt={pokemonDetails.name}
                      />
                    </Box>
                  </Center>

                  <Flex
                    flexDir={"row"}
                    alignItems="center"
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Flex flexDir={"row"} alignItems={"center"}>
                        <Icon color={"gray.400"} mr={3} as={FaRuler} />
                        <Text as={'b'} fontSize={'sm'} color={colorMode === 'dark' ? 'gray.200' :'gray.500'}>
                          Height:{" "}
                          <Text as="b">
                            {heightHandle(pokemonDetails.height)}
                          </Text>
                        </Text>
                      </Flex>
                      <Flex flexDir={"row"} alignItems={"center"}>
                        <Icon color={"gray.400"} mr={3} as={FaWeight} />
                        <Text as={'b'} fontSize={'sm'} color={colorMode === 'dark' ? 'gray.200' :'gray.500'}>
                          Weight:
                          <Text mb={5} as="b">
                            {" "}
                            {weightHandle(pokemonDetails.weight)}
                          </Text>{" "}
                        </Text>
                      </Flex>
                    </Box>
                    <Box>
                      <PlayButton audioUrl={pokemonDetails.cries.latest} />
                    </Box>
                  </Flex>

                  <Box mt={4}>
                    <Text  mb={2} as="b">
                      Types
                    </Text>
                    <PokemonTypeBadge types={pokemonDetails.types} />
                  </Box>
                  <Box mt={4}>
                    <Text mb={5} as="b">
                      Abilities
                    </Text>
                    <Grid w={'70%'}templateColumns="repeat(2, 1fr)" gap={[1, null]}>
                      {pokemonDetails.abilities.map((ability) => (
                        <Box
                          borderRadius={"full"}
                          mt={3}
                          w={[null, "90%"]}
                          
                          key={ability.slot}
                          p={2}
                          bg={ability.is_hidden ? "purple.200" : "teal.100"}
                          // borderWidth={1}
                        >
                          {" "}
                          <Center>
                            <Text
                              as="b"
                              fontSize={"sm"}
                              color={
                                ability.is_hidden ? "purple.800" : "blue.800"
                              }
                              textTransform="capitalize"
                            >
                              {ability.ability.name}
                            </Text>
                          </Center>
                        </Box>
                      ))}
                    </Grid>
                  </Box>
                  <StatsSection stats={pokemonDetails.stats} />
                </>
              ) : (
                <Text>Failed to load Pokémon details.</Text>
              )}
            </DrawerBody>
            <DrawerFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </>
  );
};

export default PokeCell;
