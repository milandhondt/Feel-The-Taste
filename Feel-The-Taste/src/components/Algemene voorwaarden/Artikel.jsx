import { Box, Heading, Text } from "@chakra-ui/react";

const Artikel = ({ title, content }) => {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" mb={2}>
        {title}
      </Heading>
      <Text whiteSpace="pre-line">{content}</Text>
    </Box>
  );
};

export default Artikel