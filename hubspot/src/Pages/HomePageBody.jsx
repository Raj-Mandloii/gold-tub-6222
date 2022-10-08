import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import First from "../Assets/First.png";
import Marketing from "../Assets/MarketingHub.svg";
import SalesHub from "../Assets/SalesHub.svg";
import OperationsHub from "../Assets/OperationsHub.svg";
import CmsHub from "../Assets/CmsHub.svg";
import ServiceHub from "../Assets/ServiceHub.svg";
import { MdCheckCircle } from "react-icons/md";
import { GoPlusSmall } from "react-icons/go";
import userGroup from "../Assets/userGroup.svg";
import Customers from "../Assets/Customers.svg";
import hubSpotBlog from "../Assets/hubSpotBlog.svg";
import hubSpotAc from "../Assets/hubSpotAc.svg";
import inbound from "../Assets/inbound.svg";
import Languages from "../Assets/Languages.svg";
import Social from "../Assets/Social.svg";
import { NavLink } from "react-router-dom";
import style from "./homepagebody_style.json";
const HomePageBody = () => {
  const hover = {
    color: "#FF5C35",
    border: "1px solid #FF5C35",
    backgroundColor: "white",
  };
  return (
    <Box size={["xs", "sm", "md", "lg"]}>
      <Box
        bgColor="rgb(62,89,116)"
        p="15px"
        display={["none", "none", "none", "block"]}
      >
        <Box w={["90%", "80%", "70", "60%"]} m="auto">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            direction={["column", "column", "row"]}
          >
            <Text color="white">
              Tickets for INBOUND 2022 are on sale now. Join us online or in
              person in Boston, MA on September 6-9.
            </Text>
            <Button color="rgb(62,89,116)" bgColor="white">
              Buy now
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box
        pb={["10", "20", "30", "120"]}
        bgGradient="linear(to-r, #D44325, #FF5C35)"
      >
        <Box style={style.sec}>
          <Flex
            style={style.flex}
            direction={["column", "column", "column", "row"]}
          >
            <Box
              style={style.third}
              w={["90%", "90%", "45%"]}
              mt={["30px", "30px", "none", "none"]}
            >
              <Text fontWeight="600">HUBSPOT CRM PLATFORM</Text>
              <Box>
                <Heading size={["xl", "xl", "2xl"]} mt="20px">
                  Powerful,
                  <br /> not overpowering
                </Heading>
              </Box>
              <Box style={style.four} w={["95%", "95%", "90%", "90%"]}>
                <Text>
                  Finally, a CRM platform that's both powerful and easy to use.
                  Create delightful customer experiences. Have a delightful time
                  doing it.
                </Text>
              </Box>
              <Button style={style.btn} w={["90%", "90%", "50%"]}>
                Start free or get a demo
              </Button>
              <Box style={style.five} w={["95%", "95%", "45%%"]}>
                <Text>
                  Get started with free tools, or get more with our premium
                  software.
                </Text>
              </Box>
            </Box>
            <Box
              w={["90%", "90%", "55%"]}
              mt={["30px", "30px", "30px", "none"]}
            >
              <Image src={First} w="100%" />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bgColor="#F6F9FC">
        <Box
          style={style.style2.tcolor}
          textAlign={["left", "left", "center"]}
          w={["90%", "90%", "90%", "none"]}
          m={["auto", "auto", "auto", "none"]}
        >
          <Heading size="lg" pt="4rem">
            The CRM Platform Your Whole Business Will Love
          </Heading>
        </Box>
        <Box
          style={style.style2.text}
          w={["90%", "90%", "45%"]}
          mt={["1rem", "1rem", "2rem", "3rem"]}
        >
          <Text>
            HubSpot's CRM platform has all the tools and integrations you need
            for marketing, sales, content management, and customer service. Each
            product in the platform is powerful alone, but the real magic
            happens when you use them together.
          </Text>
        </Box>
        <Flex
          style={style.style2.btnbox}
          display={["column", "column", "row"]}
          w={["90%", "90%", "30%"]}
        >
          <Button style={style.style2.btnbox.btn1} w={["100%", "100%", "40%"]}>
            Get free CRM
          </Button>
          <Button
            style={style.style2.btnbox.btn2}
            variant="outline"
            colorScheme="white"
            w={["100%", "100%", "50%"]}
            mt={["20px", "20px", "0"]}
          >
            Demo premium CRM
          </Button>
        </Flex>
        <Flex
          w={["90%", "90%", "70%"]}
          className="cards"
          direction={["column", "column", "row"]}
          mb="2rem"
        >
          <Box
            borderRadius="3px"
            boxShadow="sm"
            bgColor="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Box w="90%" m="auto" mt="2.5rem">
              <Flex justifyContent="space-evenly">
                <Box w="12%">
                  <Image src={Marketing} w="100%" />
                </Box>
                <Text
                  fontSize="26px"
                  fontWeight="600"
                  style={style.style2.tcolor}
                >
                  Marketing Hub
                </Text>
              </Flex>
              <Box w="85%" ml="10%" mt="2rem" textAlign="left">
                <Text as="bold" fontSize="sm" color="#2E475D">
                  Marketing software to help you grow traffic, convert more
                  visitors, and run complete inbound marketing campaigns at
                  scale.
                </Text>
              </Box>
              <Box w="90%" mt="5rem" borderTop="1px solid #2E475D" ml="5%">
                <Box mt="1.5rem" textAlign="left" color="#2E475D">
                  <Text as="bold" fontSize="md">
                    Popular Features
                  </Text>
                  <Box w="49%" mt="1.8rem" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Lead generation
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="60%" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Marketing automation
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="34%" mb="1.5rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Analytics
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <NavLink to="/Marketing">
                <Button
                  w="90%"
                  bgColor="#FF5C35"
                  color="white"
                  borderRadius="2px"
                  mb="1.5rem"
                  _hover={hover}
                >
                  Get Started
                </Button>
              </NavLink>
            </Box>
          </Box>
          <Box
            borderRadius="3px"
            boxShadow="sm"
            bgColor="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Box w="90%" m="auto" mt="2.5rem">
              <Flex justifyContent="space-evenly">
                <Box w="12%">
                  <Image src={SalesHub} w="100%" />
                </Box>
                <Text
                  fontSize="26px"
                  fontWeight="600"
                  style={style.style2.tcolor}
                >
                  Sales Hub
                </Text>
              </Flex>
              <Box w="85%" ml="10%" mt="2rem" textAlign="left">
                <Text as="bold" fontSize="sm" color="#2E475D">
                  Sales CRM software to help you get deeper insights into
                  prospects, automate the tasks you hate, and close more deals
                  faster.
                </Text>
              </Box>
              <Box w="90%" mt="5rem" borderTop="1px solid #2E475D" ml="5%">
                <Box mt="1.5rem" textAlign="left" color="#2E475D">
                  <Text as="bold" fontSize="md">
                    Popular Features
                  </Text>
                  <Box w="46%" mt="1.8rem" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Advanced CRM
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="55%" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Meeting scheduling
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="34%" mb="1.5rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Payments
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <NavLink to="/Sales">
                <Button
                  w="90%"
                  bgColor="#FF5C35"
                  color="white"
                  borderRadius="2px"
                  mb="1.5rem"
                  _hover={hover}
                >
                  Get Started
                </Button>
              </NavLink>
            </Box>
          </Box>
          <Box
            borderRadius="3px"
            boxShadow="sm"
            bgColor="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Box w="90%" m="auto" mt="2.5rem">
              <Flex justifyContent="space-evenly">
                <Box w="12%">
                  <Image src={ServiceHub} w="100%" />
                </Box>
                <Text
                  fontSize="26px"
                  fontWeight="600"
                  style={style.style2.tcolor}
                >
                  Service Hub
                </Text>
              </Flex>
              <Box w="85%" ml="10%" mt="2rem" textAlign="left">
                <Text as="bold" fontSize="sm" color="#2E475D">
                  Customer service software to help you connect with customers,
                  exceed expectations, and turn them into promoters who grow
                  your business.
                </Text>
              </Box>
              <Box w="90%" mt="5rem" borderTop="1px solid #2E475D" ml="5%">
                <Box mt="1.5rem" textAlign="left" color="#2E475D">
                  <Text as="bold" fontSize="md">
                    Popular Features
                  </Text>
                  <Box w="29%" mt="1.8rem" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Tickets
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="55%" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Customer feedback
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="50%" mb="1.5rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Knowledge base
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <NavLink to="">
                <Button
                  w="90%"
                  bgColor="#FF5C35"
                  color="white"
                  borderRadius="2px"
                  mb="1.5rem"
                  _hover={hover}
                >
                  Get Started
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Flex>
        <Flex
          pb="4rem"
          className="cards"
          direction={["column", "column", "row"]}
          w={["90%", "90%", "45%"]}
        >
          <Box
            borderRadius="3px"
            boxShadow="sm"
            bgColor="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Box w="90%" m="auto" mt="2.5rem">
              <Flex justifyContent="space-evenly">
                <Box w="12%">
                  <Image src={CmsHub} w="100%" />
                </Box>
                <Text
                  fontSize="26px"
                  fontWeight="600"
                  style={style.style2.tcolor}
                >
                  CMS Hub
                </Text>
              </Flex>
              <Box w="85%" ml="10%" mt="2rem" textAlign="left">
                <Text as="bold" fontSize="sm" color="#2E475D">
                  Content management software that's flexible for marketers,
                  powerful for developers, and gives customers a personalized,
                  secure experience.
                </Text>
              </Box>
              <Box w="90%" mt="5rem" borderTop="1px solid #2E475D" ml="5%">
                <Box mt="1.5rem" textAlign="left" color="#2E475D">
                  <Text as="bold" fontSize="md">
                    Popular Features
                  </Text>
                  <Box w="59%" mt="1.8rem" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Drag-and-drop editor
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="63%" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        SEO recommendations
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="48%" mb="1.5rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Website themes
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <NavLink to="">
                <Button
                  w="90%"
                  bgColor="#FF5C35"
                  color="white"
                  borderRadius="2px"
                  mb="1.5rem"
                  _hover={hover}
                >
                  Get Started
                </Button>
              </NavLink>
            </Box>
          </Box>
          <Box
            borderRadius="3px"
            boxShadow="sm"
            bgColor="white"
            _hover={{ boxShadow: "lg" }}
          >
            <Box w="90%" m="auto" mt="2.5rem">
              <Flex justifyContent="space-evenly">
                <Box w="12%">
                  <Image src={OperationsHub} w="100%" />
                </Box>
                <Text
                  fontSize="26px"
                  fontWeight="600"
                  style={style.style2.tcolor}
                >
                  Operations Hub
                </Text>
              </Flex>
              <Box w="85%" ml="10%" mt="2rem" textAlign="left">
                <Text as="bold" fontSize="sm" color="#2E475D">
                  Operations software that syncs your apps, cleans and curates
                  customer data, and automates processes — so all your systems
                  and teams work better together.
                </Text>
              </Box>
              <Box w="90%" mt="5rem" borderTop="1px solid #2E475D" ml="5%">
                <Box mt="1.5rem" textAlign="left" color="#2E475D">
                  <Text as="bold" fontSize="md">
                    Popular Features
                  </Text>
                  <Box w="35%" mt="1.8rem" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Data sync
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="70%" mb="1rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Programmable automation
                      </Text>
                    </Flex>
                  </Box>
                  <Box w="64%" mb="1.5rem">
                    <Flex justifyContent="space-between">
                      <MdCheckCircle fontSize="20px" color="#FF5C35" />
                      <Text fontSize="xs" fontWeight="600">
                        Data quality automation
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <NavLink to="">
                <Button
                  w="90%"
                  bgColor="#FF5C35"
                  color="white"
                  borderRadius="2px"
                  mb="1.5rem"
                  _hover={hover}
                >
                  Get Started
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Flex>
        <Box bgGradient="linear(to-r, #12BEBA, #4DB171)">
          <Box w={["90%", "90%", "48%"]} m="auto" pt="5rem" color="white">
            <Heading fontSize={["2xl", "2xl", "3xl"]}>
              Learn and grow with award-winning support and a thriving community
              behind you.
            </Heading>
          </Box>
          <Box w={["85%", "85%", "45%"]} m="auto" color="white" pt="2.5rem">
            <Text>
              You don't have to go it alone. Master the inbound methodology and
              get the most out of your tools with HubSpot's legendary customer
              support team and a community of thousands of marketing and sales
              pros just like you.
            </Text>
          </Box>
          <Box
            w="80%"
            textAlign="center"
            color="white"
            m="auto"
            mt={["1rem","2rem","3rem","5rem"]}
            pb="5.5rem"
          >
            <Flex direction={["column", "column", "row"]}>
              <Box
                w={["100%", "100%", "25%"]}
                borderBottom={["none", "none", "1.5px solid white"]}
                borderRight={["none", "none", "1.5px solid white"]}
                pb="20px"
                pt="20px"
              >
                <Box mb="10px" pt="30px">
                  <Image src={userGroup} m="auto" />
                </Box>
                <Box mb="10px">
                  <Flex ml="40%">
                    <Heading size="xl">150</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">HubSpot user groups</Text>
              </Box>
              <Box
                w={["100%", "100%", "25%"]}
                borderBottom={["none", "none", "1.5px solid white"]}
                borderRight={["none", "none", "1.5px solid white"]}
                pt="20px"
              >
                <Box mb="10px" pt="30px">
                  <Image src={hubSpotBlog} m="auto" />
                </Box>
                <Box mb="10px">
                  <Flex ml="40%">
                    <Heading size="xl">7M</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">monthly visits</Text>
              </Box>
              <Box
                w={["100%", "100%", "25%"]}
                borderBottom={["none", "none", "1.5px solid white"]}
                borderRight={["none", "none", "1.5px solid white"]}
                pt="20px"
              >
                <Box mb="10px" pt="25px">
                  <Image src={hubSpotAc} m="auto" />
                </Box>
                <Box mb="10px">
                  <Flex ml="35%">
                    <Heading size="xl">460K</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">certified professionals</Text>
              </Box>
              <Box
                w={["100%", "100%", "25%"]}
                borderBottom={["none", "none", "1.5px solid white"]}
                pt="20px"
              >
                <Box mb="10px" pt="25px">
                  <Image src={inbound} m="auto" />
                </Box>
                <Box mb="10px">
                  <Heading size="xl">70K</Heading>
                </Box>
                <Text mb={["10px","20px","25px"]}>registered attendees</Text>
              </Box>
            </Flex>
            <Flex direction={["column", "column", "row"]}>
              <Box
                w={["100%", "100%", "25%"]}
                borderRight={["none","none","1.5px solid white"]}
                pt={["10px","15px","20px"]}
                pb="20px"
              >
                <Box mb="10px" pt="30px">
                  <Image src={userGroup} m="auto" />
                </Box>
                <Box mb="10px">
                  <Flex ml="35%">
                    <Heading size="xl">1,090</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">integrations</Text>
              </Box>
              <Box
                w={["100%", "100%", "25%"]}
                borderRight={["none","none","1.5px solid white"]}
                pt="20px"
              >
                <Box mb="10px" pt="30px">
                  <Image src={hubSpotBlog} m="auto" />
                </Box>
                <Box mb="10px">
                  <Flex ml="40%">
                    <Heading size="xl">7M</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">monthly visits</Text>
              </Box>
              <Box
                w={["100%", "100%", "25%"]}
                borderRight={["none","none","1.5px solid white"]}
                pt="20px"
              >
                <Box mb="10px" pt="30px">
                  <Image src={Social} m="auto" />
                </Box>
                <Box mb="10px">
                  <Flex ml="35%">
                    <Heading size="xl">3.1M</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">social followers</Text>
              </Box>
              <Box w={["100%", "100%", "25%"]} pt="20px">
                <Box mb="15px" pt="30px">
                  <Image src={Customers} m="auto" />
                </Box>
                <Box mb="15px">
                  <Flex ml="25%">
                    <Heading size="xl">143,000</Heading>
                    <GoPlusSmall />
                  </Flex>
                </Box>
                <Text mb="25px">customers</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageBody;
