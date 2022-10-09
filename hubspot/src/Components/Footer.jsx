import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg";
import { SiYoutube, SiTwitter, SiTiktok } from "react-icons/si";
const Footer = () => {
  const white = "white";
  const sm = "sm";
  const mb = "25px";
  const tmb = "20px";
  const fw = "700";
  const tc = "rgb(182,199,214)";
  const th = {
    cursor: "pointer",
    color: "cyan.200",
  };
  const is = "30px";
  return (
    <>
      <Box
        bgColor="rgb(33,51,67)"
        pb="50px"
        display={["none", "none", "block"]}
      >
        <Box w="75%" margin="auto" textAlign="left">
          <Flex pt="50px">
            <Box w="40%">
              <Heading size={sm} color={white} mb={mb}>
                Popular Features
              </Heading>
              <Flex
                color={tc}
                justifyContent="space-evenly"
                mt="10px"
                fontSize="13px"
                fontWeight={fw}
              >
                <Box w="50%">
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Free Meeting Scheduler App
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Social Media Tools
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Email Tracking Software
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Sales Email Automation
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Ads Software
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Email Marketing Software
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Lead Management Software
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Pipeline Management Tools
                    </Text>
                  </Link>
                </Box>
                <Box w="50%">
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Sales Email Templates
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Help Desk Software
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Free Online Form Builder
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Free Chatbot Builder
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Free Live Chat Software
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Marketing Analytics
                    </Text>
                  </Link>
                  <Link href="" isExternal>
                    <Text mb={tmb} _hover={th}>
                      Free Landing Page Builder
                    </Text>
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box color={tc} w="60%" borderLeft="1px solid rgb(118,145,173)">
              <Flex justifyContent="space-between" pl="5rem">
                <Box>
                  <Heading size={sm} color={white} mb={mb}>
                    Free Tools
                  </Heading>
                  <Box fontSize="13px" fontWeight={fw}>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Website Grader
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Make My Persona
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Email Signature Generator
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Blog Ideas Generator
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Invoice Template Generator
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Marketing Plan Generator
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Free Business Templates
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Industry Benchmark Data
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Software Comparisons
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Library
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Website Themes & Templates
                      </Text>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Heading size={sm} color={white} mb={mb}>
                    Company
                  </Heading>
                  <Box fontSize="13px" fontWeight={fw}>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        About Us
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        careers
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Management Team
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Board if Directors
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Investor Relations
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Blog
                      </Text>
                    </Link>
                    <Link href="" isExternal>
                      <Text mb={tmb} _hover={th}>
                        Contact Us
                      </Text>
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading size={sm} color={white} mb={mb}>
                      Customers
                    </Heading>
                    <Box fontSize="13px" fontWeight={fw}>
                      <Text mb={tmb} _hover={th}>
                        Customer Support
                      </Text>
                      <Text mb={tmb} _hover={th}>
                        Join a Local User Group
                      </Text>
                    </Box>
                  </Box>
                  <Box mt="6.5rem">
                    <Heading size={sm} color={white} mb={mb}>
                      Partners
                    </Heading>
                    <Box fontSize="13px" fontWeight={fw}>
                      <Link href="" isExternal>
                        <Text mb={tmb} _hover={th}>
                          All Partner Programs
                        </Text>
                      </Link>
                      <Link href="" isExternal>
                        <Text mb={tmb} _hover={th}>
                          Solutions Partner Program
                        </Text>
                      </Link>
                      <Link href="" isExternal>
                        <Text mb={tmb} _hover={th}>
                          App Partner Program
                        </Text>
                      </Link>
                      <Link href="" isExternal>
                        <Text mb={tmb} _hover={th}>
                          HubSpot for Startups
                        </Text>
                      </Link>
                      <Link href="" isExternal>
                        <Text mb={tmb} _hover={th}>
                          Affiliate Program
                        </Text>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box w="76%" m="auto" mt={8} textAlign="center">
          <Flex justifyContent="space-between">
            <Box
              borderBottom="1px solid rgb(118,145,173)"
              w="25%"
              h={0}
              mt="1%"
              mr="5%"
            ></Box>
            <Box w="36%">
              <Flex color="rgb(182,199,214)" justifyContent="space-between">
                <Link href="https://www.facebook.com/hubspot" isExternal>
                  <RiFacebookFill size={is} />
                </Link>
                <Link href="https://www.instagram.com/hubspot/" isExternal>
                  <CgInstagram size={is} />
                </Link>
                <Link href="https://www.youtube.com/user/HubSpot" isExternal>
                  <SiYoutube size={is} />
                </Link>
                <Link href="https://twitter.com/HubSpot" isExternal>
                  <SiTwitter size={is} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/hubspot"
                  isExternal
                >
                  <RiLinkedinFill size={is} />
                </Link>
                <Link href="https://www.tiktok.com/@hubspot" isExternal>
                  <SiTiktok size={is} />
                </Link>
              </Flex>
            </Box>
            <Box
              borderBottom="1px solid rgb(118,145,173)"
              w="25%"
              h={0}
              mt="1%"
              ml="5%"
            ></Box>
          </Flex>
        </Box>
        <Box w="75%" m="auto" color>
          <Flex justifyContent="center" mt={8} mb={2}>
            <Image
              src="https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg"
              alt="Hubspot"
            />
          </Flex>
          <Box mb={2}>
            <Text fontSize="xs" color={tc} fontWeight={fw}>
              Copyright © 2022 HubSpot, Inc.
            </Text>
          </Box>
          <Flex color={white} justifyContent="space-between" w="25%" m="auto">
            <Box borderRight="1px solid rgb(118,145,173)" pr="10px">
              <Link href="" isExternal>
                Legal Stuff
              </Link>
            </Box>
            <Box borderRight="1px solid rgb(118,145,173)" pr="10px">
              <Link href="" isExternal>
                Privacy policy
              </Link>
            </Box>
            <Box pr="10px">
              <Link href="" isExternal>
                Security
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box display={["block", "block", "none"]} bgColor="rgb(33,51,67)">
        <Accordion allowToggle>
          <AccordionItem >
            <AccordionButton color="white">
              <Heading size="md" flex="1" textAlign="left" p="15px" >
                Popular Features
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Free Meeting Scheduler App
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Social Media Tools
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Email Tracking Software
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Sales Email Automation
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Ads Software
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Email Marketing Software
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Lead Management Software
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Pipeline Management Tools
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Sales Email Templates
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Help Desk Software
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Free Online Form Builder
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Free Chatbot Builder
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Free Live Chat Software
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Marketing Analytics
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Free Landing Page Builder
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton color="white">
              <Heading size="md" flex="1" textAlign="left" p="15px">
                Free Tools
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Website Grader
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Make My Persona
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Email Signature Generator
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Blog Ideas Generator
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Invoice Template Generator
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Marketing Plan Generator
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Free Business Templates
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Industry Benchmark Data
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Software Comparisons
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Library
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Website Themes & Templates
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton color="white">
              <Heading size="md" flex="1" textAlign="left" p="15px">
                Company
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      About Us
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      careers
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Management Team
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Board if Directors
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Investor Relations
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Blog
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Contact Us
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton color="white">
              <Heading size="md" flex="1" textAlign="left" p="15px">
                Customers
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Customer Support
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Join a Local User Group
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton color="white">
              <Heading size="md" flex="1" textAlign="left" p="15px">
                Partners
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      All Partner Programs
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Solutions Partner Program
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      App Partner Program
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      HubSpot for Startups
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
            <AccordionPanel pb={1}>
              <Box bgColor="white" p="20px" textAlign="center">
                <Link href="" isExternal>
                  <Flex justifyContent="space-between">
                    <Heading size="sm" _hover={th} color="#191F2A">
                      Affiliate Program
                    </Heading>
                    <Heading size="sm" _hover={th} color="#191F2A">
                      {">"}
                    </Heading>
                  </Flex>
                </Link>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex
          color="rgb(182,199,214)"
          justifyContent="space-evenly"
          mt={8}
        >
          <Link href="https://www.facebook.com/hubspot" isExternal>
            <RiFacebookFill size={is} />
          </Link>
          <Link href="https://www.instagram.com/hubspot/" isExternal>
            <CgInstagram size={is} />
          </Link>
          <Link href="https://www.youtube.com/user/HubSpot" isExternal>
            <SiYoutube size={is} />
          </Link>
          <Link href="https://twitter.com/HubSpot" isExternal>
            <SiTwitter size={is} />
          </Link>
          <Link href="https://www.linkedin.com/company/hubspot" isExternal>
            <RiLinkedinFill size={is} />
          </Link>
          <Link href="https://www.tiktok.com/@hubspot" isExternal>
            <SiTiktok size={is} />
          </Link>
        </Flex>
        <Box m="auto" color  pb="100px">
          <Flex justifyContent="center" mt={8} mb={2}>
            <Image
              src="https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg"
              alt="Hubspot"
            />
          </Flex>
          <Box mb={2}>
            <Text fontSize="xs" color={tc} fontWeight={fw}>
              Copyright © 2022 HubSpot, Inc.
            </Text>
          </Box>
          <Flex color={white} justifyContent="space-evenly" w="30%%" m="auto">
            <Box borderRight="1px solid rgb(118,145,173)" pr="10px">
              <Link href="" isExternal>
                Legal Stuff
              </Link>
            </Box>
            <Box borderRight="1px solid rgb(118,145,173)" pr="10px">
              <Link href="" isExternal>
                Privacy policy
              </Link>
            </Box>
            <Box pr="10px">
              <Link href="" isExternal>
                Security
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
