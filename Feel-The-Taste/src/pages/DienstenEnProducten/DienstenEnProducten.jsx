import { Box, VStack, Center } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import { productenExtra } from '../../api/producten';
import Productenlijst from '../../components/Producten/Productenlijst';
import Tussentitel from '../../components/Tussentitel';

const DienstenEnProducten = () => {
  return (
    <Box minH="100vh" p={4}>
      <Center>
        <VStack spacing={6} align="center">
          <Titel titel={'Diensten & Producten'} />
          <Tussentitel titel={'Onze dienst'} />
          <Tekstblok tekst={'Bij feel the taste verbeteren we de toegankelijkheid van horecazaken voor blinden, ' +
            'slechtzienden en mensen met visuele beperkingen. We helpen restaurants en cafés om hun menuaanbod ' +
            'toegankelijker te maken, zodat al hun gasten zelfstandig keuzes kunnen maken.'} />
          <Tekstblok tekst={'Onze focus ligt niet alleen op het aanbieden van producten, ' +
            'maar ook op het ondersteunen ' +
            'van horecazaken bij het creëren van een inclusieve omgeving. ' +
            'Samen kunnen we bewustzijn creëren over het ' +
            'belang van inclusie in de horeca. '} />
          <Productenlijst producten={productenExtra} heeftKnop={false} />
        </VStack>
      </Center>
    </Box>
  );
};

export default DienstenEnProducten;
