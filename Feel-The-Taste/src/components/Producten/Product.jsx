import { useState } from 'react';
import {
  HStack, Image, Text, Button, VStack, List, ListItem, useBreakpointValue,
  Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Product = ({ foto1, foto2, alt, naam, beschrijving, heeftKnop }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const beschrijvingLijnen = beschrijving
    ? beschrijving.split('\n').map((line, index) => (
      line.includes('•') ? (
        <ListItem key={index} ml={4} mb={2} fontSize="md" textAlign="left">
          {line.trim()}
        </ListItem>
      ) : (
        <Text key={index} fontSize="md" color="gray.800" textAlign="left">
          {line.trim()}
        </Text>
      )
    ))
    : [];

  const stackSpacing = useBreakpointValue({ base: 4, md: 8 });

  return (
    <>
      <HStack
        spacing={stackSpacing}
        align="start"
        p={4}
        borderRadius="md"
        w="full"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <VStack align="left" spacing={4} flex={1}>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" textAlign="left">
            {naam}
          </Text>
          <List spacing={1} textAlign="left">
            {beschrijvingLijnen}
          </List>
          {heeftKnop && (
            <Link to="/diensten-en-producten">
              <Button size="md" borderRadius="full">
                {t('product_button_text')}
              </Button>
            </Link>
          )}
        </VStack>

        <HStack spacing={2} flexWrap="wrap" align="center" justify="center">
          {[foto1, foto2].filter(Boolean).map((foto, index) => ( // Filter niet-geldige waarden
            <Image
              key={index}
              src={foto}
              alt={alt}
              height={{ base: '200px', md: '250px' }}
              width={{ base: '190px', md: '200px' }}
              objectFit="fill"
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
