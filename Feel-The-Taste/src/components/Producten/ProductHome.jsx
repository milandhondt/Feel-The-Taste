import { VStack, Text, Image } from '@chakra-ui/react';

const ProductHome = ({ naam, foto1 }) => {
  return (
    <VStack spacing={4} align="center">
      <Text fontSize="lg" fontWeight="bold">
        {naam}
      </Text>
      <Image 
        src={foto1} 
        alt={naam} 
        height="300px" 
        objectFit="contain" 
        borderRadius="md"
      />
    </VStack>
  );
};

export default ProductHome;
