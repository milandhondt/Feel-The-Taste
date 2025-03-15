import { Box, VStack, Text, Link, SimpleGrid } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import Tekstblok from '../../components/Tekstblok';
import FotoComp from '../../components/FotoComp';
import { useTranslation } from 'react-i18next';
import { supporters } from '../../api/supporters';

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
          href="https://nl.ulule.com/feel-the-taste--an-inclusive-hospitality-experience-for-all/"
          isExternal
          color="blue.900"
          fontSize="lg"
          textDecorationLine={'underline'}
        >
          {t('support_project_link')}
        </Link>

        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} justifyItems="center">
          {[
            { name: 'Victor Vanden Broucke', photo: '/oo1.jpg' },
            { name: 'Maxime Debruyne', photo: '/oo2.jpg' },
            { name: 'Jarno Van Quaquebeke', photo: '/oo3.jpg' },
            { name: 'Matisse Goudeseune', photo: '/oo4.jpg' },
          ].map((person, index) => (
            <Box key={index} textAlign="center">
              <FotoComp src={person.photo} alt={`Foto van ${person.name}`} height="200px" width="200px" />
              <Text>{person.name}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Tussentitel titel={t('our_supporters_title')} />
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} justifyItems="center">
          {supporters.map((supporter) => (
            <Box key={supporter.id} textAlign="center">
              <Text>{supporter.naam}</Text>
              <Text>{'€' + supporter.bijdrage}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Text fontWeight={'bold'} fontSize={'2xl'}>
          {t('thank_you_for_support_text')}
        </Text>
      </VStack>
    </Box>
  );
};

export default SteunOnsProject;
