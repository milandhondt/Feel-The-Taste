import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Testimonial from '../../components/Testimonials/Testimonial';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialLijst = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = window.innerWidth < 768 ? 1 : 3; // 1 item on small screens, 3 items on larger screens
  const totalItems = testimonials.length;

  // Duur van de overgang in milliseconden
  const transitionDuration = 500;

  // Logica voor het verplaatsen naar de volgende testimonial
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalItems + 1));
    }
  };

  // Logica voor het verplaatsen naar de vorige testimonial
  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
      );
    }
  };

  // Reset index na het bereiken van het einde of begin, zonder zichtbare overgang
  useEffect(() => {
    if (currentIndex === totalItems) {
      // Zodra we voorbij de laatste testimonial zijn, springen we naar het begin
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Terug naar het begin
      }, transitionDuration);
    } else if (currentIndex === -1) {
      // Zodra we voor de eerste testimonial gaan, springen we naar het einde
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalItems - 1); // Terug naar het einde
      }, transitionDuration);
    } else {
      // Normale overgang
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    }
  }, [currentIndex, totalItems]);

  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        {/* Left Arrow Button */}
        <Button onClick={handlePrev} aria-label="Vorige testimonial" isDisabled={isTransitioning}>
          <Icon as={FaChevronLeft} />
        </Button>

        {/* Carousel Container */}
        <Flex
          overflow="hidden"
          width="100%"
          justifyContent="center"
        >
          <Flex
            transform={`translateX(-${currentIndex * (100 / itemsPerPage)}%)`} // Move by one testimonial each time
            transition={`transform ${isTransitioning ? '0.5s' : '0s'} ease-in-out`}
            width={`${(totalItems + 1) * (100 / itemsPerPage)}%`} // Dynamically adjust width based on total items
          >
            {testimonials.map((t, index) => (
              <Box
                key={t.id}
                width={`${100 / itemsPerPage}%`} // Adjust width to fit 3 items per row on large screens
                padding={2}
              >
                <Testimonial
                  naam={t.naam}
                  score={t.score}
                  inhoud={t.inhoud}
                  bedrijfsnaam={t.bedrijfsnaam}
                />
              </Box>
            ))}
            {/* Voeg de eerste testimonial nog een keer toe aan het einde om de loop te voltooien */}
            <Box
              width={`${100 / itemsPerPage}%`}
              padding={2}
            >
              <Testimonial
                naam={testimonials[0].naam}
                score={testimonials[0].score}
                inhoud={testimonials[0].inhoud}
                bedrijfsnaam={testimonials[0].bedrijfsnaam}
              />
            </Box>
          </Flex>
        </Flex>

        {/* Right Arrow Button */}
        <Button onClick={handleNext} aria-label="Volgende testimonial" isDisabled={isTransitioning}>
          <Icon as={FaChevronRight} />
        </Button>
      </Flex>
    </Box>
  );
};

export default TestimonialLijst;
