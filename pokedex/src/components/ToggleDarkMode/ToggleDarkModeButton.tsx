import React from "react";
import {
  Icon,
  Button,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      borderRadius={"full"}
      label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
    >
      <Button ml={5} onClick={toggleColorMode}>
     
      <Icon as={colorMode === "light" ? FaMoon : FaSun} />
      </Button>
      </Tooltip>
  );
};

export default DarkModeToggle;
