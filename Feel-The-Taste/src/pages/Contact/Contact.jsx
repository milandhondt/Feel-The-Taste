import { Box, FormControl, FormLabel, Input, Textarea, Button, VStack } from '@chakra-ui/react';

const handleSubmit = () => {
  console.log('Submit knop geklikt');
};

const Contact = () => {
  return (
    <Box maxW="600px" mx="auto" p={4}>
      <VStack spacing={4}>
        <FormControl id="naam" isRequired>
          <FormLabel fontSize="lg">Naam</FormLabel>
          <Input type="text" placeholder="Uw naam" fontSize="lg" />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel fontSize="lg">Email</FormLabel>
          <Input type="email" placeholder="Uw emailadres" fontSize="lg" />
        </FormControl>

        <FormControl id='telefoonnr'>
          <FormLabel fontSize="lg">Telefoonnummer</FormLabel>
          <Input type="tel" placeholder="Uw telefoonnummer" fontSize="lg" />
        </FormControl>

        <FormControl id="bedrijfsnaam">
          <FormLabel fontSize="lg">Bedrijfsnaam</FormLabel>
          <Input type="text" placeholder="Uw bedrijfsnaam" fontSize="lg" />
        </FormControl>

        <FormControl id="locatie" isRequired>
          <FormLabel fontSize="lg">Bedrijfslocatie/woonplaats</FormLabel>
          <Input type="text" placeholder="Uw bedrijfslocatie of woonplaats (dorp of stad volstaat)" fontSize="lg" />
        </FormControl>

        <FormControl id="bericht" isRequired>
          <FormLabel fontSize="lg">Bericht</FormLabel>
          <Textarea placeholder="Uw bericht" fontSize="lg" />
        </FormControl>

        <Button colorScheme="pink" size="lg" width="full" fontSize="lg" onClick={handleSubmit}>
          Verstuur
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
