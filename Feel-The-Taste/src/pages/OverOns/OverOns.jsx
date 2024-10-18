import { Box, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import FotoComp from './FotoComp';

const OverOns = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="center">
        <Titel titel={'Over Ons'} />
        <Tekstblok
          tekst={'Wij zijn Victor, Maxime, Jarno en Matisse ' +
            'vier enthousiaste studenten van de Arteveldehogeschool. ' +
            'Voor onze bachelorproef hebben we de feitelijke vereniging Feel the Taste opgericht. ' +
            'Onze missie is helder: we willen de toegankelijkheid van horecazaken verbeteren voor blinden, ' +
            'slechtzienden en mensen met visuele beperkingen.'}
        />
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
        <Tussentitel titel={'Onze oorsprong'} />
        <Tekstblok
          tekst={'Tijdens onze studie kwamen we erachter dat veel horecazaken ' +
            'nog niet voldoende rekening houden met de behoeften van gasten met visuele beperkingen. ' +
            'Dit inspireerde ons om actie te ondernemen en een oplossing te bieden die de ervaring van ' +
            'deze klanten verbetert. Met onze Braille- en vergrote menukaarten zorgen we ervoor dat iedereen ' +
            'kan genieten van een heerlijke maaltijd zonder barrières.'}
        />
        <Tussentitel titel={'Onze waarden'} />
        <Tekstblok
          tekst={'Bij Feel the Taste staan inclusiviteit, toegankelijkheid en kwaliteit centraal. ' +
            'Wij geloven dat iedereen het recht heeft om met vrienden en familie te genieten ' +
            'van een restaurantbezoek. ' +
            'Door onze producten te ontwikkelen, dragen we bij aan een gastvrije en inclusieve horecawereld.'}
        />
        <Tussentitel titel={'Samenwerking en Toekomst'} />
        <Tekstblok
          tekst={'We werken samen met horecazaken die onze visie delen en ons ondersteunen in onze missie. ' +
            'We zijn vastbesloten om meer bewustzijn te creëren over toegankelijkheid in de horeca ' +
            'en om het gesprek aan te gaan over hoe we samen kunnen verbeteren.'}
        />
        <Tekstblok
          tekst={'Bedankt dat je onze vereniging en onze missie ondersteunt. ' +
            'Samen kunnen we de horeca toegankelijker maken voor iedereen!'}
        />
      </VStack>
    </Box>
  );
};

export default OverOns;
