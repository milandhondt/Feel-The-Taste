import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" display="flex" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Welkom bij Feel the Taste
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="600px">
          Mijn naam is Milan en ik maakte deze website! Momenteel is deze nog niet operationeel, en moeten er
          nog allerlei teksten toegevoegd worden door Jarno en zijn maatjes, en daarom gebruik ik in de tussentijd
          wat opvultext. Zo kan ik namelijk zien of de pagina er mooi uitziet, en eventuele aanpassingen maken als dit
          niet het geval is :p
        </Text>
        <Link to="/contact">
          <Button colorScheme="pink" size="lg">
            Neem contact op
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
