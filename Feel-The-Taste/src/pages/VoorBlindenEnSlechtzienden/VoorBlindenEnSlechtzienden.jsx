import { Box, VStack, Text, Button } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import Tekstblok from '../../components/Tekstblok';
import { Link } from 'react-router-dom';

const VoorBlindenEnSlechtzienden = () => {
  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center">
        <Titel titel={'Wat kan feel the taste voor u betekenen?'} />
        <Tekstblok tekst={'Bij Feel the Taste geloven we dat iedereen recht heeft ' +
          'op een zorgeloze eetervaring, ook wanneer u blind of slechtziend bent. ' +
          'Daarom hebben we ons toegewijd aan het verbeteren van de toegankelijkheid ' +
          'in restaurants door het aanbieden van braille- en vergrote menukaarten.'} />

        <Tussentitel titel={'Wat wij voor u doen'} />
        <Tekstblok tekst={'We begrijpen hoe belangrijk het is om zelfstandig te kunnen ' +
          'kiezen wat u eet, zonder afhankelijk te zijn van anderen. Daarom werken we ' +
          'samen met horecazaken om menukaarten beschikbaar te maken in Braille en een ' +
          'groot letterformaat, zodat u volledig zelf uw keuzes kunt maken. Dit betekent ' +
          'meer vrijheid en comfort tijdens uw restaurantbezoek!'} />

        <Tussentitel titel={'Onze voordelen voor u'} />
        <VStack spacing={4} align="center" px={{ base: 4, md: 10 }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
            • Zelfstandigheid: U kunt de menukaart zelfstandig lezen, zonder hulp nodig te hebben van iemand anders.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
            • Comfort: U kunt op uw gemak door het menu bladeren, net zoals alle andere gasten.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
            • Inclusiviteit: Onze missie is om elke horecazaak toegankelijk te maken voor
            mensen met een visuele beperking, zodat iedereen zich welkom voelt.
          </Text>
        </VStack>

        <Tussentitel titel={'Waar kunt u onze menukaarten vinden?'} />
        <Text textAlign="center">
          Wij werken samen met verschillende restaurants en cafés die toegankelijk willen zijn voor
          gasten met een visuele beperking.<br />
          Op onze website vindt u&nbsp;
          <Link to="/samenwerkingen" style={{ textDecoration: 'underline', color: '#2c5282' }}>hier</Link> een
          overzicht van alle horecazaken die gebruik maken van onze
          braille- en vergrote menukaarten.
        </Text>

        <Tussentitel titel={'Hoe u ons kunt helpen'} />
        <Tekstblok tekst={'Kent u een restaurant dat nog geen braille- of vergrote menukaarten aanbiedt? ' +
          'Laat het hen weten over Feel the Taste! Samen kunnen we ervoor zorgen dat steeds meer horecazaken ' +
          'toegankelijk worden voor blinde en slechtziende gasten.'} />

        <Tussentitel titel={'Heeft u vragen of suggesties?'} />
        <Tekstblok tekst={'We horen graag van u! Neem gerust contact met ons op als u vragen heeft over ' +
          'onze menukaarten of over restaurants die meedoen. U kunt ons ook tips geven over hoe we de horeca ' +
          'nog toegankelijker kunnen maken.'} />

        <Tekstblok tekst={'Vul het contactformulier hieronder in, en wij helpen u zo snel mogelijk verder!'} />

        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} size="lg">
            Neem contact op
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default VoorBlindenEnSlechtzienden;
