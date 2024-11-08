import { Box, VStack, Text, Link, SimpleGrid } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import Tekstblok from '../../components/Tekstblok';
import FotoComp from '../../components/FotoComp';
import { useTranslation } from 'react-i18next';

const SteunOnsProject = () => {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center">
        <Titel titel={t('support_project_title')} />
        <Tussentitel titel={t('make_hospitality_accessible_title')} />
        <Tekstblok tekst={t('support_project_text1')} />
        <Tekstblok tekst={t('support_project_text2')} />
        <Tekstblok tekst={t('support_project_text3')} />
        <Link
          href="https://crowdfundinglink.com"
          isExternal
          color="blue.900"
          fontSize="lg"
          textDecorationLine={'underline'}
        >
          {t('support_project_link')}
        </Link>
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
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          {t('thank_you_for_support_text')}
        </Text>
      </VStack>
    </Box>
  );
};

export default SteunOnsProject;
