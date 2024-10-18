import { Box, Flex, IconButton, Stack, Text, Collapse } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NavLink to='/home'>
          <Text fontSize="4xl" fontWeight="bold" color="#FFFDE7">feel the taste</Text>
        </NavLink>

        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          aria-label="Open het navigatiemenu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
          _hover={{ bg: '#F6EBB9' }}
        />

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={16} alignItems="center">
            <NavLink to="/over-ons">
              <Text fontSize="lg" color="#FFFDE7">Over Ons</Text>
            </NavLink>
            <NavLink to="/contact">
              <Text fontSize="lg" color="#FFFDE7">Contact</Text>
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
                Meer
              </MenuButton>
              <MenuList bg="gray.800" color="#FFFDE7">
                <MenuItem as={NavLink} to="/diensten-en-producten"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Diensten & Producten</MenuItem>
                <MenuItem as={NavLink} to="/voor-horeca"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Voor Horeca</MenuItem>
                <MenuItem as={NavLink} to="/voor-blinden-en-slechtzienden"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>
                  Voor Blinden en Slechtzienden</MenuItem>
                <MenuItem as={NavLink} to="/samenwerkingen"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Samenwerkingen</MenuItem>
                <MenuItem as={NavLink} to="/steun-ons"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Steun Ons Project</MenuItem>
                <MenuItem as={NavLink} to="/testimonials" bg="gray.800" color="#FFFDE7"
                  _hover={{ bg: 'gray.700' }}>Testimonials</MenuItem>
                <MenuItem as={NavLink} to="/sponsors"
                  bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Sponsors</MenuItem>
              </MenuList>
            </Menu>
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
            <Text fontSize="lg" color="#FFFDE7">Over Ons</Text>
          </NavLink>
          <NavLink to="/contact">
            <Text fontSize="lg" color="#FFFDE7">Contact</Text>
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
              Meer
            </MenuButton>
            <MenuList bg="gray.800" color="#FFFDE7">
              <MenuItem as={NavLink} to="/diensten-en-producten"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Diensten & Producten</MenuItem>
              <MenuItem as={NavLink} to="/voor-horeca"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Voor Horeca</MenuItem>
              <MenuItem as={NavLink} to="/voor-blinden-en-slechtzienden"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>
                Voor Blinden en Slechtzienden</MenuItem>
              <MenuItem as={NavLink} to="/samenwerkingen"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Samenwerkingen</MenuItem>
              <MenuItem as={NavLink} to="/steun-ons"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Steun Ons Project</MenuItem>
              <MenuItem as={NavLink} to="/testimonials"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Testimonials</MenuItem>
              <MenuItem as={NavLink} to="/sponsors"
                bg="gray.800" color="#FFFDE7" _hover={{ bg: 'gray.700' }}>Sponsors</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
