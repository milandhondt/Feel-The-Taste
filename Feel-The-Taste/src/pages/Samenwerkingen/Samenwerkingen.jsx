import { Box, Heading, VStack, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import SamenwerkingLijst from '../../components/Samenwerkingen/SamenwerkingLijst';
import { samenwerkingen } from '../../api/samenwerkingen';
import { useTranslation } from 'react-i18next';

const Samenwerkingen = () => {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" p={{ base: 4, md: 6 }} maxW="1200px" mx="auto">
      <VStack spacing={6} align="center">
        <Heading as="h1" size={{ base: 'lg', md: '2xl' }} mb={4} mt={5} textAlign="center">
          {t('collaborations_title')}
        </Heading>
        <Tekstblok tekst={t('collaborations_text')} />
        <Tussentitel titel={t('why_collaborate_title')} />
        <VStack spacing={4} align="center" px={{ base: 4, md: 10 }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">{t('why_collaborate_text_1')}</Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">{t('why_collaborate_text_2')}</Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">{t('why_collaborate_text_3')}</Text>
        </VStack>
        <Tussentitel titel={t('our_valuable_partners_title')} />
        <SamenwerkingLijst samenwerkingen={samenwerkingen} />
        <Tussentitel titel={t('working_together_title')} />
        <Tekstblok tekst={t('working_together_text')} />
        <Tussentitel titel={t('contact_title2')} />
        <Text textAlign="center" ml={10} mr={10}>
          {t('contact_text2')} <Link as={RouterLink} to="/contact" color="blue.900"
            textDecoration="underline" mx={1}>{t('link')}</Link>.
        </Text>
        <Text fontWeight={'bold'} textAlign="center">
          {t('make_a_difference_text')}
        </Text>
      </VStack>
    </Box>
  );
};

export default Samenwerkingen;
