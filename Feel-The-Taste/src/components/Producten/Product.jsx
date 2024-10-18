import { HStack, Image, Text, Link, Button, VStack, List, ListItem, useBreakpointValue } from '@chakra-ui/react';

const Product = ({ foto, alt, naam, beschrijving, heeftKnop }) => {
  // Split de beschrijving in een lijst op basis van bullet points
  const beschrijvingLijnen = beschrijving.split('\n').map((line, index) => (
    line.includes('•') ? (
      <ListItem key={index} ml={4} mb={2} fontSize="md" color="gray.800"> {/* Added margin-bottom for spacing */}
        {line.trim()}
      </ListItem>
    ) : (
      <Text key={index} fontSize="md" color="gray.800" textAlign="left">
        {line.trim()}
      </Text>
    )
  ));

  // Responsive settings for spacing
  const stackSpacing = useBreakpointValue({ base: 4, md: 8 });
  const imageHeight = useBreakpointValue({ base: '150px', md: '200px' });
  const imageWidth = useBreakpointValue({ base: '150px', md: '200px' });

  return (
    <HStack
      spacing={stackSpacing}
      align="start"
      p={4}
      bg="gray.50"
      borderRadius="md"
      boxShadow="md"
      w="full"
      flexDirection={{ base: 'column', md: 'row' }} // Change to column on small screens
    >
      <VStack align="left" spacing={4} flex={1}>
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="gray.800" textAlign="left">
          {naam}
        </Text>
        {/* Maak een lijst van bullet points en andere tekst */}
        <List spacing={1}>
          {beschrijvingLijnen}
        </List>
        {/* Conditionally render the button only if heeftKnop is true */}
        {heeftKnop && (
          <Link to="/diensten-en-producten">
            <Button
              bg="gray.800"
              color="white"
              _hover={{ bg: 'gray.600' }}
              size="md"
              borderRadius="full"
            >
              Klik hier voor meer info
            </Button>
          </Link>
        )}
      </VStack>

      <Image
        src={foto}
        alt={alt}
        height={imageHeight}
        width={imageWidth}
        objectFit="cover"
        borderRadius="md"
        boxShadow="sm"
      />
    </HStack>
  );
};

export default Product;
