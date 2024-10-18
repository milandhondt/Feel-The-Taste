import { SimpleGrid } from '@chakra-ui/react';
import Samenwerking from './Samenwerking';

const SamenwerkingLijst = ({ samenwerkingen }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={10}
      mt={4}
    >
      {samenwerkingen.map((samenwerking, index) => (
        <Samenwerking key={index} {...samenwerking} />
      ))}
    </SimpleGrid>
  );
};

export default SamenwerkingLijst;
