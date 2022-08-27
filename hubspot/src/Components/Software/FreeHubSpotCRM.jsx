import React from "react";
import styles from "./CSS/FreeHubSpotCRM.module.css";
import {
  Box,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
} from "@chakra-ui/react";
import { ChevronRightIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { IconObj, ImgObj } from "./AllData/UrlImgIcon";
import SalesLeaders from "./TabbarComponents/SalesLeaders";
import Salespeople from "./TabbarComponents/Salespeople";
import Marketers from "./TabbarComponents/Marketers";
import Customer from "./TabbarComponents/Customer";
import Operation from "./TabbarComponents/Operation";
import Business from "./TabbarComponents/Business";
import Footer from "../Footer";

const FreeHubSpotCRM = () => {
  return (
    <>
      <div className={styles.Container}>
        {/* //add the Navbar */}
        <div>Navbar</div>
        <Box className={styles.box}>
          <Box  pt='1rem' className={styles.home}>
            <Box> <Link to="/">Home</Link></Box>
            <Box>
              <ChevronRightIcon fontSize='30px' color='gray.600' mt='-4px' />
            </Box>
            <Box>Free HubSpot CRM</Box>
          </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="40%" mr="2rem" ml="1rem">
              <Text mb="12px" fontSize="21px" fontWeight="500" color="gray.600">
                Free HubSpot CRM
              </Text>
              <Text mb="12px" fontSize="33px" fontWeight="600" color="gray.600">
                Free SRM Software With Something for Everyone
              </Text>
              <Text fontSize="" fontWeight="500" lineHeight="30px">
                Think CRM software is just about contact management? Think
                again. HubSpot CRM has free tools for everyone on your team, and
                it’s 100% free. Here’s how our free CRM solution makes your job
                easier ...
              </Text>
              <button  className={styles.crmbtn}>Get Free CRM</button>
            </Box>
            <Box w="50%">
              <Img src={ImgObj.LeaderSpring} alt="leader" w="100%" />
            </Box>
          </Box>
          {/* Tab bar start Here’s */}
          <Box background="white">
            <Tabs variant="unstyled">
              <TabList
                pl="12rem"
                gap="20px"
                bg="blue.800"
                color="white"
                h="4rem"
              >
                <Tab _selected={{ bg: "gray.400" }}>Sales Leaders</Tab>
                <Tab _selected={{ bg: "gray.400" }}>Salespeople</Tab>
                <Tab _selected={{ bg: "gray.400" }}>Marketers</Tab>
                <Tab _selected={{ bg: "gray.400" }}>Customer Service Teams</Tab>
                <Tab _selected={{ bg: "gray.400" }}>Operations Managers</Tab>
                <Tab _selected={{ bg: "gray.400" }}>Business Owners</Tab>
              </TabList>
              <TabPanels align="center">
                <TabPanel>
                  <SalesLeaders />
                </TabPanel>
                <TabPanel>
                  <Salespeople />
                </TabPanel>
                <TabPanel>
                  <Marketers />
                </TabPanel>
                <TabPanel>
                  <Customer />
                </TabPanel>
                <TabPanel>
                  <Operation />
                </TabPanel>
                <TabPanel>
                  <Business />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="50%" mr="2rem" ml="1rem">
              <Text mb="12px" fontSize="21px" fontWeight="600" color="gray.700">
                Looking for enterprise CRM features?
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="30px"
                color="gray.500"
              >
                HubSpot’s CRM platform also offers enterprise software for
                marketing, sales, customer service, content management, and
                operations. Get premium versions of all the free features you
                see here — and much more!
              </Text>
              <button className={styles.crmbtn}><a href="https://www.hubspot.com/products/crm/enterprise?hubs_content=www.hubspot.com%2Fproducts%2Fcrm&hubs_content-cta=crmpersona-middle-salesleader">Learn more</a></button>
            </Box>
            <Box w="50%">
              <Img src={ImgObj.CrmLaptop} alt="leader" w="120%" pb="1rem" />
            </Box>
          </Box>
          {/* start calendar */}
          <Box background="white" pt="1rem">
            <Box className={styles.crmImg}>
              <Box w="50%">
                <Img
                  src={ImgObj.Calendar}
                  ml="4rem"
                  boxShadow="2xl"
                  alt="leader"
                  w="80%"
                  pb="1rem"
                />
              </Box>
              <Box align="left" w="32%" ml="5rem">
                <Text
                  mb="25px"
                  fontSize="21px"
                  fontWeight="600"
                  color="gray.700"
                >
                  Arm your sales team with time-saving tools they’ll actually
                  use.
                </Text>
                <Text
                  mb="1rem"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="30px"
                  color="gray.500"
                >
                  Close more deals with less work using tools that remove
                  friction from the sales process.
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="30px"
                  color="gray.500"
                >
                  Your sales team can use free CRM tools that notify them when a
                  prospect opens an email or visits your website. Then they can
                  use that information to follow up at the right time via live
                  chat, email, or call.
                </Text>
              </Box>
            </Box>

            <Box mt="2rem" textAlign="center">
              <Text fontSize="14px" fontWeight="600" color="gray.600">
                FREE FEATURES YOU'LL LOVE
              </Text>
              <HStack ml="26%" gap="1rem">
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <CheckCircleIcon
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                  <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/email-tracking?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Email tracking</a>
                </Box>
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <CheckCircleIcon
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                   <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/email-tracking?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Prospect tracking</a>
                </Box>
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <CheckCircleIcon
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                   <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/schedule-meeting?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Meeting scheduler</a>
                </Box>
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <CheckCircleIcon
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                  <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/schedule-meeting?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Live chat</a>
                </Box>
              </HStack>
            </Box>
            <Box position="relative" w="67%" m="auto" mt="4rem" mb="2rem">
              <Text
                position="absolute"
                top="-6px"
                left="-35px"
                transform="rotate(180deg)"
                fontSize="42px"
                fontWeight="800"
                color="orangered"
              >
                ,,{" "}
              </Text>
              <Text fontSize="27px" align="left" color="gray.600">
                I love how simple, yet very efficient HubSpot CRM is. The
                ability to customize properties has been a huge benefit to both
                my sales team and our reporting.
              </Text>
              <Text
                position="absolute"
                bottom="-2px"
                left="10.5rem"
                fontSize="42px"
                fontWeight="800"
                color="orangered"
              >
                ,,
              </Text>
            </Box>
            <Box ml="16.5%" align="left">
              <Text fontSize="16px" fontWeight="600">
                LEAH LAWRENCE
              </Text>
              <Text pb="2rem" fontWeight="500" fontSize="15px">
                Corporate Salses Manager | FoodJets
              </Text>
            </Box>
          </Box>
          <Box className={styles.crmImg}>
            <Box w="70%" m="auto" mb="4rem">
              <Text mb="12px" fontSize="33px" fontWeight="600" color="gray.600">
                Top-Rated Free CRM Software for Your Whole Business
              </Text>
              <Text fontSize="" fontWeight="500" lineHeight="30px">
                Start using the CRM that’s 100% free — with something for
                everyone.
              </Text>
              <button className={styles.crmbtn}>Get Free CRM</button>
            </Box>
          </Box>
          <Box display="flex" ml="18%" gap="1.5rem">
            <Img w="130px" h="22px" src={IconObj.Atlassian} alt="icon" />
            <Img w="130px" h="22px" src={IconObj.Doordash} alt="icon" />
            <Img w="110px" h="35px" src={IconObj.Invision} alt="icon" />
            <Img w="110px" h="35px" src={IconObj.Purple} alt="icon" />
            <Img w="125px" h="25px" src={IconObj.Wistia} alt="icon" />
            <Img w="125px" h="25px" src={IconObj.Vmware} alt="icon" />
          </Box>
          <Text mt="3.5rem" fontSize="30px" fontWeight="600" color="gray.600">
            Frequently Asked Questions
          </Text>
          <Box w="57%" m="auto" mt="2rem" pb='3rem'>
            <Accordion allowToggle>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      What is CRM software?
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
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      What are popular free CRM software feature?
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
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      How much does your CRM software cost?
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
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      Is your CRM software a good fit for my business?
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
        </Box>
        {/* //add the footer page */}
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default FreeHubSpotCRM;
