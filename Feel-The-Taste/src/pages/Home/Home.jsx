import {
  Box, Button, VStack, Image, Modal, ModalOverlay, ModalContent,
  ModalCloseButton, ModalBody,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import Productenlijst from '../../components/Producten/Productenlijst';
import { producten } from '../../api/producten';

const Home = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center" p={4} m={4}>
      <VStack spacing={6} m={4}>
        <Titel titel={t('welcome')} m={20} />

        <Image
          src="/logotje.png"
          alt="Logo van feel the taste"
          boxSize="280px"
          objectFit="cover"
          m={4}
          cursor="pointer"
          onClick={openModal}
        />

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody display="flex" justifyContent="center">
              <Image
                src="/logotje.png"
                alt="Logo van feel the taste"
                boxSize="600px"
                objectFit="contain"
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Tussentitel titel={t('accessible_menus')} m={8} />
        <Tekstblok tekst={t('main_text')} m={8} />
        <Productenlijst producten={producten} heeftKnop={true} m={4} />
        <Tussentitel titel={t('questions_title')} m={8} />
        <Tekstblok tekst={t('questions_text')} m={12} />
        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} size="lg" m={4}>
            {t('contact_button')}
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
