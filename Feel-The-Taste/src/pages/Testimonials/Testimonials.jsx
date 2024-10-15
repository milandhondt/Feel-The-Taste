import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Testimonials = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl">Testimonials</Heading>
        <Text fontSize="lg">
          We waarderen de feedback van onze gebruikers.
          Hier zijn enkele getuigenissen van blinden en slechtzienden die onze braille menukaarten hebben gebruikt:
        </Text>

        <VStack spacing={4} align="start">
          <Text fontSize="lg" fontStyle="italic">
            &quot;De braille menukaarten hebben mijn eetervaring echt verbeterd. Het geeft me meer
            autonomie en vertrouwen.&quot; - Klant 1
          </Text>
          <Text fontSize="lg" fontStyle="italic">
            &quot;Ik waardeer het dat restaurants nu meer aandacht besteden aan toegankelijkheid.
            Het maakt een groot verschil!&quot; - Klant 2
          </Text>
          <Text fontSize="lg" fontStyle="italic">
            &quot;Dankzij Feel the Taste kan ik nu genieten van een maaltijd zonder hulp van anderen.
            Fantastisch!&quot; - Klant 3
          </Text>
        </VStack>

        <Text fontSize="lg">
          Wilt u ook uw ervaring delen? Neem contact met ons op!
        </Text>
      </VStack>
    </Box>
  );
};

export default Testimonials;
