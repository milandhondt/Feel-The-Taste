import { Heading } from '@chakra-ui/react';

const Titel = ({ titel, m }) => {
  return (
    <Heading as="h1" marginTop={m} marginLeft={m / 4} mr={m / 4} marginBottom={m} textAlign='center' size="xl"
      mb={4} mt={5}>{titel}</Heading>
  );
};

export default Titel;