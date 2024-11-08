import { Box, Button, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import Tussentitel from '../../components/Tussentitel';
import Productenlijst from '../../components/Producten/Productenlijst';
import { producten } from '../../api/producten';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Titel titel={t('welcome')} />
        <Image
          src="/logotje.png"
          alt="Logo van feel the taste"
          boxSize="300px"
          objectFit="cover"
        />
        <Tussentitel titel={t('accessible_menus')} />
        <Tekstblok tekst={t('main_text')} />
        <Productenlijst producten={producten} heeftKnop={true} />
        <Tussentitel titel={t('questions_title')} />
        <Tekstblok tekst={t('questions_text')} />
        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} size="lg">
            {t('contact_button')}
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Home;
