import { Box, Text, Link, Flex, Image } from '@chakra-ui/react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const jaar = new Date().getFullYear();

  return (
    <Box as="footer" bg="gray.800" color="#FFFDE7" py={6} px={8} m={0} w={'100%'}>
      <Flex
        justify="space-between"
        direction={['column', 'column', 'row']}
        mb={4}
        overflow="hidden" // Zorg ervoor dat de footer niet buiten de viewport valt
      >
        <Flex alignItems="normal" direction={['column', 'column', 'row']}>
          <Image
            src="/logozwart.jpg"
            alt="Feel the Taste Logo"
            boxSize={['100px', '125px']}  // Dynamische grootte voor kleinere schermen
            display={['none', 'none', 'block']}
          />
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={1} color="#FFFDE7">
              {t('footer_contact')}
            </Text>
            <Text fontSize={'lg'} color="#FFFDE7">
              Email:&nbsp;
              <Link href="mailto:info@feelthetaste.be" color="#FFFDE7" textDecoration="underline">
                info@feelthetaste.be
              </Link>
            </Text>
            <Text fontSize={'lg'} color="#FFFDE7">{t('footer_phone')}</Text>
          </Box>
        </Flex>

        <Box mt={[4, 4, 0]} py={[2, 2, 4]}>
          <Text fontSize="2xl" fontWeight="bold" mb={2} color="#FFFDE7">
            {t('footer_follow_us')}
          </Text>
          <Link href="https://www.facebook.com/profile.php?id=61567379101819" isExternal
            color="#FFFDE7" display="flex" alignItems="center">
            <FaFacebook style={{ marginRight: '4px' }} />
            <Text fontSize={'lg'}>{t('footer_facebook')}</Text>
          </Link>
          <Link href="https://instagram.com/feelthetaste_be"
            isExternal color="#FFFDE7" display="flex" alignItems="center">
            <FaInstagram style={{ marginRight: '4px' }} />
            <Text fontSize={'lg'}>{t('footer_instagram')}</Text>
          </Link>
        </Box>
      </Flex>

      <Image
        src="/logozwart.jpg"
        alt="Feel the Taste Logo"
        boxSize={ '125px'}
        mb={5}
        display={['block', 'block', 'none']}
      />

      <Text textAlign="center" fontSize="sm" borderTop="1px solid white" pt={4}>
        {t('footer_rights_reserved', { jaar })}
      </Text>
    </Box>
  );
};

export default Footer;
