import {
  Box, Text, VStack, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton,
  ModalBody, useDisclosure,
} from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const VoorHoreca = () => {
  const { t } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box minH="100vh" p={4} ml={{ base: 10, lg: 320 }} mr={{ base: 10, lg: 320 }}>
      <VStack spacing={6} align="center">
        <Titel titel={t('voor_horeca_title')} />

        <Tussentitel titel={t('voor_horeca_intro_title')} />
        <Text textAlign="center">{t('voor_horeca_intro_text')}</Text>

        <Tussentitel titel={t('voor_horeca_accessibility_title')} />
        <Text textAlign="center">{t('voor_horeca_accessibility_text')}</Text>

        <Tussentitel titel={t('voor_horeca_stats_title')} />
        <Text textAlign="center">{t('voor_horeca_stats_text')}</Text>

        <Image
          src='/taartje1.png'
          alt={t('voor_horeca_alt1')}
          width={{ base: '90%', md: '80%', lg: '60%' }}
          onClick={() => openImage('/taartje1.png')}
          cursor="pointer"
        />
        <Image
          src='/taartje2.png'
          alt={t('voor_horeca_alt2')}
          width={{ base: '90%', md: '80%', lg: '60%' }}
          onClick={() => openImage('/taartje2.png')}
          cursor="pointer"
        />
        <Image
          src='/taartje3.png'
          alt={t('voor_horeca_alt3')}
          width={{ base: '90%', md: '80%', lg: '60%' }}
          onClick={() => openImage('/taartje3.png')}
          cursor="pointer"
        />

        <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody p={4}>
              <Image src={selectedImage} alt={t('modal_image_alt')} width="100%" height="auto" />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Tussentitel titel={t('voor_horeca_solutions_title')} />
        <Text textAlign="center">{t('voor_horeca_solutions_text')}</Text>

        <Text textAlign="center">
          {t('voor_horeca_solutions_list')}
        </Text>

        <Tussentitel titel={t('voor_horeca_how_it_works_title')} />
        <Text textAlign="center">{t('voor_horeca_how_it_works_text')}</Text>

        <VStack spacing={4} align="left" px={{ base: 4, md: 10 }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            {t('voor_horeca_step_1')} <Link to="/contact"
              style={{ textDecoration: 'underline', color: '#2c5282' }}>{t('voor_horeca_step_1_link')}</Link>.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            {t('voor_horeca_step_2')}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            {t('voor_horeca_step_3')}
          </Text>
        </VStack>

        <Tussentitel titel={t('voor_horeca_testimonials_title')} />
        <Text textAlign="center">
          {t('voor_horeca_testimonials_text')}
          <Link to="/testimonials" style={{ textDecoration: 'underline', color: '#2c5282' }}>
            {t('voor_horeca_here_link')}</Link>.
        </Text>

        <Tussentitel titel={t('voor_horeca_sponsorship_title')} />
        <Text textAlign="center">
          {t('voor_horeca_sponsorship_text')}
          <Link to="/sponsors" style={{ textDecoration: 'underline', color: '#2c5282' }}>
            {t('voor_horeca_here_link')}</Link>.
        </Text>

        <Tussentitel titel={t('voor_horeca_contact_title')} />
        <Text textAlign="center">
          {t('voor_horeca_contact_text')}
          <Link to="/contact" style={{ textDecoration: 'underline', color: '#2c5282' }}>
            {t('voor_horeca_contact_link')}</Link>.
        </Text>

        <Text textAlign="center" fontWeight={'bold'}>
          {t('voor_horeca_closing_statement')}
        </Text>
      </VStack>
    </Box>
  );
};

export default VoorHoreca;
