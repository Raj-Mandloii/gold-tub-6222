import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../AllData/OperationIcon.svg";
import styles from "../CSS/OverviewOfAllProducts.module.css";

const Operation = () => {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/");
  };
  return (
    <Flex gap="1.5rem" w="95%" m="auto">
      <Box w="60%">
        <Flex my="1.1rem" gap={"1rem"} justifyContent={"center"}>
          <Img w="47px" h="55px" src={icon} alt="icon" />
          <Text position={"relative"} fontSize={"26px"} fontWeight="700">
            Operation Hub{" "}
            <Text fontSize={"14px"} position="absolute" top="4px" right="-22px">
              <InfoIcon />
            </Text>
          </Text>
        </Flex>
        <Text lineHeight={"27px"}>
          Operation software to help you attract the <br /> right audience,
          convert more visitors into <br /> customers, and run complete inbound{" "}
          <br /> Operation campaigns at scale.
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
        <Flex gap="5px">
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Data sync{" "}
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Program <br />
              <span className={styles.spantTag}>automation</span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Data
              <br />
              <span className={styles.spantTag}>quality</span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Datasets
            </Text>
          </Box>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Snowflake data share
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Workflow extensions
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Team management and{" "}
              <span className={styles.spantTag}>permissions</span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Expanded operational{" "}
              <span className={styles.spantTag}>capacity</span>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Operation;
