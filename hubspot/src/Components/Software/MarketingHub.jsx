import {
  AddIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styles from "./CSS/MarketingHub.module.css";
import firstImg from "./AllData/MarketingHubFirst.png";
import icon from "./AllData/MarketingIcon.png";
import frontify from "./AllData/FrontifyLogo.webp";
import Vmware from "./AllData/VmwareLogo.webp";
import Loom from "./AllData/LoomLogo.png";
import Monday from "./AllData/MondayLogo.webp";
import Trello from "./AllData/TrelloLogo.webp";
import Momentive from "./AllData/MomentiveLogo.jpg";
import Reddit from "./AllData/RedditLogo.png";
import Soundcloud from "./AllData/SoundcloudLogo.png";
import AttractAttention from "./TabbarComponent3/AttractAttention";
import ConvertMore from "./TabbarComponent3/ConvertMore";
import Report from "./TabbarComponent3/Report";
import bdg1 from "./AllData/bdg1.png";
import bdg2 from "./AllData/bdg2.png";
import bdg3 from "./AllData/bdg3.png";
import bdg4 from "./AllData/bdg4.png";
import bdg5 from "./AllData/bdg5.png";
import bdg6 from "./AllData/bdg6.png";
import bdg7 from "./AllData/bdg7.png";
import bdg8 from "./AllData/bdg8.png";
import Kings from "./AllData/KingsLogo.webp";
import Oakland from "./AllData/OaklandLogo.webp";
import Navbar from "../Navbar";

const MarketingHub = () => {
  return (
    <Box>
      {/* //add the Navbar */}
      <div>
        <Navbar />
      </div>
      <Box className={styles.box1}>
        <Box pt="1rem" className={styles.ProductOverview}>
          <Box
            fontWeight="600"
            color="cyan.800"
            _hover={{ textDecoration: "underline" }}
          >
            {" "}
            <Link to="/productoverview">Product Overview</Link>
          </Box>
          <Box>
            <ChevronRightIcon fontSize="30px" color="gray.600" mt="-4px" />
          </Box>
          <Box fontWeight={"500"}>Marketing Hub</Box>
        </Box>
        <Flex
          w="74%"
          m="auto"
          my="1.3rem"
          gap={"2rem"}
          justifyContent="space-between"
        >
          {/* First box Start here (Upper two flex) */}
          <Box w="50%">
            <Img mt="1rem" src={firstImg} alt="imageFirst" />
          </Box>
          {/* Second box Start here (Upper two flex) */}
          <Box w="52%" align="left">
            <Box ml="-307px">
              <Flex my="1.2rem" gap={"1rem"} justifyContent={"center"}>
                <Img w="30px" h="30px" src={icon} alt="icon" />
                <Text
                  color="gray.700"
                  position={"relative"}
                  fontSize={"20px"}
                  fontWeight="700"
                >
                  Marketing Hub{" "}
                  <Text
                    fontSize={"12px"}
                    position="absolute"
                    top="4px"
                    right="-22px"
                    color="gray.700"
                  >
                    TM
                  </Text>
                </Text>
              </Flex>
            </Box>
            <Text fontSize={"33px"} fontWeight="700" color="gray.700">
              Marketing Software
            </Text>
            <Button
              mt="1.3rem"
              mb="3rem"
              borderRadius="3px"
              color="white"
              background={"#FF5C35"}
              py="1.6rem"
              px="2rem"
              _hover={{ background: "orange.300" }}
            >
             <a href="https://www.hubspot.com/products/marketing/get-started?hubs_content=www.hubspot.com%2F&hubs_content-cta=nav-software-marketing">Get started</a>
            </Button>
            {/* Accordation start here */}
            <Accordion allowToggle>
              <AccordionItem
                mb="1rem"
                border="1px solid lightgray"
                borderRadius={"4px"}
                borderShadow="lg"
                py="6px"
              >
                <h2>
                  <AccordionButton>
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight={"600"}
                      fontSize="15px"
                    >
                      Product Description
                    </Box>
                    <AddIcon color="cyan.600" fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Marketing software to help you attract the right audience,
                  convert more visitors into customers, and run complete inbound
                  marketing campaigns at scale — all on one powerful,
                  easy-to-use platform.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                mb="1rem"
                border="1px solid lightgray"
                borderRadius={"4px"}
                borderShadow="lg"
                py="6px"
              >
                <h2>
                  <AccordionButton>
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight={"600"}
                      fontSize="15px"
                    >
                      Pricing Overview
                    </Box>
                    <AddIcon color="cyan.600" fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Free and premium plans that grow with you. Editions starting
                  at: - $0/month (Free) - $45/month (Starter) - $800/month
                  (Professional) - $3,200/month (Enterprise)
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                mb="1rem"
                border="1px solid lightgray"
                borderRadius={"4px"}
                borderShadow="lg"
                py="6px"
              >
                <h2>
                  <AccordionButton>
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight={"600"}
                      fontSize="15px"
                    >
                      Feature
                    </Box>
                    <AddIcon color="cyan.600" fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Attract visitors through blogging, social media, ads, and
                  more. Convert visitors into customers with landing pages,
                  email, marketing automation, ABM, and more. Track ROI with
                  revenue attribution reporting. All powered by the customer
                  data in your CRM to enable personalization at scale.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          {/* Second box End here (Upper two flex) */}
        </Flex>
        <Text fontWeight={"600"} color="gray.600">
          TRUSTED BY
        </Text>
        <Box display={"flex"} gap="2rem" w="82%" m="auto">
          <Img mt="7px" w="100px" h="25px" src={frontify} alt="logoIcon" />
          <Img w="100px" h="40px" src={Vmware} alt="logoIcon" />
          <Img w="100px" h="30px" src={Loom} alt="logoIcon" />
          <Img w="100px" h="40px" src={Monday} alt="logoIcon" />
          <Img w="100px" h="40px" src={Trello} alt="logoIcon" />
          <Img w="100px" h="40px" src={Momentive} alt="logoIcon" />
          <Img w="100px" h="40px" src={Reddit} alt="logoIcon" />
          <Img mt="10px" w="140px" h="20px" src={Soundcloud} alt="logoIcon" />
        </Box>
        {/* All Marketing and video section */}
        <Box w="80%" m="auto" my="5rem" >
          <Flex gap="2rem">
            <Box
              w="45%"
              color="gray.600"
              align="left"
            >
              <Text my="1rem" fontSize="32px" fontWeight="600">
                All your marketing tools and data — all under one roof.
              </Text>
              <Text lineHeight={"28px"}>
                The job is tough for modern marketers. Either you’re juggling
                various point solutions, or you’re stuck with tools that are
                powerful but impossible to use. This means scattered customer
                data, lackluster marketing, and too much time spent fussing with
                software. But it doesn’t have to be that way.
                <br />
                With Marketing Hub, all your marketing tools and data are on one
                easy-to-use, powerful platform. You’ll save valuable time and
                get all the context you need to provide a personalized
                experience that attracts and converts the right customers at
                scale.
              </Text>
            </Box>
            <Box w="50%" >
              <Box>
                <video width="100%" controls>
                <source
                  src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
                  type="video/mp4"
                />
              </video>
               
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* Box 1 white background end here */}
      {/* Box 2 start here with azure background and tab bar */}
      <Box background={"azure"}>
        <Text pt="4rem" fontSize={"33px"} fontWeight="600">
          Where All Your Marketing Comes Together
        </Text>
        <Box w="84%" m="auto" mt="2rem">
          <Tabs>
            <TabList justifyContent={"center"} gap="11rem">
              <Tab
                _selected={{
                  fontWeight: "600",
                  color: "blue.800",
                  borderBottom: "5px solid rgb(0,0,128)",
                }}
              >
                Attract Attention
              </Tab>
              <Tab
                _selected={{
                  fontWeight: "600",
                  color: "blue.800",
                  borderBottom: "5px solid rgb(0,0,128)",
                }}
              >
                Convert More Leads
              </Tab>
              <Tab
                _selected={{
                  fontWeight: "600",
                  color: "blue.800",
                  borderBottom: "5px solid rgb(0,0,128)",
                }}
              >
                Report & Customize
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AttractAttention />
              </TabPanel>
              <TabPanel>
                <ConvertMore />
              </TabPanel>
              <TabPanel>
                <Report />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      {/* Box 3 start here with call function */}
      <Box position={"relative"}>
        <div className={styles.BackImageSet}></div>
        <Text
          position="absolute"
          top="4rem"
          left="18%"
          color="white"
          fontSize={"37px"}
          fontWeight="600"
        >
          It’s already easy to use. But we’re still here for you.
        </Text>
        <Text position="absolute" top="9rem" left="38%" color="white">
          Because you shouldn’t have to figure it out all on your own.
        </Text>
        <Box
          className={styles.FloatCall}
          px="2rem"
          py="10px"
          fontWeight={"600"}
          backgroundColor={"white"}
          position="absolute"
          top="-2.3rem"
          left="30%"
        >
          <Text color="gray.600" fontSize={"14px"}>
            Have questions? Give us a call and we'll walk you through it.
          </Text>
          <Text
            fontSize="14px"
            color="teal"
            _hover={{ textDecoration: "underline" }}
          >
            <PhoneIcon mr="10px" color="gray.700" w="12px" /> +1 855-841-2161
          </Text>
        </Box>
        <Box w="76%" position="absolute" bottom={"-9.5rem"} left="12%">
          <Flex>
            <Box
              borderRadius={"4px"}
              background="white"
              border="1px solid gray"
            >
              <Text
                fontSize={"21px"}
                my="1rem"
                fontWeight={"600"}
                color="gray.600"
              >
                24/7 Customer Support
              </Text>
              <Text
                color="cyan.900"
                align="left"
                lineHeight="26px"
                m="12px 20px 13px 20px"
              >
                HubSpot's award-winning customer support team is ready to help
                you with all your technical questions, and can be reached by
                live chat, email, or phone depending on your plan.
              </Text>
            </Box>
            <Box
              borderRadius={"4px"}
              background="white"
              border="1px solid gray"
            >
              <Text
                fontSize={"21px"}
                my="1rem"
                fontWeight={"600"}
                color="gray.600"
              >
                Services
              </Text>
              <Text
                color="cyan.900"
                align="left"
                lineHeight="26px"
                m="12px 20px 13px 20px"
              >
                Get up and running quickly with a personalized onboarding plan.
                Then maximize results along the way with premium training,
                ongoing consulting, and technical services.
              </Text>
            </Box>
            <Box
              borderRadius={"4px"}
              background="white"
              border="1px solid gray"
            >
              <Text
                fontSize={"21px"}
                my="1rem"
                fontWeight={"600"}
                color="gray.600"
              >
                Education
              </Text>
              <Text
                color="cyan.900"
                align="left"
                lineHeight="26px"
                m="12px 20px 13px 20px"
              >
                From blog articles to online courses to comprehensive
                certifications, HubSpot offers no shortage of free educational
                content to help your whole team stay ahead of the curve as you
                grow.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* Box 4 start here with light azure background */}
      <Box background="#dfeced" pb="2rem">
        <Box mt="14rem">
          <Text fontSize="32px" fontWeight="600" color="gray.700">
            Marketing Software That Grows With You
          </Text>
          <Text color="gray.700" mt="0.8rem" lineHeight={"25px"}>
            Start with free tools and upgrade as you grow, or hit the ground
            running with one of our
            <br />
            premium editions.
          </Text>
        </Box>
        <Flex pt="1.5rem" w="78%" m="auto" justifyContent={"space-between"}>
          <Box
            w="220px"
            background="white"
            border="1px gray solid"
            borderTop={"5px solid navy"}
            borderRadius="3px"
          >
            <Text
              fontSize="25px"
              my="0.8rem"
              fontWeight={"600"}
              color="gray.700"
            >
              Free
            </Text>
            <Text fontSize="14px" color="gray.500">
              100% free. <br /> No credit card required
            </Text>
            <Button
              mt="1.5rem"
              mb="1rem"
              color="white"
              background="#FF5C35"
              px="2rem"
              borderRadius="3px"
            >
               <a href="https://www.hubspot.com/products/marketing/get-started?hubs_content=www.hubspot.com%2F&hubs_content-cta=nav-software-marketing">Get started free</a>
            </Button>
            <Accordion allowToggle mt="3.4rem" border={"0px white"}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    border="0px"
                    borderShadow="0"
                    _hover={{
                      textDecoration: "underline",
                      backgroundColor: "white",
                    }}
                  >
                    <AccordionIcon
                      ml="-5px"
                      mr="7px"
                      color="cyan.600"
                      fontSize="30px"
                    />
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                      color="gray.600"
                    >
                      POPULAR FEATURES
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <Box align="left" fontSize={"15px"} color="gray.600">
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Email marketing
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Forms
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Landing pages
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Live chat
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Facebook, Google & LinkdIn ads
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Contact management
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            w="220px"
            background="white"
            border="1px gray solid"
            borderTop={"5px solid gold"}
            borderRadius="3px"
          >
            <Text
              fontSize="25px"
              my="0.8rem"
              fontWeight={"600"}
              color="gray.700"
            >
              Starter
            </Text>
            <Text fontSize="14px" color="gray.500">
              Starting $45/month
            </Text>
            <Button
              mt="3rem"
              mb="1rem"
              color="white"
              background="#FF5C35"
              px="2rem"
              borderRadius="3px"
            >
              Buy now
            </Button>
            <Accordion allowToggle mt="3.4rem" border={"0px white"}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    border="0px"
                    borderShadow="0"
                    _hover={{
                      textDecoration: "underline",
                      backgroundColor: "white",
                    }}
                  >
                    <AccordionIcon
                      ml="-5px"
                      mr="7px"
                      color="cyan.600"
                      fontSize="30px"
                    />
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                      color="gray.600"
                    >
                      POPULAR FEATURES
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <Box align="left" fontSize={"15px"} color="gray.600">
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Everthing in Free
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Marketing automation
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Ad retargeting
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Landing page reporting
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Multiple currencies
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      HubSpot branding removed
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            w="220px"
            background="white"
            border="1px gray solid"
            borderTop={"5px solid #00CED1"}
            borderRadius="3px"
          >
            <Text
              fontSize="25px"
              my="0.8rem"
              fontWeight={"600"}
              color="gray.700"
            >
              Professional
            </Text>
            <Text fontSize="14px" color="gray.500">
              Starting at $800/month
            </Text>
            <Button
              mt="3rem"
              mb="1rem"
              color="white"
              background="#FF5C35"
              px="2rem"
              borderRadius="3px"
            >
              <a href="https://www.hubspot.com/products/get-started?hubs_content=www.hubspot.com/&hubs_content-cta=nav-software-platform">Get a demo</a>
            </Button>
            <Button
              background={"white"}
              color="#FF5C35"
              border="1px solid #FF5C35"
              borderRadius={"3px"}
            >
              Start 14-day free trial
            </Button>
            <Accordion allowToggle mt="1rem" border={"0px white"}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    border="0px"
                    borderShadow="0"
                    _hover={{
                      textDecoration: "underline",
                      backgroundColor: "white",
                    }}
                  >
                    <AccordionIcon
                      ml="-5px"
                      mr="7px"
                      color="cyan.600"
                      fontSize="30px"
                    />
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                      color="gray.600"
                    >
                      POPULAR FEATURES
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <Box align="left" fontSize={"15px"} color="gray.600">
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Everything in Starter
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Omni-channel marketing automation
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      SEO
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Blog
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Social media
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Custom reporting
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            w="220px"
            background="white"
            border="1px gray solid"
            borderTop={"5px solid #20B2AA"}
            borderRadius="3px"
          >
            <Text
              fontSize="25px"
              my="0.8rem"
              fontWeight={"600"}
              color="gray.700"
            >
              Enterprise
            </Text>
            <Text fontSize="14px" color="gray.500">
              Starting at $3,200/month
            </Text>
            <Button
              mt="3rem"
              mb="1rem"
              color="white"
              background="#FF5C35"
              px="2rem"
              borderRadius="3px"
            >
              <a href="https://www.hubspot.com/products/get-started?hubs_content=www.hubspot.com/&hubs_content-cta=nav-software-platform">Get a demo</a> 
            </Button>
            <Button
              background={"white"}
              color="#FF5C35"
              border="1px solid #FF5C35"
              borderRadius={"3px"}
            >
              Start 14-day free trial
            </Button>
            <Accordion allowToggle mt="1rem" border={"0px white"}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    border="0px"
                    borderShadow="0"
                    _hover={{
                      textDecoration: "underline",
                      backgroundColor: "white",
                    }}
                  >
                    <AccordionIcon
                      ml="-5px"
                      mr="7px"
                      color="cyan.600"
                      fontSize="30px"
                    />
                    <Box
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                      color="gray.600"
                    >
                      POPULAR FEATURES
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <Box align="left" fontSize={"15px"} color="gray.600">
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Everything in Professional
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Account-based marketing
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Adaptive testing
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      User roles
                    </Text>
                    <Text ml="-1rem" mb="11px">
                      {" "}
                      <CheckCircleIcon
                        color={"#FF5C35"}
                        w="14px"
                        mr=".5rem"
                      />{" "}
                      Multi-touch revenue attribution
                    </Text>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
        <Box w="78%" m="auto" mt="3rem" fontSize="15px" color={"gray.600"}>
          For more detailed information on product packaging and the limits that
          apply, please see our Product and Services Catalog here. Price shown
          in USD and subject to applicable tax.
        </Box>
        <Text mt="1.4rem" fontWeight={"700"} color="gray.700">
          CONSISTENTLY PRAISED BY HUBSPOT USERS ON REVIEW SITE G2.COM
        </Text>
        <Box w="64%" m="auto" my="3rem">
          <Flex justifyContent={"space-between"}>
            <Img w="76px" src={bdg1} alt="badge" />
            <Img w="76px" src={bdg2} alt="badge" />
            <Img w="76px" src={bdg3} alt="badge" />
            <Img w="76px" src={bdg4} alt="badge" />
            <Img w="76px" src={bdg5} alt="badge" />
            <Img w="76px" src={bdg6} alt="badge" />
            <Img w="76px" src={bdg7} alt="badge" />
            <Img w="76px" src={bdg8} alt="badge" />
          </Flex>
        </Box>
      </Box>
      {/* Box five start here with white background */}
      <Box pb="3rem">
        <Text fontWeight={"600"} fontSize="32px" color="gray.600">
          How HubSpot Customers Are Breaking Through the Noise
        </Text>
        <Box
          m="auto"
          mt="1rem"
          lineHeight="28px"
          w="80%"
          fontSize={"16px"}
          color="gray.500"
        >
          Don’t just take our word for it. Here’s what some of our customers say
          about how Marketing Hub helps them cut through the clutter and deliver
          personalized messages in scalable ways.
        </Box>
        <Box m="auto" my="2rem" w="75%">
          <Flex gap={"1.5rem"} justifyContent="space-between">
            <Box border={"1px gray solid"}>
              <video width="100%" controls>
                <source
                  src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
                  type="video/mp4"
                />
              </video>
              <Img m="auto" mt="10px" w="200px" src={Kings} alt="logoVideo" />
            </Box>
            <Box border={"1px gray solid"}>
              <video width="100%" controls>
                <source
                  src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
                  type="video/mp4"
                />
              </video>
              <Img m="auto" mt="25px" w="220px" src={Oakland} alt="logoVideo" />
            </Box>
          </Flex>
        </Box>
        <Box
          w="52%"
          m="auto"
          mt="4rem"
          fontSize={"33px"}
          fontWeight="600"
          color="gray.600"
        >
          Attract and convert more leads with HubSpot’s all-in-one marketing
          software.
        </Box>
        <Box m="auto" w="20%">
          <Flex gap="1rem">
            <Button
              my="1.3rem"
              borderRadius="3px"
              color="#FF5C35"
              background={"white"}
              border="1px solid #FF5C35"
              py="1.6rem"
              px="5rem"
            >
              <a href="https://www.hubspot.com/products/marketing/get-started?hubs_content=www.hubspot.com%2F&hubs_content-cta=nav-software-marketing">Get started free</a>
            </Button>
            <Button
              my="1.3rem"
              borderRadius="3px"
              color="white"
              background={"#FF5C35"}
              py="1.6rem"
              px="5rem"
              _hover={{ background: "orange.300" }}
            >
              <a href="https://www.hubspot.com/products/get-started?hubs_content=www.hubspot.com/&hubs_content-cta=nav-software-platform">Get a demo</a>
            </Button>
          </Flex>
        </Box>
      </Box>
      {/* Box 6 start here with azure background */}
      <Box  background="azure">
        <Text fontWeight="600" color={"gray.600"} fontSize="26px" pt="3rem">
          Frequently Asked Questions
        </Text>
        <Flex m="auto" mt={"1.5rem"} w="75%" gap='1.2rem'  justifyContent={"space-evenly"}>
          <Box>
            <Accordion allowToggle>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      What is marketing software?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  CRM stands for “customer relationship management.” Customer
                  relationship management software is a powerful tool that helps
                  businesses organize and manage their customer relationships on
                  a centralized and easy-to-use platform. By tracking leads and
                  building a full database of customer activity, businesses have
                  clear insight into where they stand with each customer in the
                  buying process. <br />
                  <br />
                  When you use HubSpot’s CRM solution, your CRM is automatically
                  integrated with your HubSpot marketing, sales, customer
                  service, and operations tools right out of the box. This makes
                  it easy to optimize and personalize your campaigns and
                  processes with data from your CRM, which leads to more
                  powerful and impactful work from your teams
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      How much does HubSpot's marketing software cost?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <ul>
                    <li className={styles.listOne}>
                      HubSpot’s free CRM includes all of the following popular
                      features (and more!):
                    </li>
                    <li>Contact deal and task management</li>
                    <li>Email tracking and engagement notification</li>
                    <li>Email templates and scheduling</li>
                    <li>Document sharing</li>
                    <li>Meeting scheduling</li>
                    <li>Live chat</li>
                    <li>Sales quotes</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      Does HubSpot's marketing software integrate with
                      Salesforce and other third-party tools?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  You can use HubSpot’s free CRM functionality at no cost. With
                  up to 1,000,000 contacts and no limits on users or customer
                  data, HubSpot’s free CRM functionality is 100% free, with no
                  expiration date.
                  <br />
                  <br />
                  More advanced CRM functionality is available as part of our
                  premium Sales Hub products. Learn more about Sales Hub
                  features and general pricing info here.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      Can I customize the data in my Marketing Hub account?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Whether you're a one-person business or a large-scale
                  enterprise, HubSpot's CRM platform scales with your needs. You
                  can start for free or request a demo to learn more about
                  HubSpot's premium features for enterprise businesses.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box>
            <Accordion allowToggle>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      What are popular marketing software features?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  CRM stands for “customer relationship management.” Customer
                  relationship management software is a powerful tool that helps
                  businesses organize and manage their customer relationships on
                  a centralized and easy-to-use platform. By tracking leads and
                  building a full database of customer activity, businesses have
                  clear insight into where they stand with each customer in the
                  buying process. <br />
                  <br />
                  When you use HubSpot’s CRM solution, your CRM is automatically
                  integrated with your HubSpot marketing, sales, customer
                  service, and operations tools right out of the box. This makes
                  it easy to optimize and personalize your campaigns and
                  processes with data from your CRM, which leads to more
                  powerful and impactful work from your teams
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      How much time does it take to implement HubSpot's
                        software?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <ul>
                    <li className={styles.listOne}>
                      HubSpot’s free CRM includes all of the following popular
                      features (and more!):
                    </li>
                    <li>Contact deal and task management</li>
                    <li>Email tracking and engagement notification</li>
                    <li>Email templates and scheduling</li>
                    <li>Document sharing</li>
                    <li>Meeting scheduling</li>
                    <li>Live chat</li>
                    <li>Sales quotes</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      What reporting capabilities do I have with Marketing software Hub?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  With multi-touch revenue attribution reporting, you can tie
                  all your marketing activities to each closed deal, so you can
                  understand exactly how your marketing contributes to revenue
                  and get credit for your whole team. You can also build custom
                  reports to track virtually any metric in Marketing Hub, any
                  record in your CRM, or any data from integrated apps. Your
                  HubSpot account includes flexible dashboards that allow you to
                  see all your data in one place, and enables you to easily
                  share reports with stakeholders.
                  <br />
                  <br />
                  More advanced CRM functionality is available as part of our
                  premium Sales Hub products. Learn more about Sales Hub
                  features and general pricing info here.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
                w='500px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="14px"
                    >
                      Are HubSpot’s free marketing and CRM tools actually free?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  They sure are! HubSpot’s free marketing and CRM tools are not
                  a free trial, so there is no credit card required to start
                  using them. They’re 100% free — simple as that. You can add
                  hundreds of contacts, unlimited users, and your free access
                  has no time limit. And as your business grows, our software
                  grows with you. You can easily upgrade to any of our premium
                  editions across HubSpot’s CRM platform.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Box>
      {/* Box 7 last start here with deep blue background */}
      <Box></Box>
      <Footer />
    </Box>
  );
};

export default MarketingHub;
