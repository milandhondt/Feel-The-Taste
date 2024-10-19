import { Box, Heading, VStack, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import SamenwerkingLijst from '../../components/Samenwerkingen/SamenwerkingLijst';
import { samenwerkingen } from '../../api/samenwerkingen';

const Samenwerkingen = () => {
  return (
    <Box minH="100vh" p={{ base: 4, md: 6 }} maxW="1200px" mx="auto">
      <VStack spacing={6} align="center">
        <Heading as="h1" size={{ base: 'lg', md: '2xl' }} mb={4} mt={5} textAlign="center">
          Welkom op de samenwerkingspagina!
        </Heading>
        <Tekstblok tekst={'Bij Feel The Taste zijn we gepassioneerd over het bevorderen van inclusiviteit en ' +
          'toegankelijkheid in de horeca. We geloven dat iedereen, ongeacht visuele beperkingen, het recht heeft ' +
          'om te genieten van een geweldige eetervaring. Daarom nodigen we bedrijven uit om met ons samen te werken ' +
          'en onze speciaal ontworpen braille en vergrote menukaarten te integreren in hun aanbod.'} />
        <Tussentitel titel={'Waarom samenwerken?'} />
        <VStack spacing={4} align="center" px={{ base: 4, md: 10 }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">• Versterk de inclusiviteit:
            Door samen te werken met ons, geef je blinde en slechtziende
            klanten de kans om zelfstandig uw menukaart te lezen. Je toont niet alleen maatschappelijke
            verantwoordelijkheid, maar ook je toewijding aan een inclusieve klantbeleving.</Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">• Innovatieve oplossingen:
            Wij bieden duurzame en stijlvolle braille en vergrote
            menukaarten die een unieke aanvulling zijn op uw horecazaak. Onze kaarten zijn ontworpen om functionaliteit
            te combineren met esthetiek, aangepast aan uw horecazaak.</Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">• We werken graag samen om de menukaarten te
            personaliseren met jouw unieke logo en huisstijl. Zo versterken we niet alleen de toegankelijkheid
            voor al je gasten, maar ook jouw merkidentiteit op een effectieve manier.
          </Text>
        </VStack>
        <Tussentitel titel={'Onze waardevolle partners'} />
        <SamenwerkingLijst samenwerkingen={samenwerkingen} />
        <Tussentitel titel={'Samen werken aan een beter toekomst'} />
        <Tekstblok tekst={'Bij Feel The Taste geloven we dat samenwerking de sleutel is tot een meer inclusieve ' +
          'samenleving. Laten we samen de horeca toegankelijker maken en ervoor zorgen dat iedereen kan genieten ' +
          'van culinaire ervaringen zonder barrières.'} />
        <Tussentitel titel={'Neem contact op'} />
        <Text textAlign="center" ml={10} mr={10}>
          Ben je geïnteresseerd in een samenwerking? Neem vandaag nog contact met ons op via deze
          <Link as={RouterLink} to="/contact" color="blue.900" textDecoration="underline" mx={1}>
            link
          </Link>.
        </Text>
        <Text fontWeight={'bold'} textAlign="center">
          Samen kunnen we een verschil maken!
        </Text>
      </VStack>
    </Box>
  );
};

export default Samenwerkingen;
