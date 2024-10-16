import { Box, VStack, Text } from '@chakra-ui/react';
import Titel from '../../components/Titel';

const Sponsors = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Titel titel={'Sponsors'} />
        <Text fontSize="lg">
          Bij Feel the Taste geloven hebben we veel te danken aan onze sponsors. Deze helpen ons niet
          alleen met een contante bijdrage, maar met een hele boel kennis die van onschatbare waarde is
          voor ons.
        </Text>
        <Text fontSize="lg">
          Hier zijn enkele van onze sponsoren:
        </Text>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">- EarthquaqueGardens </Text>
          <Text fontSize="lg">- Bedrijf van Lien&apos; s papa</Text>
          <Text fontSize="lg">- Milan Dhondt Internationals</Text>
        </VStack>
        <Text fontSize="lg">
          Bent u geïnteresseerd in een samenwerking? Wil u onze nieuwste sponsor worden?
          Neem contact met ons op voor meer informatie!
        </Text>
      </VStack>
    </Box>);
};

export default Sponsors;