import { SimpleGrid } from '@chakra-ui/react';
import Samenwerking from './Samenwerking';

const SamenwerkingLijst = ({ samenwerkingen }) => {
  return (
    <SimpleGrid 
      columns={{ base: 1, md: 2 }} // 1 kolom op kleine schermen, 2 op middelgrote en grotere schermen
      spacing={10}
      mt={4} // Voeg wat boven marge toe
    >
      {samenwerkingen.map((samenwerking, index) => (
        <Samenwerking key={index} {...samenwerking} />
      ))}
    </SimpleGrid>
  );
};

export default SamenwerkingLijst;
