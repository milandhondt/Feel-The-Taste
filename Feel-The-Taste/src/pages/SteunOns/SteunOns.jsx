import { Box, Text, VStack, Link } from '@chakra-ui/react';
import Titel from '../../components/Titel';

const SteunOnsProject = () => {
  return (
    <Box bg="white" color="gray.800" minH="100vh" p={4}>
      <VStack spacing={6} align="start">
        <Titel titel={'Steun ons project'} />
        <Text fontSize="lg">
          Bij Feel the Taste zijn we toegewijd aan het verbeteren
          van de toegankelijkheid in de horeca door middel van
          braille menukaarten. Om dit te realiseren, hebben we uw
          steun nodig!
        </Text>
        <Text fontSize="lg">
          We hebben een crowdfundingproject opgezet om de benodigde middelen te verzamelen. U kunt ons helpen door:
        </Text>
        <VStack spacing={2} align="start">
          <Text fontSize="lg">- Bij te dragen aan ons crowdfundingproject.</Text>
          <Text fontSize="lg">- Ons te volgen op sociale media en onze berichten te delen.</Text>
          <Text fontSize="lg">- Te praten met vrienden en familie over ons project.</Text>
        </VStack>
        <Text fontSize="lg">
          Voor meer informatie over ons crowdfundingproject, klik op de onderstaande link:
        </Text>
        <Link href="https://crowdfundinglink.com" isExternal color="pink.500" fontSize="lg">
          Steun ons project hier!
        </Link>
      </VStack>
    </Box>
  );
};

export default SteunOnsProject;
