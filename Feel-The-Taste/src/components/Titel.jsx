import { Heading } from '@chakra-ui/react';

const Titel = ({ titel }) => {
  return (
    <Heading as="h1" size="2xl" mb={4} mt={5}>{titel}</Heading>
  );
};

export default Titel;