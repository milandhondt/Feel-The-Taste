import { Box, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';
import TestimonialLijst from '../../components/Testimonials/TestimonialLijst';
import { testimonials } from '../../api/testimonials';

const Testimonials = () => {
  return (
    <Box minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Titel titel={'Testimonials'} />
        <Text fontSize="lg">
          We waarderen de feedback van onze eindgebruikers, alsook onze partners.
          Hier zijn enkele getuigenissen van blinden, slechtzienden en partners die onze braille
          of vergrote menukaarten hebben gebruikt:
        </Text>

        <TestimonialLijst testimonials={testimonials} />

        <Text fontSize="lg">
          Wilt u ook uw ervaring delen? Neem contact met ons op!
        </Text>
      </VStack>
    </Box>
  );
};

export default Testimonials;
