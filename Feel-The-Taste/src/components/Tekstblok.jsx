import { Text } from '@chakra-ui/react';

const Tekstblok = ({ tekst, m }) => {
  return (
    <div>
      <Text fontSize="lg" m={m / 10} mx={m} textAlign="center" maxW="600px">
        {tekst}
      </Text>
    </div>

  );
};

export default Tekstblok;