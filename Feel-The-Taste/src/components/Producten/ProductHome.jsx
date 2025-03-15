import { useState } from 'react';
import {
  VStack, Text, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton,
  ModalBody, Box, Stack, useBreakpointValue,
} from '@chakra-ui/react';

const ProductHome = ({ naam, foto1, beschrijving }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Responsieve afbeeldingshoogte
  const imageHeight = useBreakpointValue({ base: '250px', md: '400px' });
  const imageWidth = useBreakpointValue({base: '250px', md: '350px'});
  const textFontSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <>
      {/* Standaard weergave */}
      <VStack spacing={4} align="center">
        <Text fontSize="lg" fontWeight="bold">
          {naam}
        </Text>
        <Image
          src={foto1}
          alt={naam}
          height={imageHeight}
          width={imageWidth}
          objectFit="fill"
          borderRadius="md"
          cursor="pointer"
          onClick={() => setIsModalOpen(true)}
        />
      </VStack>

      {/* Modal voor vergroting */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 4, md: 6 }}
              align={{ base: 'center', md: 'start' }}
              p={4}
            >
              {/* Vergrote afbeelding */}
              <Image
                src={foto1}
                alt={naam}
                height={imageHeight}
                objectFit="contain"
                borderRadius="md"
              />
              {/* Beschrijving */}
              <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={4}>
                  {naam}
                </Text>
                <Text fontSize={textFontSize} color="gray.700">
                  {beschrijving}
                </Text>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductHome;
