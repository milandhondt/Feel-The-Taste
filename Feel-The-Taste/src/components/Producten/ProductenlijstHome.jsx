import { Box, Text, Table, Tbody, Tr, Td } from '@chakra-ui/react';
import ProductHome from './ProductHome';
import Tussentitel from '../Tussentitel';
import { useTranslation } from 'react-i18next';

const Productenlijst = ({ producten = [], m }) => {
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

  const rows = [];
  for (let i = 0; i < producten.length; i += 2) {
    rows.push(producten.slice(i, i + 2));
  }

  return (
    <Box textAlign="center" p={4} m={m}>
      <Tussentitel titel={t('productentiteltje')} />
      <Table variant="simple" mt={5}>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((product) => (
                <Td key={product.id} textAlign="center">
                  <ProductHome naam={t(product.naam)} foto1={product.foto1} beschrijving={t(product.beschrijving)} />
                </Td>
              ))}
              {row.length < 2 && <Td />}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Productenlijst;
