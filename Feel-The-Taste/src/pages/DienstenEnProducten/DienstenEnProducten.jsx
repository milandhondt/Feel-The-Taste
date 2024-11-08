import { Box, VStack, Center } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import Tekstblok from '../../components/Tekstblok';
import { productenExtra } from '../../api/producten';
import Productenlijst from '../../components/Producten/Productenlijst';
import Tussentitel from '../../components/Tussentitel';
import { useTranslation } from 'react-i18next';

const DienstenEnProducten = () => {
  const { t } = useTranslation();

  const vertaaldeProducten = productenExtra.map((product) => ({
    ...product,
    naam: t(`productsExtra.${product.id}.naam`),
    beschrijving: t(`productsExtra.${product.id}.beschrijving`),
  }));

  return (
    <Box minH="100vh" p={4}>
      <Center>
        <VStack spacing={6} align="center">
          <Titel titel={t('services_and_products_title')} />
          <Tussentitel titel={t('services_title')} />
          <Tekstblok tekst={t('services_text_1')} />
          <Tekstblok tekst={t('services_text_2')} />
          <Productenlijst producten={vertaaldeProducten} heeftKnop={false} />
        </VStack>
      </Center>
    </Box>
  );
};

export default DienstenEnProducten;
