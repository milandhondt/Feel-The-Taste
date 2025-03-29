import { Box, VStack, Text, Button } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import Tekstblok from '../../components/Tekstblok';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VoorBlindenEnSlechtzienden = () => {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" p={4} ml={{ base: 4, md: 20, lg: 40 }} mr={{ base: 4, md: 20, lg: 40 }}>
      <VStack spacing={6} align="center">
        <Titel titel={t('voor_blinden_title')} />
        <Tekstblok tekst={t('voor_blinden_intro_text')} />

        <Tussentitel titel={t('voor_blinden_what_we_do')} />
        <Tekstblok tekst={t('voor_blinden_what_we_do_text')} />

        <Tussentitel titel={t('voor_blinden_benefits')} />
        <VStack spacing={4} align="flex-start" px={{ base: 4, md: 10 }}
          ml={{ base: 4, md: 10, lg: 40 }} mr={{ base: 4, md: 10, lg: 40 }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            {t('voor_blinden_benefit_independence')}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            {t('voor_blinden_benefit_comfort')}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            {t('voor_blinden_benefit_inclusivity')}
          </Text>
        </VStack>

        <Tussentitel titel={t('voor_blinden_where_to_find')} />
        <Text textAlign="center" ml={{ base: 4, md: 10, lg: 40 }} mr={{ base: 4, md: 10, lg: 40 }}>
          {t('voor_blinden_where_to_find_text')}
          <Link to="/samenwerkingen" style={{ textDecoration: 'underline', color: '#2c5282' }}>
            {t('voor_blinden_here_link')}</Link>.
        </Text>

        <Tussentitel titel={t('voor_blinden_help_us')} />
        <Tekstblok tekst={t('voor_blinden_help_us_text')} />

        <Tussentitel titel={t('voor_blinden_questions')} />
        <Tekstblok tekst={t('voor_blinden_questions_text')} />

        <Tekstblok tekst={t('voor_blinden_contact_us')} />

        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} width={275} height={65} m={4} fontSize={'xl'}>
            {t('contact_button')}
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default VoorBlindenEnSlechtzienden;
