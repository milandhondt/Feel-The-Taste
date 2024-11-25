import { Box, VStack, Text } from '@chakra-ui/react';
import Product from './Product';
import Tussentitel from '../Tussentitel';
import { useTranslation } from 'react-i18next';

const Productenlijst = ({ producten = [], heeftKnop, m }) => {
  const { t } = useTranslation();

  if (!producten.length) {
    return (
      <Box textAlign="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          {t('productenlijst_title')}
        </Text>
        <Text fontSize="md">{t('productenlijst_no_products')}</Text>
      </Box>
    );
  }

  return (
    <Box textAlign="center" p={4} m={m}>
      <Tussentitel titel={t('productentiteltje')} />
      <VStack mt={5} spacing={4} align="center">
        {producten.map((p) => (
          <Box key={p.id} w="full">
            <Product
              foto1={p.foto1}
              foto2={p.foto2}
              naam={t(p.naam)}
              beschrijving={t(p.beschrijving)}
              heeftKnop={heeftKnop}
            />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Productenlijst;
