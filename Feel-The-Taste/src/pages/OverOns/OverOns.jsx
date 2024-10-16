import { Box, Text, VStack } from '@chakra-ui/react';
import Titel from '../../components/Titel';

const OverOns = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Titel titel={'Over Ons'} />
        <Text fontSize="lg">
          Welkom bij Feel the Taste. Wij zijn gepassioneerd over het creëren van
          toegankelijke menukaarten voor blinden en slechtzienden.
        </Text>
        <Text fontSize="lg">
          Ons doel is om de horeca inclusiever te maken door stijlvolle en tijdloze
          braille menukaarten aan te bieden die voldoen aan de behoeften van iedereen.
        </Text>
        <Text fontSize="lg">
          Samen met horecazaken streven wij naar een gastvrije ervaring voor iedereen.
        </Text>
      </VStack>
    </Box>
  );
};

export default OverOns;
