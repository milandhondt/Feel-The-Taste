import { Heading } from '@chakra-ui/react';

const Tussentitel = ({ titel , m}) => {
  return (
    <Heading as="h2" size="xl" m={m}textAlign={'center'}>{titel}</Heading>
  );
};

export default Tussentitel;