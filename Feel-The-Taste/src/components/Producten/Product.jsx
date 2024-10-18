import { HStack, Image, Text, Link, Button, VStack, Box } from '@chakra-ui/react';
import Tekstblok from '../Tekstblok';

const Product = ({ foto, alt, naam, beschrijving }) => {
  return (
    <HStack
      spacing={8}
      align="start"
      p={4}
      bg="gray.50"
      borderRadius="md"
      boxShadow="md"
      w="full"
    >
      <Image
        src={foto}
        alt={alt}
        height="200px"
        width="200px"
        objectFit="cover"
        borderRadius="md"
        boxShadow="sm"
      />

      <VStack align="center" spacing={4}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="gray.800" textAlign={'center'}>
            {naam}
          </Text>
          <Tekstblok tekst={beschrijving} />
        </Box>
        {/* LINK FIXEN KNOP */}
        <Link to="/diensten-en-producten">
          <Button
            bg="gray.800"
            color="white"
            _hover={{ bg: 'gray.600' }}
            size="md"
            borderRadius="full"
          >
            Klik hier voor meer info
          </Button>
        </Link>
      </VStack>
    </HStack>
  );
};

export default Product;
