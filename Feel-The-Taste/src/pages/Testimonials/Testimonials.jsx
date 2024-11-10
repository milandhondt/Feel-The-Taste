import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import TestimonialLijst from '../../components/Testimonials/TestimonialLijst';
import { testimonials } from '../../api/testimonials';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center" ml={{ base: 4, md: 20, lg: 200 }} mr={{ base: 4, md: 20, lg: 200 }}>
        <Titel titel={t('testimonials_title') }/>
        <Text fontSize="lg" align={'center'} ml={5} mr={5}>
          {t('testimonials_intro_text')}
        </Text>

        <TestimonialLijst testimonials={testimonials} />

        <Text fontSize="lg" textAlign={'center'}>
          {t('share_experience_text')}
        </Text>
        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} size="lg">
            {t('contact_button_text')}
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Testimonials;
