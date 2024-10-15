import { Box, Text, Link, Flex } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const jaar = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.800" color="white" py={6} px={8}>
      <Flex
        justify="space-between"
        direction={['column', 'column', 'row']}
        mb={4}
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Contact
          </Text>
          <Text fontSize={'lg'}>Email: <Link href="mailto:voorbeeldemial@gmail.com"
            color="white" textDecoration="underline">
            voorbeeldemial@gmail.com</Link></Text>
          <Text fontSize={'lg'}>Telefoon: +12 345 678 90</Text>
        </Box>

        <Box mt={[4, 4, 0]}>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            Volg ons!
          </Text>
          <Link href="https://facebook.com" isExternal color="white" mr={4} display="flex" alignItems="center">
            <FaFacebook style={{ marginRight: '4px' }} />
            <Text fontSize={'lg'}>Facebook</Text>
          </Link>
          <Link href="https://instagram.com" isExternal color="white" display="flex" alignItems="center">
            <FaInstagram style={{ marginRight: '4px' }} />
            <Text fontSize={'lg'}>Instagram</Text>
          </Link>
        </Box>
      </Flex>

      <Text textAlign="center" fontSize="md" borderTop="1px solid white" pt={4}>
        © {jaar} Feel the Taste. Alle rechten voorbehouden.
      </Text>
    </Box>
  );
};

export default Footer;
