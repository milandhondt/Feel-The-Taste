import { Heading, Text, VStack, Icon, Container } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaLaptopHouse } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="2xl" py={16}>
      <VStack spacing={6} textAlign="center">
        <Icon as={FaLaptopHouse} w={16} h={16} color="gray.500" />
        <Heading as="h1" size="xl">
          {t('home.title')}
        </Heading>

        <Text fontSize="lg" color="gray.600">
          {t('home.subtitle')}
        </Text>

        <Text fontSize="md" color="gray.500">
          {t('home.description1')}
        </Text>

        <Text fontSize="md" color="gray.500">
          {t('home.description2')}
        </Text>

        <Text fontSize="md" color="gray.500">
          {t('home.thanks')}
        </Text>

        <Text fontSize="lg" fontWeight="bold" color="gray.600">
          {t('home.goodbye')}
        </Text>
      </VStack>
    </Container>
  );
};

export default Home;
