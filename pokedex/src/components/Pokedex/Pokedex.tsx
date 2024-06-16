import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  SimpleGrid,
  Center,
  Container,
  Heading,
  Button,
  HStack,
  Icon,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import PokeCell from "./PokeCell";
import { TbPokeball } from "react-icons/tb";
import DarkModeToggle from "../ToggleDarkMode/ToggleDarkModeButton";
import NotFoundMessage from "./NotFoundMessage";
import Footer from "../Footer/Footer";
import PokeballSpinner from "../Others/PokeballSpinner";



interface Pokemon {
  url : string;
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  description: string;
}

const ITEMS_PER_PAGE = 20;


const Pokedex: React.FC = () => {
  const { colorMode } = useColorMode();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  /* 
  
    Caso queria usar a API em produção, deve mudar essa URL.
    Gostaria de fazer uma implementação mais sofisticada usando
    o yarn dev para a url de desenvolvimento, mas não deu tempo :(
    
  */

   const API_URL = 'http://localhost:8000'

  useEffect(() => {
    axios
      .get(`${API_URL}/pokemons`) // URL DA API
      .then((response) => {
        setPokemons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the Pokémon data!", error);
        setLoading(false);
      });
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPokemon = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPokemon = indexOfLastPokemon - ITEMS_PER_PAGE;
  const currentPokemons = filteredPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  if (loading) {
    return (
        <PokeballSpinner/>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Center mb={8}>
      <Flex flexDir={'column'} gap={2}>
        <Flex gap={3} flexDir="row" alignItems={"center"}>
          
          <Heading as="h1" size="xl" textAlign="center">
            Pokédex
          </Heading>
      
          <Icon boxSize={"50px"} as={TbPokeball} />
          <DarkModeToggle />
        </Flex>
      
        </Flex>
       
      </Center>

      <Center mb={8}>
        <InputGroup width={{ base: "100%", md: "50%" }}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder={"Search Pokémon"}
            value={searchQuery}
            onChange={handleSearch}
            bg={colorMode === "dark" ? "gray.900" : "transparent"}
          />
        </InputGroup>
      </Center>

      {filteredPokemons.length === 0 ? ( // Verifica se não há Pokémon filtrado
        <NotFoundMessage />
      ) : (
        <>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={10}
            px={5}
          >
            {currentPokemons.map((pokemon) => (
              <PokeCell key={pokemon.id} pokemon={pokemon} />
            ))}
          </SimpleGrid>

          <HStack justifyContent="center" mt={10}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button
              onClick={handleNextPage}
              disabled={indexOfLastPokemon >= filteredPokemons.length}
            >
              Next
            </Button>
            
          </HStack>
          <Footer/>
        </>
      )}
      
    </Container>
  );
};

export default Pokedex;
