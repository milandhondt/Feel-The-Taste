import { Heading } from '@chakra-ui/react';

const Tussentitel = ({ titel }) => {
  return (
    <Heading as="h2" size="xl" textAlign={'center'}>{titel}</Heading>
  );
};

export default Tussentitel;