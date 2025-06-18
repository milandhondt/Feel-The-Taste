import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box maxW="600px" mx="auto" my={300} p={4} textAlign={'center'}>
      {t('no_contact')}
    </Box>
  );
};

export default Contact;
