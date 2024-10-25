import { useState } from 'react';
import { HStack, Image, Text, Button, VStack, List, ListItem, useBreakpointValue, 
  Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Product = ({ foto1, foto2, alt, naam, beschrijving, heeftKnop }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const beschrijvingLijnen = beschrijving.split('\n').map((line, index) => (
    line.includes('•') ? (
      <ListItem key={index} ml={4} mb={2} fontSize="md" color="gray.800" textAlign="left">
        {line.trim()}
      </ListItem>
    ) : (
      <Text key={index} fontSize="md" color="gray.800" textAlign="left">
        {line.trim()}
      </Text>
    )
  ));

  const stackSpacing = useBreakpointValue({ base: 4, md: 8 });

  return (
    <>
      <HStack
        spacing={stackSpacing}
        align="start"
        p={4}
        bg="gray.50"
        borderRadius="md"
        boxShadow="md"
        w="full"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <VStack align="left" spacing={4} flex={1}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color="gray.800" textAlign="left">
            {naam}
          </Text>
          <List spacing={1} textAlign="left">
            {beschrijvingLijnen}
          </List>
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

        <HStack spacing={2} flexWrap="wrap" align="center" justify="center">
          {[foto1, foto2].map((foto, index) => (
            <Image
              key={index}
              src={foto}
              alt={alt}
              height={{ base: '200px', md: '250px' }}
              width={{ base: '200px', md: '250px' }}
              objectFit="contain"
              borderRadius="md"
              boxShadow="sm"
              transition="transform 0.5s ease"
              _hover={{ transform: 'scale(1.1)' }}
              onClick={() => setSelectedImage(foto)}
              cursor="pointer"
            />
          ))}
        </HStack>
      </HStack>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} isCentered>
        <ModalOverlay />
        <ModalContent maxW="90vw" maxH="90vh">
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center" p={4}>
            <Image src={selectedImage} alt={alt} maxH="80vh" objectFit="contain" borderRadius="md" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Product;
