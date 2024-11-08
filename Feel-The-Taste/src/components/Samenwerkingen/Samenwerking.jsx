import { VStack, Image, Text } from '@chakra-ui/react';

const Samenwerking = ({ foto, alt, beschrijving }) => {
  return (
    <VStack spacing={2} align="center" p={4} borderRadius="md" boxShadow="md" bg="gray.50" maxW="300px">
      <Image
        src={foto}
        alt={alt}
        boxSize="200px"
        objectFit="cover"
        borderRadius="md"
      />
      <Text textAlign="center" fontSize="md" color="gray.800">
        {beschrijving}
      </Text>
    </VStack>
  );
};

export default Samenwerking;
