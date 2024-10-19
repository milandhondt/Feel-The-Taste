import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import TestimonialLijst from '../../components/Testimonials/TestimonialLijst';
import { testimonials } from '../../api/testimonials';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="center" ml={40} mr={40}>
        <Titel titel={'Testimonials'} />
        <Text fontSize="lg" align={'center'} ml={10} mr={10}>
          We waarderen de feedback van onze eindgebruikers, alsook onze partners.
          Hier zijn enkele getuigenissen van blinden, slechtzienden en partners die onze braille
          of vergrote menukaarten hebben gebruikt:
        </Text>

        <TestimonialLijst testimonials={testimonials} />

        <Text fontSize="lg" textAlign={'center'}>
          Wilt u ook uw ervaring delen? Neem contact met ons op!
        </Text>
        <Link to="/contact">
          <Button bg="gray.800" color="white" _hover={{ bg: 'gray.600' }} size="lg">
            Neem contact op
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Testimonials;
