import { Box, VStack, Text } from '@chakra-ui/react';
import Product from './Product';
import Tussentitel from '../Tussentitel';

const Productenlijst = ({ producten = [], heeftKnop }) => {
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
      <Tussentitel titel={'Producten'} />
      <VStack mt={5} spacing={4} align="center">
        {
          producten.map((p) => (
            <Box key={p.id} w="full">
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
