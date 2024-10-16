import { Heading } from '@chakra-ui/react';

const Titel = ({ titel }) => {
  return (
    <Heading as="h1" size="2xl">{titel}</Heading>
  );
};

export default Titel;