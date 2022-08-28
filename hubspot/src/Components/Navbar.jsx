import {
  Box,
  Flex,
  Button,
  HStack,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Heading,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import NavLogo from "../Assets/Hubspotnavlogo.svg";
import NavSoftSection from "../Pages/NavSoftSection";
import Education from "../Assets/Education.svg";
import Services from "../Assets/Services.svg";
import WhyHubspot from "../Assets/WhyHubspot.svg";
import UserResource from "../Assets/UserResource.svg";
import "./Navbar.css";
const Navbar = ({ s, bs }) => {
  const [mouse, setMouse] = useState(false);
  const [resources, setResources] = useState(false);
  const btnstyle = {
    backgroundColor: "rgb(255,92,53)",
    color: "white",
    borderRadius: "3px",
  };

  const hover = {
    color: "teal",
    borderBottom: "1px solid teal",
  };

  const hover1 = {
    color: "teal",
    borderBottom: "2px solid teal",
  };

  return (
    <Box style={s} boxShadow={bs}>
      <Box className="nav">
        <Box className="navtop">
          <Flex justifyContent="space-between">
            <Box w="20%">
              <Flex justifyContent="space-between">
                <Box _hover={hover} >
                  <NavLink to="">
                    Languages <ChevronDownIcon />
                  </NavLink>
                </Box>
                <Box _hover={hover}>
                  <NavLink to="/ContactPage" style={{ display: "flex" }}>
                    <HStack>
                      <FaUserAlt />
                      <Text>Contact Sales</Text>
                    </HStack>
                  </NavLink>
                </Box>
              </Flex>
            </Box>
            <Box w="35%">
              <Flex
                textAlign="center"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <NavLink to="">
                    <Search2Icon />
                  </NavLink>
                </Box>
                <Box _hover={hover}>
                  <NavLink to="/login">Log in</NavLink>
                </Box>
                <Box _hover={hover}>
                  <NavLink to="">Customer Support</NavLink>
                </Box>
                <Box _hover={hover}>
                  <NavLink to="">About</NavLink>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box p="15px">
          <Flex
            justifyContent="space-between"
            textAlign="center"
            alignItems="center"
          >
            <Box>
              <Flex
                justifyContent="space-between"
                textAlign="center"
                alignItems="center"
              >
                <Box w="20%">
                  <NavLink to="/">
                    <Image src={NavLogo} alt="Hubspot logo" width="100%" />
                  </NavLink>
                </Box>
                <Box
                  onMouseEnter={() => setMouse(true)}
                  onMouseLeave={() => setMouse(false)}
                >
                  <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={hover1}
                        className="bnavLeft"
                        style={
                          mouse ? { borderBottom: "2px solid teal" } : undefined
                        }
                      >
                        <NavLink to="">
                          Software
                          <ChevronDownIcon />
                        </NavLink>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent w="73vw" ml="13vw" mt="13px">
                      <NavSoftSection
                        onMouseEnter={() => setMouse(true)}
                        onMouseLeave={() => setMouse(false)}
                      />
                    </PopoverContent>
                  </Popover>
                </Box>
                <Box>
                  <Box _hover={hover1} className="bnavLeft">
                    <NavLink to="/Pricing">Pricing</NavLink>
                  </Box>
                </Box>
                <Box
                  onMouseEnter={() => setResources(true)}
                  onMouseLeave={() => setResources(false)}
                >
                  <Popover trigger="hover" placement="bottom">
                    <PopoverTrigger>
                      <Box
                        _hover={hover1}
                        className="bnavLeft"
                        style={
                          resources
                            ? { borderBottom: "2px solid teal" }
                            : undefined
                        }
                      >
                        <NavLink to="">
                          Resources <ChevronDownIcon />
                        </NavLink>
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent w="90%" p="20px" mt="13px" pb="35px">
                      <Flex
                        justifyContent="space-between"
                        gap={20}
                        mt="15px"
                        onMouseEnter={() => setResources(true)}
                        onMouseLeave={() => setResources(false)}
                      >
                        <Box>
                          <Flex justifyContent="space-between" gap={5}>
                            <Box>
                              <Image src={Education} />
                            </Box>
                            <Box textAlign="left">
                              <Text className="cardhead">Education</Text>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Blog
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Ebooks, Guides & More
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Free Courses & Certification
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Inbound Methodology
                                </Link>
                              </Box>
                            </Box>
                          </Flex>
                          <Flex mt="25px">
                            <Box mr="20px">
                              <Image src={WhyHubspot} />
                            </Box>
                            <Box textAlign="left">
                              <Text className="cardhead">Why Hubspot ?</Text>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Case Studies
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Why Choose HubSpot
                                </Link>
                              </Box>
                            </Box>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex justifyContent="space-between" gap={5}>
                            <Box>
                              <Image src={Services} />
                            </Box>
                            <Box textAlign="left">
                              <Text className="cardhead">Services</Text>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Onboarding & Consulting Services
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Hire a Service Provider
                                </Link>
                              </Box>
                            </Box>
                          </Flex>
                          <Flex mt="25px">
                            <Box mr="20px">
                              <Image src={UserResource} />
                            </Box>
                            <Box textAlign="left">
                              <Text className="cardhead">User Resources</Text>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Partner Programs
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Developer Tools
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  Community
                                </Link>
                              </Box>
                              <Box className="tbox">
                                <Link to="" _hover={hover1}>
                                  HubSpot Ecosystem
                                </Link>
                              </Box>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </PopoverContent>
                  </Popover>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Button style={btnstyle}>Start free or get a demo</Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
