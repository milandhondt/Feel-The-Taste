import { Box, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tussentitel from '../../components/Tussentitel';
import { Link } from 'react-router-dom';

const VoorHoreca = () => {
  return (
    <Box minH="100vh" p={4} ml={{ base: 5, lg: 310 }} mr={{ base: 5, md: 310 }}>
      <VStack spacing={6} align="center">
        <Titel titel={'Samen voor toegankelijke horeca'} />

        <Tussentitel titel={'Introductie'} />
        <Text textAlign="center">
          Bij feel the taste zetten we ons in voor een inclusieve eetervaring voor iedereen. Wij geloven dat
          blinde en slechtziende gasten dezelfde rechten hebben om te genieten van een zorgeloos restaurantbezoek
          als ieder ander. Door middel van onze speciaal ontworpen
          braille- en vergrote menukaarten maken we deze ervaring mogelijk en helpen
          we horecazaken om toegankelijker te worden.
        </Text>

        <Tussentitel titel={'Waarom toegankelijkheid belangrijk is'} />
        <Text textAlign="center">
          Toegankelijkheid in de horeca is niet alleen een wettelijke verplichting; het is ook een morele
          verantwoordelijkheid. Wereldwijd leven miljoenen mensen met visuele beperkingen, en het is essentieel
          dat zij ook kunnen genieten van een fijne eetervaring. Door inclusieve oplossingen aan te bieden,
          kunnen horecazaken niet alleen hun klantenbestand uitbreiden, maar ook hun reputatie als gastvrije
          en zorgzame ondernemers versterken.
        </Text>

        <Tussentitel titel={'Feiten en statistieken'} />
        <Text textAlign="center">
          Meer dan 285 miljoen mensen wereldwijd hebben een vorm van visuele beperking. Slechts een klein percentage
          van de horecazaken is volledig toegankelijk voor deze groep.
        </Text>

        <Tussentitel titel={'Oplossingen'} />
        <Text textAlign="center">
          Bij feel the taste bieden we hoogwaardige braille- en vergrote
          menukaarten die speciaal zijn ontworpen om
          aan de behoeften van blinde en slechtziende gasten te voldoen.
        </Text>

        <Text textAlign="center">
          Onze menukaarten zijn: <br />
          Inclusief: Ze maken het mogelijk voor gasten om zelfstandig hun keuzes te maken. <br />
          Maatwerk: Wij bieden de
          mogelijkheid om de menukaarten te personaliseren met uw logo en huisstijl, zodat ze passen bij de
          uitstraling van uw restaurant.
        </Text>

        <Tussentitel titel={'Hoe het werkt'} />
        <Text textAlign="center">
          Het proces om samen te werken met feel the taste is eenvoudig:
        </Text>

        <VStack spacing={4} align="left" px={{ base: 4, md: 10 }}>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            1. Neem Contact Op: Stuur ons een bericht via ons&nbsp;
            <Link to="/contact" style={{ textDecoration: 'underline', color: '#2c5282' }}>contactformulier</Link>.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            2. Overleg: We bespreken uw specifieke behoeften en hoe we onze producten het beste kunnen afstemmen
            op uw horecazaak.
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="left">
            3. Implementatie: Wij leveren en helpen bij het implementeren van de braille- en vergrote
            menukaarten in uw zaak.
          </Text>
        </VStack>

        <Tussentitel titel={'Testimonials van partners'} />
        <Text textAlign="center">
          Bekijk&nbsp;
          <Link to="/testimonials"
            style={{ textDecoration: 'underline', color: '#2c5282' }}>hier</Link>&nbsp;de testimonials van
          onze partners en gebruikers.
        </Text>

        <Tussentitel titel={'Sponsor mogelijkheden'} />
        <Text textAlign="center">
          Wil u ons initiatief steunen en tegelijkertijd uw merk zichtbaar maken? Klik&nbsp;
          <Link to="/sponsors"
            style={{ textDecoration: 'underline', color: '#2c5282' }}>hier</Link>&nbsp;om meer te weten te komen.
        </Text>

        <Tussentitel titel={'Neem contact met ons op'} />
        <Text textAlign="center">
          Heeft u vragen, bent u benieuwd naar de mogelijkheden voor uw horecazaak, of wilt u meer weten over
          onze braille- en vergrote menukaarten? We staan klaar om u te helpen!
          Contacteer ons&nbsp;
          <Link to="/contact" style={{ textDecoration: 'underline', color: '#2c5282' }}>hier</Link>&nbsp;met
          al uw vragen, suggesties of samenwerkingsverzoeken.
          Of u nu interesse heeft in onze producten,&nbsp;
          sponsoropties,
          of gewoon meer wilt weten over ons initiatief,
          we horen graag van u.
        </Text>

        <Text textAlign="center">
          Wij nemen na uw verzoek zo snel mogelijk contact met u op.
        </Text>

        <Text textAlign="center" fontWeight={'bold'}>
          Samen kunnen we een verschil maken in de toegankelijkheid van de horeca!
        </Text>
      </VStack>
    </Box>
  );
};

export default VoorHoreca;
