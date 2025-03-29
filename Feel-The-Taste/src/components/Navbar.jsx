import { Box, Flex, IconButton, Stack, Text, Collapse, Button, Image } from '@chakra-ui/react';
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
  };

  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NavLink to="/home">
          <Flex alignItems="center">
            <Image src="/logozwart.jpg" alt="Logo" height={12} width={12} mr={4} />
            <Text fontSize="2xl" color="#e6e6e6" fontWeight="bold">{t('navbar_home')}</Text>
          </Flex>
        </NavLink>

        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          aria-label={t('navbar_more')}
          display={{ md: 'none' }}
          onClick={toggleMenu}
        />

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={8} alignItems="center" color="#e6e6e6"
          >
            <NavLink to="/over-ons">
              <Text color="#e6e6e6" fontSize="lg">{t('navbar_about')}</Text>
            </NavLink>
            <NavLink to="/contact">
              <Text color="#e6e6e6" fontSize="lg" >{t('navbar_contact')}</Text>
            </NavLink>
            <NavLink to="/diensten-en-producten">
              <Text color="#e6e6e6" fontSize="lg">{t('navbar_services')}</Text>
            </NavLink>
            <Menu>
              <MenuButton
                as={Button}
                bg="#e6e6e6"
                variant="outline"
                fontSize="lg"
              >
                {t('navbar_more')}
              </MenuButton>
              <MenuList bg={'gray.800'}>
                <MenuItem bg={'gray.800'} as={NavLink} to="/voor-horeca">{t('navbar_for_horeca')}</MenuItem>
                <MenuItem bg={'gray.800'} as={NavLink} to="/voor-blinden-en-slechtzienden">
                  {t('navbar_for_blind_and_visually_impaired')}</MenuItem>
                <MenuItem bg={'gray.800'} as={NavLink} to="/samenwerkingen">{t('navbar_collaborations')}</MenuItem>
                <MenuItem bg={'gray.800'} as={NavLink} to="/steun-ons">{t('navbar_support_project')}</MenuItem>
                <MenuItem bg={'gray.800'} as={NavLink} to="/testimonials">{t('navbar_testimonials')}</MenuItem>
                <MenuItem bg={'gray.800'} as={NavLink} to="/sponsors">{t('navbar_sponsors')}</MenuItem>
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
              <IconButton onClick={() => changeLanguage('de')} aria-label={t('switch_to_german')} variant="ghost">
                <ReactCountryFlag countryCode="DE" svg style={{ width: '2em', height: '2em' }} title="Deutsch" />
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
          color="#e6e6e6"
        >
          <NavLink to="/over-ons">
            <Text color="#e6e6e6" fontSize="lg">{t('navbar_about')}</Text>
          </NavLink>
          <NavLink to="/contact">
            <Text color="#e6e6e6" fontSize="lg" >{t('navbar_contact')}</Text>
          </NavLink>
          <NavLink to="/diensten-en-producten">
            <Text color="#e6e6e6" fontSize="lg">{t('navbar_services')}</Text>
          </NavLink>
          <Menu>
            <MenuButton
              as={Button}
              bg="#e6e6e6"
              variant="outline"
              fontSize="lg"
            >
              {t('navbar_more')}
            </MenuButton>
            <MenuList bg={'gray.800'}>
              <MenuItem bg={'gray.800'} as={NavLink} to="/voor-horeca">{t('navbar_for_horeca')}</MenuItem>
              <MenuItem bg={'gray.800'} as={NavLink} to="/voor-blinden-en-slechtzienden">
                {t('navbar_for_blind_and_visually_impaired')}</MenuItem>
              <MenuItem bg={'gray.800'} as={NavLink} to="/samenwerkingen">{t('navbar_collaborations')}</MenuItem>
              <MenuItem bg={'gray.800'} as={NavLink} to="/steun-ons">{t('navbar_support_project')}</MenuItem>
              <MenuItem bg={'gray.800'} as={NavLink} to="/testimonials">{t('navbar_testimonials')}</MenuItem>
              <MenuItem bg={'gray.800'} as={NavLink} to="/sponsors">{t('navbar_sponsors')}</MenuItem>
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
            <IconButton onClick={() => changeLanguage('de')} aria-label={t('switch_to_german')} variant="ghost">
              <ReactCountryFlag countryCode="DE" svg style={{ width: '2em', height: '2em' }} title="Deutsch" />
            </IconButton>
          </Flex>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
