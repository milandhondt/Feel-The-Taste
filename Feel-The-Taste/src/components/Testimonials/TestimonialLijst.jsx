import { HStack } from '@chakra-ui/react';
import Testimonial from './Testimonial';

const TestimonialLijst = ({ testimonials }) => {
  return (
    <HStack spacing={4}>
      {testimonials.map((t) => (
        <Testimonial
          key={t.id}
          naam={t.naam}
          inhoud={t.inhoud}
          score={t.score}
          bedrijfsnaam={t.bedrijfsnaam}
        />
      ))}
    </HStack>
  );
};

export default TestimonialLijst;
