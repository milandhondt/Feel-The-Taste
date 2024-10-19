import { Box, VStack, Text, Link, SimpleGrid } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import Tekstblok from '../../components/Tekstblok';
import FotoComp from '../../components/FotoComp';

const SteunOnsProject = () => {
  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center">
        <Titel titel={'Steun het project'} />
        <Tussentitel titel={'Maakt u samen met ons horeca toegankelijker?'} />
        <Tekstblok tekst={'Bij Feel The Taste geloven we in een wereld waarin iedereen toegang heeft tot ' +
          'een zorgeloze eetervaring, ongeacht visuele beperkingen. Om dit te realiseren, willen we zoveel ' +
          'mogelijk restaurants voorzien van braille- en vergrote menukaarten.'} />
        <Tekstblok tekst={'Binnenkort starten we een crowdfundingcampagne om dit belangrijke doel te bereiken, ' +
          'en we kunnen uw steun goed gebruiken! Door bij te dragen helpt u ons om inclusiviteit in de horeca te ' +
          'vergroten en meer locaties toegankelijk te maken voor blinde en slechtziende gasten.'} />
        <Tekstblok tekst={'Samen kunnen we echt een verschil maken! Houd deze pagina in de gaten voor updates en ' +
          'de lancering van onze campagne.'} />
        <Link
          href="https://crowdfundinglink.com"
          isExternal
          color="blue.900"
          fontSize="lg"
          textDecorationLine={'underline'}
        >
          Steun het project hier!
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
          Alvast bedankt voor uw steun!
        </Text>
      </VStack>
    </Box>
  );
};

export default SteunOnsProject;
