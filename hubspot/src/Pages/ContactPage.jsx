import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import SiteLogo from "../Assets/LoginLogo.svg";
import bgImg from "../Assets/contactPageBG.webp";
import callLogo from "../Assets/Calling.png";
import chatLogo from "../Assets/community.png";
import dateLogo from "../Assets/Date.png";
const ContactCard = ({ img, text, width, btnText }) => (
  <VStack
    alignContent={"center"}
    alignItems="center"
    backgroundColor={"#f7f9fd"}
    width={["100%", "100%", "100%", "400px"]}
    p="2rem"
    fontFamily={"sans-serif"}
    fontWeight="bold"
  >
    <Image src={img} width={width} />
    <Spacer />
    <Text fontSize={["18px", "20px", "20px", "20px"]}>{text}</Text>
    <Spacer />

    <Button
      backgroundColor={"orange"}
      color="white"
      _hover={{ color: "white", backgroundColor: "orange.200" }}
    >
      {btnText}
    </Button>
    <Spacer />
  </VStack>
);
const ContactPage = () => {
  return (
    <Container
      backgroundColor={"#fefeff"}
      maxW="container.lg"
      py="0.5rem"
      my="2rem"
    >
      <Flex justifyContent={"space-between"}>
        <Image
          width={[100, 100, 100]}
          src={SiteLogo}
          alt={"logo"}
          mb={["3rem", "1.5rem", 0, 0]}
        />
        <Text>+91 11 7127 9211</Text>
      </Flex>
      <VStack>
        <Flex
          fontFamily={"sans-serif"}
          py="1rem"
          alignItems={"center"}
          textAlign={["center", "center", "center", "left"]}
        >
          <Box>
            <Text
              fontSize={["26px", "34px", "48px", "48px"]}
              lineHeight={["30px", "30px", "60px", "60px"]}
              fontWeight="bold"
              color={"#2e475d"}
            >
              Contact Us About
              <br /> HubSpot's Software
            </Text>
            <Text
              mt="0.7rem"
              fontSize={"14.4px"}
              lineHeight="25.2px"
              color={"#2e475d"}
            >
              We'd love to show you how you can get more traffic and leads,
              increase your sales productivity, provide better customer service,
              or all of the above! Here are a few ways to reach out to our sales
              team.
            </Text>
          </Box>
          <Box width={[0, 0, 0, "150%"]}>
            <Image src={bgImg} alt="Background Image" />
          </Box>
        </Flex>
        {/* Card Section */}
        <Flex flexDirection={["column", "column", "column", "row"]} gap="20px">
          <VStack
            alignContent={"center"}
            alignItems="center"
            backgroundColor={"#f7f9fd"}
            width={["400px"]}
            p="2rem"
            fontFamily={"sans-serif"}
            fontWeight="bold"
          >
            <Image src={callLogo} width={"40px"} />
            <Spacer />
            {/* <Text fontSize={"20px"}></Text> */}
            <Text fontSize={["18px", "20px", "20px", "20px"]}>
              Call us directly
            </Text>

            <Spacer />

            <Text fontSize={["14px", "18px", "18px", "18px"]}>
              +91 11 7127 9211
            </Text>

            <Spacer />
          </VStack>
          <ContactCard
            img={chatLogo}
            text={"Chat with our sales team"}
            width="80px"
            btnText={"Chat with sales"}
          />
          <ContactCard
            img={dateLogo}
            text={"Get a product demo"}
            width="60px"
            btnText={"Get demo"}
          />
        </Flex>
      </VStack>
    </Container>
  );
};

export default ContactPage;
