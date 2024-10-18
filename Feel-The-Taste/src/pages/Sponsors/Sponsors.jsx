import { Box, VStack, SimpleGrid, Text, Link } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import Tekstblok from '../../components/Tekstblok';
import FotoComp from '../../components/FotoComp';
import { Link as RouterLink } from 'react-router-dom';

const Sponsors = () => {
  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center">
        <Titel titel={'Sponsors'} />
        <Tussentitel titel={'Steun inclusiviteit in de horeca!'} />
        <Tekstblok tekst={'Bij feel the taste streven we naar een inclusieve eetervaring voor iedereen. ' +
          'Door samen te werken met sponsoren kunnen we onze missie om braille en vergrote menukaarten ' +
          'breder beschikbaar te maken sneller realiseren. Met uw steun kunnen we meer restaurants toegankelijk ' +
          'maken voor blinde en slechtziende gasten.'} />
        <Tekstblok tekst={
          <>
            {'Wil u ons initiatief steunen en tegelijk uw merk zichtbaar maken? Neem dan vandaag nog '}
            <Link as={RouterLink} to="/contact" color="blue.900" textDecoration="underline">contact</Link>
            {' met ons op voor sponsormogelijkheden. Samen bouwen we aan een toegankelijke toekomst voor de horeca.'}
          </>
        } />
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
        <Text fontWeight={'bold'} fontSize="2xl">
          Alvast bedankt voor uw steun!
        </Text>
      </VStack>
    </Box>
  );
};

export default Sponsors;
