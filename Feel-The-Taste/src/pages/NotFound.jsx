import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      color="gray.800"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
    >
      <Text fontSize="5xl" fontWeight="bold" mb={4}>
        Pagina niet gevonden
      </Text>
      <Text fontSize="4xl" mb={8}>
        Oeps! Het lijkt erop dat je op een pagina bent beland die niet bestaat.
      </Text>
      <Link to="/">
        <Button bg="gray.800" color='#FFFDE7' _hover={{ bg: 'gray.600' }} size="lg">
          Terug naar de homepagina
        </Button>
      </Link>
    </Box >
  );
};

export default NotFound;
