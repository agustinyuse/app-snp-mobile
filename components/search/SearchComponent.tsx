import {
  Badge,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaFilter } from "react-icons/fa6";

function SearchComponent() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputRightElement pointerEvents="none">
          <Icon as={FaFilter} />
        </InputRightElement>
        <Input
          variant={"outline"}
          type="text"
          placeholder="Buscar Nro de Orden..."
        />
      </InputGroup>
      <Stack>
        <Text as="b">
          Filtrando por:
          <Badge variant={"solid"} colorScheme="green" p={2} ml={1}>
            <Text as="i" color={"white"}>
              Todos los estados
            </Text>
          </Badge>
        </Text>
      </Stack>
    </Stack>
  );
}

export default SearchComponent;
