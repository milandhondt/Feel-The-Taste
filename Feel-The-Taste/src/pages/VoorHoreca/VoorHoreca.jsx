import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const VoorHoreca = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl">Voor Horeca</Heading>
        <Text fontSize="lg">
          Toegankelijkheid is essentieel in de horeca.
          Het zorgt ervoor dat iedereen, ongeacht hun beperkingen, kan genieten van een geweldige ervaring.
        </Text>
        <Text fontSize="lg">
          Hier zijn enkele redenen waarom toegankelijkheid belangrijk is:
        </Text>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">- Inclusiviteit: Zorg ervoor dat niemand wordt uitgesloten.</Text>
          <Text fontSize="lg">- Verhoogde klantenkring: Door toegankelijk te zijn, trekt u meer klanten aan.</Text>
          <Text fontSize="lg">- Wettelijke vereisten: Veel landen hebben wetten die toegankelijkheid vereisen.</Text>
        </VStack>
        <Text fontSize="lg">
          Bij Feel the Taste helpen we horecazaken om
          toegankelijk te worden door onze braille menukaarten en adviesdiensten aan te bieden.
        </Text>
      </VStack>
    </Box>
  );
};

export default VoorHoreca;
