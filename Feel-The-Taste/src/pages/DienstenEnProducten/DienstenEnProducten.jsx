import { Box, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';
const DienstenEnProducten = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Titel titel={'Diensten & Producten'} />
        <Text fontSize="lg">
          Bij Feel the Taste bieden wij een scala aan
          diensten en producten om de horeca toegankelijker te maken voor blinden en slechtzienden.
        </Text>
        <Text fontSize="lg">
          Onze producten omvatten:
        </Text>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">- Braille menukaarten</Text>
          <Text fontSize="lg">- Digitale menukaarten</Text>
          <Text fontSize="lg">- Consultaties voor toegankelijkheid</Text>
        </VStack>
        <Text fontSize="lg">
          Neem contact met ons op voor meer informatie over hoe wij u kunnen helpen.
        </Text>
      </VStack>
    </Box>
  );
};

export default DienstenEnProducten;
