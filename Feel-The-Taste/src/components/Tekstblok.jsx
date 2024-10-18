import { Text } from '@chakra-ui/react';

const Tekstblok = ({ tekst }) => {
  return (
    <div>
      <Text fontSize="lg" textAlign="center" maxW="600px">
        {tekst}
      </Text>
    </div>

  );
};

export default Tekstblok;