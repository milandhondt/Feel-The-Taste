import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const VoorBlindenEnSlechtzienden = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl">Voor Blinden en Slechtzienden</Heading>
        <Text fontSize="lg">
          Bij Feel the Taste begrijpen we de unieke
          uitdagingen waarmee blinden en slechtzienden te maken hebben in de horeca.
        </Text>
        <Text fontSize="lg">
          Hier zijn enkele manieren waarop wij u kunnen helpen:
        </Text>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">- Braille menukaarten voor een betere toegankelijkheid.</Text>
          <Text fontSize="lg">- Training voor
            horecapersoneel over hoe te communiceren met blinde en slechtziende gasten.</Text>
          <Text fontSize="lg">- Ondersteuning en advies
            om de ervaring voor blinden en slechtzienden te verbeteren.</Text>
        </VStack>
        <Text fontSize="lg">
          Neem gerust contact met ons op voor meer informatie of advies.
        </Text>
      </VStack>
    </Box>
  );
};

export default VoorBlindenEnSlechtzienden;
