import { Box, Flex, IconButton, Stack, Text, Collapse } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NavLink to="/home">
          <Text fontSize="2xl" fontWeight="bold">Logo</Text>
        </NavLink>

        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          aria-label="Open het navigatiemenu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
          _hover={{ bg: 'gray.600' }}
        />

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={16} alignItems="center">
            <NavLink to="/over-ons">
              <Text fontSize="lg">Over ons</Text>
            </NavLink>
            <NavLink to="/diensten-en-producten">
              <Text fontSize="lg">Diensten en producten</Text>
            </NavLink>
            <NavLink to="/voor-horeca">
              <Text fontSize="lg">Voor horeca</Text>
            </NavLink>
            <NavLink to="/voor-blinden-en-slechtzienden">
              <Text fontSize="lg">Voor blinden en slechtzienden</Text>
            </NavLink>
            <NavLink to="/samenwerkingen">
              <Text fontSize="lg">Samenwerkingen</Text>
            </NavLink>
            <NavLink to="/steun-ons">
              <Text fontSize="lg">Steun ons</Text>
            </NavLink>
            <NavLink to="/testimonials">
              <Text fontSize="lg">Testimonials</Text>
            </NavLink>
            <NavLink to="/contact">
              <Text fontSize="lg">Contact</Text>
            </NavLink>
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
            <Text fontSize="lg">Over ons</Text>
          </NavLink>
          <NavLink to="/diensten-en-producten">
            <Text fontSize="lg">Diensten en producten</Text>
          </NavLink>
          <NavLink to="/voor-horeca">
            <Text fontSize="lg">Voor horeca</Text>
          </NavLink>
          <NavLink to="/voor-blinden-en-slechtzienden">
            <Text fontSize="lg">Voor blinden en slechtzienden</Text>
          </NavLink>
          <NavLink to="/samenwerkingen">
            <Text fontSize="lg">Samenwerkingen</Text>
          </NavLink>
          <NavLink to="/steun-ons">
            <Text fontSize="lg">Steun ons</Text>
          </NavLink>
          <NavLink to="/testimonials">
            <Text fontSize="lg">Testimonials</Text>
          </NavLink>
          <NavLink to="/contact">
            <Text fontSize="lg">Contact</Text>
          </NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
