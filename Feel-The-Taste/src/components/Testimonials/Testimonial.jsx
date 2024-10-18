import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ naam, inhoud, score, bedrijfsnaam }) => {
  return (
    <Box
      borderWidth={1}
      borderRadius="md"
      p={4}
      boxShadow="md"
      bg="white"
      color="gray.800"
      minHeight="250px"
      position="relative"
    >
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {bedrijfsnaam}
      </Text>

      <Flex alignItems="center" mb={2}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            as={FaStar}
            color={index < score ? 'gray.800' : 'transparent'}
            stroke="gray.800"
            strokeWidth="40px"
          />
        ))}
      </Flex>

      <Text mb={4}>{inhoud}</Text>
      <Text fontStyle="italic" textAlign="right">
        - {naam}
      </Text>
    </Box>
  );
};

export default Testimonial;
