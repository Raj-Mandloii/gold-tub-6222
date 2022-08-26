import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <Box mb="50px" border="1px solid blue" w="75%" m="auto">
      <Box border="1px solid yellow" p="10px">
        <Flex justifyContent="space-between">
          <Box>
            <HStack>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    variant="ghost"
                  >
                    Languages
                  </MenuButton>
                  <MenuList>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Deutsch</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <NavLink to="" style={{ display: "flex" }}>
                  <HStack>
                    <FaUserAlt />
                    <Text>Contact Sales</Text>
                  </HStack>
                </NavLink>
              </Box>
            </HStack>
          </Box>
          <Box >
            <HStack textAlign="center" alignItems="center">
              <Box>Search Icon</Box>
              <Box>Log in</Box>
              <Box>Customer Support</Box>
              <Box>About</Box>
            </HStack>
          </Box>
        </Flex>
      </Box>
      <Box border="1px solid yellow" p="12px" >
        <Flex justifyContent="space-between" textAlign="center" alignItems="center">
          <Box>
            <HStack>
              <Box>HubSpot Logo</Box>
              <Box>Software</Box>
              <Box>Pricing</Box>
              <Box>Resources</Box>
            </HStack>
          </Box>
          <Box>
            <Button>
              Start Free or get a Demo
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
