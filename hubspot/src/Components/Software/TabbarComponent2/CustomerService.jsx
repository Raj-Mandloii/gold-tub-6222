import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../AllData/CustomerIcon.svg";
import styles from "../CSS/OverviewOfAllProducts.module.css";

const CustomerService = () => {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/");
  };
  return (
    <Flex gap="1.5rem" w="95%" m="auto">
      <Box w="60%">
        <Flex my="1.1rem" gap={"1rem"} justifyContent={"center"}>
          <Img w="47px" h="55px" src={icon} alt="icon" />
          <Text fontSize={"26px"} fontWeight="700">
            Service Hub{" "}
          </Text>
        </Flex>
        <Text lineHeight={"27px"}>
          CustomerService software to help you attract <br /> right audience,
          convert more visitors into <br /> customers, and run complete inbound{" "}
          <br /> CustomerService campaigns at scale.
        </Text>
        <Button
          onClick={handleDemo}
          my="1.3rem"
          borderRadius="3px"
          color="white"
          background={"#FF5C35"}
          py="1.6rem"
          px="5rem"
          _hover={{ background: "orange.300" }}
        >
          Get a demo
        </Button>
      </Box>
      <Box>
        <Text
          fontWeight={"700"}
          color="gray.600"
          align="left"
          ml="1.3rem"
          my="1rem"
        >
          Premium Features
        </Text>
        <Flex>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Premium versions
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Customer service
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Knowledge base
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Customer{" "}
              <span className={styles.spantTag}>feedback </span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Multiple ticket
            </Text>
          </Box>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Video creation
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Custom support form{" "}
              <span className={styles.spantTag}>fields</span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Goals
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Over 30 additional{" "}
              <span className={styles.spantTag}>features</span>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CustomerService;
