import { Heading } from '@chakra-ui/react';

const Titel = ({ titel, m }) => {
  return (
    <Heading as="h1" m={m} textAlign='center' size="2xl" mb={4} mt={5}>{titel}</Heading>
  );
};

export default Titel;