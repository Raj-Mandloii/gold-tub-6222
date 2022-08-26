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

const OverviewOfAllProducts = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);

  const handleDemo = () => {
    navigate("");
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
      <Box pt="1px">
        <Img
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
          Get started free
        </Button>
        <Button
          onClick={handleDemo}
          ml="1rem"
          borderRadius="3px"
          color="white"
          background={"#FF5C35"}
          py="2.3rem"
          px="7rem"
          _hover={{ border: "1px solid cyan" }}
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
      <Box my="1.5rem" m='auto' w='80%' border="1px solid red">
        <Tabs background={'white'} display={"flex"} variant="unstyled">
          <TabList w='400px' border="1px solid blue">
            <Flex flexDirection={"column"}>
              <Text fontWeight="600">The CRM platform includes:</Text>
              <Tab _hover={{background:"azure"}} _selected={{background:"azure"}}>Marketing</Tab>
              <Tab _hover={{background:"azure"}} _selected={{background:"azure"}}>Sales</Tab>
              <Tab _hover={{background:"azure"}} _selected={{background:"azure"}}>Customer Service</Tab>
              <Tab _hover={{background:"azure"}} _selected={{background:"azure"}}>CMS</Tab>
              <Tab _hover={{background:"azure"}} _selected={{background:"azure"}}>Operation</Tab>
              <Tab _hover={{background:"azure"}} _selected={{background:"azure"}}>Free Tools</Tab>
            </Flex>
          </TabList>
          <TabPanels border="1px solid orange">
            <TabPanel>
              <p>onel</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>onel</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default OverviewOfAllProducts;
