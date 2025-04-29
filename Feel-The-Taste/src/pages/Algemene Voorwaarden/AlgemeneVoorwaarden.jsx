import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Artikel from '../../components/Algemene voorwaarden/Artikel';

const AlgemeneVoorwaarden = () => {
  const { t } = useTranslation();

  return (
    <Box p={[4, 6, 8]} maxW="1200px" mx="auto">
      <Heading as="h1" mb={8} textAlign="center">
        {t('terms_title')}
      </Heading>

      <VStack spacing={6} align="stretch" mb={12}>
        {Array.from({ length: 13 }, (_, i) => (
          <Artikel
            key={i}
            title={t(`terms_article${i + 1}_title`)}
            content={t(`terms_article${i + 1}_content`)}
          />
        ))}
      </VStack>

      <Box as="section">
        <Heading as="h1" mb={8} textAlign="center">
          {t('privacy_title')}
        </Heading>
        <Text fontSize="sm" mb={2}>{t('privacy_last_updated')}</Text>
        {Array.from({ length: 7 }, (_, i) => (
          <Box key={i} mb={4}>
            <Heading as="h3" size="sm" mb={1}>
              {t(`privacy_section${i + 1}_title`)}
            </Heading>
            <Text whiteSpace="pre-line">{t(`privacy_section${i + 1}_content`)}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AlgemeneVoorwaarden;
