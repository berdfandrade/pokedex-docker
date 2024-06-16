import React from "react";
import { Icon, useColorMode } from "@chakra-ui/react";
import { TbPokeball } from "react-icons/tb";

import "./PokeballSpinner.css"; 
interface PokeballSpinnerProps {
  iconSize?: string | number;
  iconColor?: string;
}

const PokeballSpinner: React.FC<PokeballSpinnerProps> = () => {
  const {colorMode} = useColorMode()
  return (
    <div className="pokeball-spinner">
      <Icon as={TbPokeball} boxSize={50} color={colorMode === 'dark' ? 'white' : 'gray.900'} />
    </div>
  );
};

export default PokeballSpinner;