import { useState } from 'react';
import { Box, IconButton, HStack, VStack } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Testimonial from './Testimonial';

const TestimonialLijst = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box position="relative" maxW="600px" mx="auto" p={4}>
      <HStack spacing={4} justifyContent="center">
        <Testimonial
          naam={testimonials[currentIndex].naam}
          inhoud={testimonials[currentIndex].inhoud}
          score={testimonials[currentIndex].score}
          bedrijfsnaam={testimonials[currentIndex].bedrijfsnaam}
        />
      </HStack>

      <VStack spacing={4} mt={[4, 4, 0]} alignItems="center">
        <IconButton
          aria-label="Previous Slide"
          icon={<FaArrowLeft />}
          position={['static', 'static', 'absolute']}
          top="50%"
          left={['0', '0', '-50px']}
          transform={['none', 'none', 'translateY(-50%)']}
          onClick={prevSlide}
          zIndex="1"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.600' }}
          boxSize="50px"
        />

        <IconButton
          aria-label="Next Slide"
          icon={<FaArrowRight />}
          position={['static', 'static', 'absolute']}
          top="50%"
          right={['0', '0', '-50px']}
          transform={['none', 'none', 'translateY(-50%)']}
          onClick={nextSlide}
          zIndex="1"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.600' }}
          boxSize="50px"
        />
      </VStack>
    </Box>
  );
};

export default TestimonialLijst;
