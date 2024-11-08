import { Box, Flex, IconButton, Stack, Text, Collapse, Button } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    console.log(`Taal veranderd naar: ${lang}`);
  };

  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NavLink to='/home'>
          <Text fontSize="4xl" fontWeight="bold" color="#FFFDE7">{t('navbar_home')}</Text>
        </NavLink>

        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          aria-label={t('navbar_more')}
          display={{ md: 'none' }}
          onClick={toggleMenu}
          _hover={{ bg: '#F6EBB9' }}
        />

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={8} alignItems="center">
            <NavLink to="/over-ons">
              <Text fontSize="lg" color="#FFFDE7">{t('navbar_about')}</Text>
            </NavLink>
            <NavLink to="/contact">
              <Text fontSize="lg" color="#FFFDE7">{t('navbar_contact')}</Text>
            </NavLink>
            <Menu>
              <MenuButton
                as={Button}
                bg="#FFFDE7"
                color="gray.800"
                variant="outline"
                fontSize="lg"
                _hover={{ bg: '#F6EBB9' }}
              >
                {t('navbar_more')}
              </MenuButton>
              <MenuList bg="gray.800" color="#FFFDE7">
                <MenuItem as={NavLink} to="/diensten-en-producten"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_services')}</MenuItem>
                <MenuItem as={NavLink} to="/voor-horeca"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_for_horeca')}</MenuItem>
                <MenuItem as={NavLink} to="/voor-blinden-en-slechtzienden"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>
                  {t('navbar_for_blind_and_visually_impaired')}</MenuItem>
                <MenuItem as={NavLink} to="/samenwerkingen"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_collaborations')}</MenuItem>
                <MenuItem as={NavLink} to="/steun-ons"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_support_project')}</MenuItem>
                <MenuItem as={NavLink} to="/testimonials"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_testimonials')}</MenuItem>
                <MenuItem as={NavLink} to="/sponsors"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_sponsors')}</MenuItem>
              </MenuList>
            </Menu>

            <Flex alignItems="center" gap={4}>
              <IconButton onClick={() => changeLanguage('nl')} aria-label={t('switch_to_dutch')} variant="ghost">
                <ReactCountryFlag countryCode="NL" svg style={{ width: '2em', height: '2em' }} title="Nederlands" />
              </IconButton>
              <IconButton onClick={() => changeLanguage('en')} aria-label={t('switch_to_english')} variant="ghost">
                <ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '2em' }} title="English" />
              </IconButton>
              <IconButton onClick={() => changeLanguage('fr')} aria-label={t('switch_to_french')} variant="ghost">
                <ReactCountryFlag countryCode="FR" svg style={{ width: '2em', height: '2em' }} title="Français" />
              </IconButton>
            </Flex>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          spacing={4}
          alignItems="center"
          display={{ base: 'flex', md: 'none' }}
          py={4}
        >
          <NavLink to="/over-ons">
            <Text fontSize="lg" color="#FFFDE7">{t('navbar_about')}</Text>
          </NavLink>
          <NavLink to="/contact">
            <Text fontSize="lg" color="#FFFDE7">{t('navbar_contact')}</Text>
          </NavLink>
          <Menu>
            <MenuButton
              as={Button}
              bg="#FFFDE7"
              color="gray.800"
              variant="outline"
              fontSize="lg"
              _hover={{ bg: '#F6EBB9' }}
            >
              {t('navbar_more')}
            </MenuButton>
            <MenuList bg="gray.800" color="#FFFDE7">
              <MenuItem as={NavLink} to="/diensten-en-producten"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_services')}</MenuItem>
              <MenuItem as={NavLink} to="/voor-horeca"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_for_horeca')}</MenuItem>
              <MenuItem as={NavLink} to="/voor-blinden-en-slechtzienden"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>
                {t('navbar_for_blind_and_visually_impaired')}</MenuItem>
              <MenuItem as={NavLink} to="/samenwerkingen"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_collaborations')}</MenuItem>
              <MenuItem as={NavLink} to="/steun-ons"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_support_project')}</MenuItem>
              <MenuItem as={NavLink} to="/testimonials"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_testimonials')}</MenuItem>
              <MenuItem as={NavLink} to="/sponsors"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>{t('navbar_sponsors')}</MenuItem>
            </MenuList>
          </Menu>

          <Flex alignItems="center" gap={4}>
            <IconButton onClick={() => changeLanguage('nl')} aria-label={t('switch_to_dutch')} variant="ghost">
              <ReactCountryFlag countryCode="NL" svg style={{ width: '2em', height: '2em' }} title="Nederlands" />
            </IconButton>
            <IconButton onClick={() => changeLanguage('en')} aria-label={t('switch_to_english')} variant="ghost">
              <ReactCountryFlag countryCode="GB" svg style={{ width: '2em', height: '2em' }} title="English" />
            </IconButton>
            <IconButton onClick={() => changeLanguage('fr')} aria-label={t('switch_to_french')} variant="ghost">
              <ReactCountryFlag countryCode="FR" svg style={{ width: '2em', height: '2em' }} title="Français" />
            </IconButton>
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
