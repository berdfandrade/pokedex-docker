import React from "react";
import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Divider,
  Progress,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import capitalize from "../../helpers/capitalize";

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Props {
  stats: Stat[];
}

const StatsSection: React.FC<Props> = ({ stats }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box p={4} bg={"transparent"} color={"black"} mt={3} borderRadius="md">
      <Heading
        color={colorMode === "dark" ? "white" : "gray.600"}
        size="md"
        mb={4}
      >
        Stats
      </Heading>
      <Divider mb={5}/>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        {stats.map((stat, index) => (
          <GridItem key={index}>
            <Flex align="center">
              <Text
                as="b"
                color={colorMode === "dark" ? "white" : "gray.600"}
                fontSize={"sm"}
                flex="1"
              >
                {stat.stat.name === "special-defense"
                  ? "SP.Def"
                  : stat.stat.name === "special-attack"
                  ? "SP.Atk"
                  : capitalize(stat.stat.name)}
                :
              </Text>
              <Box flex="2" gap={3} flexDir="row" alignItems="center" ml={4}>
                <Progress
                  h={"10px"}
                  mt={5}
                  mr={3}
                  borderRadius={"md"}
                  colorScheme={
                    stat.base_stat > 50 && stat.base_stat < 79
                      ? "yellow"
                      : stat.base_stat > 80
                      ? "green"
                      : "orange"
                  }
                  size="sm"
                  value={stat.base_stat}
                  max={255}
                />
                <Text as={"b"} color={colorMode=== 'dark' ? 'gray.400' : "gray.600"} fontSize={"xs"}>
                  {stat.base_stat}/255
                </Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
