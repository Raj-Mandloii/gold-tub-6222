import { ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Heading,
  Flex,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import NavSoftSection from "../Pages/NavSoftSection";
import Education from "../Assets/Education.svg";
import Services from "../Assets/Services.svg";
import WhyHubspot from "../Assets/WhyHubspot.svg";
import UserResource from "../Assets/UserResource.svg";
import style from "./Mobile_Nav_Style.json";
const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HamburgerIcon ref={btnRef} onClick={onOpen} />

      <Drawer onClose={onClose} isOpen={isOpen} size={["full"]}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Accordion allowToggle mb="20px">
              <AccordionItem mt="35px">
                <AccordionButton
                  border="1px solid gray"
                  bgColor="#F6F9FC"
                  borderRadius={3}
                >
                  <Heading size="md" flex="1" textAlign="left" p="15px">
                    Software
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <NavSoftSection />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  border="1px solid gray"
                  mt="20px"
                  bgColor="#F6F9FC"
                  borderRadius={3}
                >
                  <Heading size="md" flex="1" textAlign="left" p="15px">
                    <NavLink to="/Pricing">Pricing</NavLink>
                  </Heading>
                  <ChevronRightIcon />
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  border="1px solid gray"
                  mt="20px"
                  bgColor="#F6F9FC"
                  borderRadius={3}
                >
                  <Heading size="md" flex="1" textAlign="left" p="15px">
                    Resources
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Flex justifyContent="space-between" mt="15px">
                    <Flex direction={["column", "column"]} gap={5}>
                      <Flex>
                        <Box mr="20px">
                          <Image src={Education} />
                        </Box>
                        <Box textAlign="left">
                          <Text className="cardhead">Education</Text>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Blog
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Ebooks, Guides & More
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Free Courses & Certification
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Inbound Methodology
                            </Link>
                          </Box>
                        </Box>
                      </Flex>
                      <Flex>
                        <Box mr="20px">
                          <Image src={WhyHubspot} />
                        </Box>
                        <Box textAlign="left">
                          <Text className="cardhead">Why Hubspot ?</Text>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Case Studies
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Why Choose HubSpot
                            </Link>
                          </Box>
                        </Box>
                      </Flex>
                      <Flex>
                        <Box mr="20px">
                          <Image src={Services} />
                        </Box>
                        <Box textAlign="left">
                          <Text className="cardhead">Services</Text>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Onboarding & Consulting Services
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Hire a Service Provider
                            </Link>
                          </Box>
                        </Box>
                      </Flex>
                      <Flex>
                        <Box mr="20px">
                          <Image src={UserResource} />
                        </Box>
                        <Box textAlign="left">
                          <Text className="cardhead">User Resources</Text>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Partner Programs
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Developer Tools
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              Community
                            </Link>
                          </Box>
                          <Box className="tbox">
                            <Link to="" _hover={style.hover1}>
                              HubSpot Ecosystem
                            </Link>
                          </Box>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Button style={style.btnstyle} mb="20px">
              Get started free
            </Button>
            <Button style={style.btnstyle1}>
              <NavLink to="/login">Login or Signup</NavLink>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
