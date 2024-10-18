import { Box, VStack } from '@chakra-ui/react';
import Product from './Product';

const Productenlijst = ({ producten }) => {
  return (
    <Box>
      <VStack>
        {
          producten.map((p) =>
            <Product key={p.id} foto={p.foto} naam={p.naam} beschrijving={p.beschrijving} />,
          )
        }
      </VStack>
    </Box>
  );
};

export default Productenlijst;