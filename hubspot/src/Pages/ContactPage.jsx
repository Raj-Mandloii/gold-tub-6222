import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Spacer,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import SiteLogo from "../Assets/LoginLogo.svg";
import bgImg from "../Assets/contactPageBG.webp";
import callLogo from "../Assets/Calling.png";
import chatLogo from "../Assets/community.png";
import dateLogo from "../Assets/Date.png";
import {  useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <Box>
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
            onClick={() => gotoHome()}
            cursor="pointer"
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
                mt={[0, 0, 10, 0]}
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
                increase your sales productivity, provide better customer
                service, or all of the above! Here are a few ways to reach out
                to our sales team.
              </Text>
            </Box>
            <Box width={[0, 0, 0, "150%"]}>
              <Image src={bgImg} alt="Background Image" />
            </Box>
          </Flex>
          {/* Card Section */}
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            gap="20px"
          >
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
          {/* Contact Form */}
          <VStack py="2rem">
            <Box
              w={[0, 0, "500px", "550px"]}
              display={["none", "none", "block", "block"]}
              p="1rem"
              boxShadow={"2xl"}
              borderRadius="10px"
            >
              <Heading p="2rem">Get a Demo</Heading>
              <Text pb="2rem">
                Complete the form for a free demo of HubSpot’s software.
              </Text>
              <Flex gap="1rem" p="0.5rem">
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input
                    placeholder="First name"
                    variant={"filled"}
                    type="text"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last name</FormLabel>
                  <Input
                    placeholder="Last name"
                    variant={"filled"}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Flex gap="1rem" p="0.5rem">
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" variant={"filled"} type="email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Phone number</FormLabel>
                  <Input
                    placeholder="Phone number"
                    variant={"filled"}
                    type="number"
                    minLength={12}
                  />
                </FormControl>
              </Flex>
              <Flex gap="1rem" p="0.5rem">
                <FormControl isRequired>
                  <FormLabel>Company name</FormLabel>
                  <Input
                    placeholder="Company name"
                    variant={"filled"}
                    type="text"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Website URL</FormLabel>
                  <Input
                    placeholder="Website URL"
                    variant={"filled"}
                    type="text"
                  />
                </FormControl>
              </Flex>
              <Box p="10px">
                <FormControl isRequired>
                  <FormLabel>Employees</FormLabel>
                  <Select placeholder="Please Select" variant={"filled"}>
                    <option value="1">1</option>
                    <option value="2 to 5">2 to 5</option>
                    <option value="6 to 10">6 to 10</option>
                    <option value="11 to 25">11 to 25</option>
                    <option value="26 to 50">26 to 50</option>
                    <option value="51 to 200">51 to 200</option>
                    <option value="201 to 1,000">201 to 1,000</option>
                    <option value="1,001 to 10,000">1,001 to 10,000</option>
                    <option value="10,001 or more">10,001 or more</option>
                  </Select>
                </FormControl>
              </Box>
              <Box p="10px">
                <FormControl isRequired>
                  <FormLabel>Country of Company Headquarters*</FormLabel>
                  <Select placeholder="Please select" variant={"filled"}>
                    <option value="India">India</option>
                    <option value="Russia">Russia</option>
                    <option value="Japan">Japan</option>
                    <option value="Israel">Israel</option>
                    <option value="USA">USA</option>
                  </Select>
                </FormControl>
              </Box>
              <Box p="10px">
                <FormControl isRequired>
                  <FormLabel>What are you hoping to learn?</FormLabel>
                  <Textarea variant={"filled"} />
                </FormControl>
              </Box>
              <Box
                p="10px"
                textAlign={"left"}
                fontFamily="sans-serif"
                fontSize="15px"
              >
                We're committed to your privacy. HubSpot uses the information
                you provide to us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our{" "}
                <a
                  href="/"
                  style={{
                    color: "#0b8489",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Privacy Policy.
                </a>
              </Box>
              <Button
                color="white"
                backgroundColor={"orange"}
                _hover={{ color: "white", backgroundColor: "orange.200" }}
                width="80px"
              >
                Next
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Container>
      <VStack
        backgroundColor={"#213343"}
        color="white"
        width={["full", "full", "100%", "100%"]}
        justifyContent="center"
        alignItems={"center"}
        p="3rem"
      >
        <Text fontSize={["1xl", "1xl", "2xl", "2xl"]}>
          Copyright © 2022 HubSpot, Inc.
        </Text>
        <Flex
          gap="10px"
          py="0.5rem"
          color={"#b6c7d6"}
          fontSize="16px"
          fontWeight={"600"}
        >
          <a
            target={"_blank"}
            href="https://legal.hubspot.com/legal-stuff?hubs_signup-url=www.hubspot.com%252F&hubs_signup-cta=homepage-nav-contact-sales"
          >
            Legal Stuff
          </a>
          <a
            target={"_blank"}
            href="https://legal.hubspot.com/privacy-policy?hubs_signup-url=www.hubspot.com%252F&hubs_signup-cta=homepage-nav-contact-sales"
          >
            Privacy Policy
          </a>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ContactPage;
