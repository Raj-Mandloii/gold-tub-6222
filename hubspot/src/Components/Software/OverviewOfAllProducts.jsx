import {
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
import styles from "./CSS/OverviewOfAllProducts.module.css";
import logo from "./AllData/LoginLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Marketing from "./TabbarComponent2/Marketing";
import Sales from "./TabbarComponent2/Sales";
import CustomerService from "./TabbarComponent2/CustomerService";
import CMS from "./TabbarComponent2/CMS";
import Operations from "./TabbarComponent2/Operations";
import FreeTools from "./TabbarComponent2/FreeTools";
import Navbar from "../Navbar";

// Reviewed for: fw18_0550 - divide the components in smaller components
// Passing the URLs differently in the view clutters the component
// Use constant files for URLs, you can use loops for showing same tabs
const OverviewOfAllProducts = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);

  const handleDemo = () => {
    navigate("/");
  };
  const handleLogo = () => {
    navigate("/");
  };
  const handleScrollButton = () => {
    setStatus(!status);
    if (status) {
      window.scrollTo(0, 1200);
    } else {
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className={styles.container}>
      <Navbar/>
      <Box pt="1px" onClick={handleLogo}>
        <Img
          cursor={"pointer"}
          width={{ xs: "50px", lg: "180px" }}
          h="1.9rem"
          ml="8rem"
          my="1.5rem"
          src={logo}
        />
      </Box>
      <Text mb="1.8rem" fontSize={"49px"} color="gray.700" fontWeight="700">
        Get Started With HubSpot
      </Text>
      <Text mb="7px" color="gray.600">
        HubSpot is a CRM platform with all the tools you need for marketing,
        sales, customer
      </Text>
      <Text mb="7px" color="gray.600">
        service, and content management. Start using our full suite of free
        tools today (your access
      </Text>
      <Text color="gray.600">
        never expires!), or get a demo of our complete set of premium products
      </Text>
      <Box m="auto" gap="1rem" mt="3rem">
        <Button
          border={"1px solid #FF5C35"}
          color="orangered"
          borderRadius="3px"
          background={"white"}
          py="2.3rem"
          px="6rem"
        >
           <a href="https://www.hubspot.com/products/marketing/get-started?hubs_content=www.hubspot.com%2F&hubs_content-cta=nav-software-marketing">Get started free</a>
        </Button>
        <Button
          onClick={handleDemo}
          ml="1rem"
          borderRadius="3px"
          color="white"
          background={"#FF5C35"}
          py="2.3rem"
          px="7rem"
          _hover={{ background: "orange.300" }}
        >
          Get a demo
        </Button>
      </Box>
      <Text color="gray.600" mt="5rem">
        Looking for a specific product?
      </Text>
      <Button
        color={"gray.700"}
        my="1.5rem"
        onClick={handleScrollButton}
        borderRadius="50%"
        _hover={{ border: ".2px solid cyan", background: "white" }}
      >
        {status ? (
          <ChevronUpIcon fontSize="35px" mx="-7px" />
        ) : (
          <ChevronDownIcon fontSize="35px" mx="-6px" />
        )}
      </Button>
      <Box my="1.5rem" m="auto" w="80%">
        <Tabs display={"flex"} gap="3rem" variant="unstyled">
          <TabList background={"white"} borderRadius="5px" w="348px">
            <Flex flexDirection={"column"}>
              <Text fontWeight="600" ml="5px" my="10px">
                The CRM platform includes:
              </Text>
              <Tab
                w="122%"
                justifyContent="flex-start"
                _hover={{ background: "cyan.100" }}
                _selected={{ background: "cyan.100" }}
              >
                Marketing
              </Tab>
              <Tab
                w="122%"
                justifyContent="flex-start"
                _hover={{ background: "cyan.100" }}
                _selected={{ background: "cyan.100" }}
              >
                Sales
              </Tab>
              <Tab
                w="122%"
                justifyContent="flex-start"
                _hover={{ background: "cyan.100" }}
                _selected={{ background: "cyan.100" }}
              >
                Customer Service
              </Tab>
              <Tab
                w="122%"
                justifyContent="flex-start"
                _hover={{ background: "cyan.100" }}
                _selected={{ background: "cyan.100" }}
              >
                CMS
              </Tab>
              <Tab
                w="122%"
                justifyContent="flex-start"
                _hover={{ background: "cyan.100" }}
                _selected={{ background: "cyan.100" }}
              >
                Operation
              </Tab>
              <Tab
                w="122%"
                justifyContent="flex-start"
                _hover={{ background: "cyan.100" }}
                _selected={{ background: "cyan.100" }}
              >
                Free Tools <span className={styles.spanBtn}>FREE</span>
              </Tab>
            </Flex>
          </TabList>
          <TabPanels
            borderShadow="Base"
            background={"white"}
            borderRadius="5px"
          >
            <TabPanel>
              <Box>
                <Marketing />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Sales />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <CustomerService />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <CMS />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <Operations />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box>
                <FreeTools />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* Footer small */}
      <Box mt="8rem" h="180px" background={"blue.800"}>
        <Text pt="3rem" color="white" fontWeight={"600"}>
          Copyright © 2022 HubSpot, Inc.
        </Text>
        <Flex
          mt="1.5rem"
          gap="1.5rem"
          color="whiteAlpha.800"
          justifyContent={"center"}
          fontWeight="700"
        >
          <a
            className={styles.anchorTag}
            href="https://legal.hubspot.com/legal-stuff?hubs_content=www.hubspot.com%25252F&hubs_content-cta=nav-software-platform"
          >
            Legal Stuff
          </a>
          <a
            className={styles.anchorTag}
            href="https://legal.hubspot.com/privacy-policy?hubs_content=www.hubspot.com%25252F&hubs_content-cta=nav-software-platform"
          >
            Privacy Policy
          </a>
        </Flex>
      </Box>
    </div>
  );
};

export default OverviewOfAllProducts;
