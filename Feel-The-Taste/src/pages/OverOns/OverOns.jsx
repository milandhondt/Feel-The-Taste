import { Box, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import FotoComp from '../../components/FotoComp';
import { useTranslation } from 'react-i18next';

const OverOns = () => {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center">
        <Titel titel={t('about_us_title')} />
        <Tekstblok tekst={t('about_us_text_1')} />
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} justifyItems="center">
          <Box textAlign="center">
            <FotoComp src={'/oo1.jpg'} alt={'Foto van Victor'} height="200px" width="200px" />
            <Text>Victor Vanden Broucke</Text>
          </Box>
          <Box textAlign="center">
            <FotoComp src={'/oo2.jpg'} alt={'Foto van Maxime'} height="200px" width="200px" />
            <Text>Maxime Debruyne</Text>
          </Box>
          <Box textAlign="center">
            <FotoComp src={'/oo3.jpg'} alt={'Foto van Jarno'} height="200px" width="200px" />
            <Text>Jarno Van Quaquebeke</Text>
          </Box>
          <Box textAlign="center">
            <FotoComp src={'/oo4.jpg'} alt={'Foto van Matisse'} height="200px" width="200px" />
            <Text>Matisse Goudeseune</Text>
          </Box>
        </SimpleGrid>
        <Tussentitel titel={t('our_origin_title')} />
        <Tekstblok tekst={t('our_origin_text')} />
        <Tussentitel titel={t('our_values_title')} />
        <Tekstblok tekst={t('our_values_text')} />
        <Tussentitel titel={t('collaboration_and_future_title')} />
        <Tekstblok tekst={t('collaboration_and_future_text')} />
        <Tekstblok tekst={t('thank_you_text')} />
      </VStack>
    </Box>
  );
};

export default OverOns;
