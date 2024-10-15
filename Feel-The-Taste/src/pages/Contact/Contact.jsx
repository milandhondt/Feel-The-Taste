import { Box, FormControl, FormLabel, Input, Textarea, Button, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefoon: '',
    bedrijfsnaam: '',
    locatie: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();

    try {
      formPayload.append('access_key'); //TODO access key in .env zetten
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('telefoon', formData.telefoon);
      formPayload.append('bedrijfsnaam', formData.bedrijfsnaam);
      formPayload.append('locatie', formData.locatie);
      formPayload.append('message', formData.message);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Bericht verzonden.',
          description: 'Uw bericht is succesvol verzonden. We nemen snel contact met u op.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        setFormData({ name: '', email: '', telefoon: '', bedrijfsnaam: '', locatie: '', message: '' });
      } else {
        toast({
          title: 'Fout opgetreden.',
          description: 'Er is een fout opgetreden. Probeer het opnieuw.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      toast({
        title: 'Fout opgetreden.',
        description: 'Er is een fout opgetreden. Probeer het opnieuw.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="600px" mx="auto" p={4}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="f59010ef-0750-45aa-9940-f4658453be47" />

        <FormControl id="naam" isRequired>
          <FormLabel fontSize="lg">Naam</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange}
            placeholder="Uw naam" fontSize="lg" required />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel fontSize="lg">Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="Uw emailadres" fontSize="lg" required />
        </FormControl>

        <FormControl id='telefoonnr'>
          <FormLabel fontSize="lg">Telefoonnummer</FormLabel>
          <Input type="tel" name="telefoon" value={formData.telefoon} onChange={handleChange}
            placeholder="Uw telefoonnummer" fontSize="lg" />
        </FormControl>

        <FormControl id="bedrijfsnaam">
          <FormLabel fontSize="lg">Bedrijfsnaam</FormLabel>
          <Input type="text" name="bedrijfsnaam" value={formData.bedrijfsnaam} onChange={handleChange}
            placeholder="Uw bedrijfsnaam" fontSize="lg" />
        </FormControl>

        <FormControl id="locatie" isRequired>
          <FormLabel fontSize="lg">Bedrijfslocatie/woonplaats</FormLabel>
          <Input type="text" name="locatie" value={formData.locatie} onChange={handleChange}
            placeholder="Uw bedrijfslocatie of woonplaats (dorp of stad volstaat)" fontSize="lg" required />
        </FormControl>

        <FormControl id="bericht" isRequired>
          <FormLabel fontSize="lg">Bericht</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange}
            placeholder="Uw bericht" fontSize="lg" required />
        </FormControl>

        <Button type="submit" colorScheme="pink" size="lg" width="full" fontSize="lg">
          Verstuur
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
