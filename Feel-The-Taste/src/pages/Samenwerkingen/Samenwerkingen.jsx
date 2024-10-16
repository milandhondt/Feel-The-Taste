import { Box, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';

const Samenwerkingen = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Titel titel={'Samenwerkingen'} />
        <Text fontSize="lg">
          Bij Feel the Taste geloven we in de kracht
          van samenwerking. We werken samen met diverse
          bedrijven en organisaties om de toegankelijkheid in de horeca te verbeteren.
        </Text>
        <Text fontSize="lg">
          Hier zijn enkele voordelen van onze samenwerkingen:
        </Text>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">- Verbeterde toegang voor blinden en slechtzienden.</Text>
          <Text fontSize="lg">- Uitwisseling van kennis en ervaring.</Text>
          <Text fontSize="lg">- Ondersteuning van gemeenschappen door middel van inclusiviteit.</Text>
        </VStack>
        <Text fontSize="lg">
          Bent u geïnteresseerd in een samenwerking? Neem contact met ons op voor meer informatie!
        </Text>
      </VStack>
    </Box>
  );
};

export default Samenwerkingen;
