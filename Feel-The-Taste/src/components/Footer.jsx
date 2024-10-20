import { Box, Text, Link, Flex, Image } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const jaar = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.800" color="#FFFDE7" py={6} px={8} m={0} w={'100%'}>
      <Flex
        justify="space-between"
        direction={['column', 'column', 'row']}
        mb={4}
      >
        <Flex alignItems="normal" direction={['column', 'column', 'row']}>
          <Image
            src="/logoborder.png"
            alt="Feel the Taste Logo"
            boxSize="125px"
            mr={4}
            display={['none', 'none', 'block']}
          />
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={1} color="#FFFDE7">
              Contact
            </Text>
            <Text fontSize={'lg'} color="#FFFDE7">
              Email: <Link href="mailto:info@feelthetaste.be" color="#FFFDE7" textDecoration="underline">
                info@feelthetaste.be</Link>
            </Text>
            <Text fontSize={'lg'} color="#FFFDE7">Telefoon: +32 470 42 55 86</Text>
          </Box>
        </Flex>

        <Box mt={[4, 4, 0]}>
          <Text fontSize="2xl" fontWeight="bold" mb={2} color="#FFFDE7">
            Volg ons!
          </Text>
          <Link href="https://www.facebook.com/profile.php?id=61567379101819" isExternal color="#FFFDE7"
            mr={4} display="flex" alignItems="center">
            <FaFacebook style={{ marginRight: '4px' }} />
            <Text fontSize={'lg'}>Facebook</Text>
          </Link>
          <Link href="https://instagram.com/feelthetaste_bp" isExternal color="#FFFDE7"
            display="flex" alignItems="center">
            <FaInstagram style={{ marginRight: '4px' }} />
            <Text fontSize={'lg'}>Instagram</Text>
          </Link>
        </Box>
      </Flex>

      <Image
        src="/logoborder.png"
        alt="Feel the Taste Logo"
        boxSize="125px"
        mb={5}
        display={['block', 'block', 'none']}
      />

      <Text textAlign="center" fontSize="md" borderTop="1px solid white" pt={4}>
        © {jaar} Feel The Taste. Alle rechten voorbehouden.
      </Text>
    </Box>
  );
};

export default Footer;
