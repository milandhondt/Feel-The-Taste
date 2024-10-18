import { Box, VStack, Text } from '@chakra-ui/react';
import Product from './Product';

const Productenlijst = ({ producten = [], heeftKnop }) => { // Default waarde voor producten
  if (!producten.length) {
    return (
      <Box textAlign="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Onze Diensten
        </Text>
        <Text fontSize="md" color="gray.600">Geen producten beschikbaar.</Text>
      </Box>
    );
  }

  return (
    <Box textAlign="center" p={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Onze Diensten
      </Text>
      <VStack spacing={4} align="center">
        {
          producten.map((p) => (
            <Box key={p.id} w="full"> {/* Ensure each product takes full width */}
              <Product
                foto={p.foto}
                naam={p.naam}
                beschrijving={p.beschrijving}
                heeftKnop={heeftKnop}
              />
            </Box>
          ))
        }
      </VStack>
    </Box>
  );
};

export default Productenlijst;
