import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Box
      color="gray.800"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
    >
      <Text fontSize="5xl" fontWeight="bold" mb={4}>
        {t('not_found_title')}
      </Text>
      <Text fontSize="4xl" mb={8}>
        {t('not_found_message')}
      </Text>
      <Link to="/">
        <Button bg="gray.800" color='#FFFDE7' _hover={{ bg: 'gray.600' }} size="lg">
          {t('not_found_button')}
        </Button>
      </Link>
    </Box>
  );
};

export default NotFound;
