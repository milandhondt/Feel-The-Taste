import { Box, Button, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import Productenlijst from '../../components/Producten/Productenlijst';
import { producten } from '../../api/producten';

const Home = () => {
  return (
    <Box
      minH="100vh" display="flex" justifyContent="center" alignItems="center" p={4}>
      <Link>
      </Link>
      <VStack spacing={6}>
        <Titel titel={'Welkom bij feel the taste!'} />
        <Image
          src="/logotje.png"
          alt="Logo van feel the taste"
          boxSize="300px"
          objectFit="cover"
        />
        <Tussentitel titel={'Toegankelijke menukaarten voor iedereen'} />
        <Tekstblok tekst={'Bij feel the taste zorgen we voor inclusie met braille en vergrote menukaarten. ' +
          'Geef al je gasten een zorgeloze en comfortabele eetervaring, zonder compromissen!'} />
        <Productenlijst producten={producten} heeftKnop={true} />
        <Tussentitel titel={'Heb je vragen of wil je meer informatie?'} />
        <Tekstblok tekst={'We staan klaar om je te helpen! Neem gerust contact met ons op voor vragen, ' +
          'offertes of speciale verzoeken. Samen maken we jouw menuaanbod toegankelijker voor iedereen!'} />
        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} size="lg">
            Neem contact op
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
