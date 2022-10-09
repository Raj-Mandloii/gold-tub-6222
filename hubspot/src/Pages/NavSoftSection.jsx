import "./NavSoftSection.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Marketing from "../Assets/MarketingHub.svg";
import SalesHub from "../Assets/SalesHub.svg";
import OperationsHub from "../Assets/OperationsHub.svg";
import CmsHub from "../Assets/CmsHub.svg";
import ServiceHub from "../Assets/ServiceHub.svg";
import { NavLink } from "react-router-dom";
const NavSoftSection = () => {
  const c = "color.600";
  return (
    <Box className="mainb">
      <Text className="heading" color={c}>
        The HubSpot CRM Platform
      </Text>
      <Text className="heading1" color={c}>
        All of HubSpot's marketing, sales CRM, customer service, CMS, and
        operations software on one platform.
      </Text>
      <Box className="btnlinkbox" w={["90%", "90%", "60%"]}>
        <Flex
          justifyContent="space-between"
          direction={["column", "column", "row"]}
        >
          <Box className="boxstyle" w={["100%", "100%", "45%"]}>
            <NavLink to="/FreeHubSpotCRM">
              Free HubSpot CRM <ArrowForwardIcon />
            </NavLink>
          </Box>
          <Box className="boxstyle" w={["100%", "100%", "45%"]}>
            <NavLink to="/productoverview">
              Overview of all products <ArrowForwardIcon />
            </NavLink>
          </Box>
        </Flex>
      </Box>
      <SimpleGrid className="cards" minChildWidth="250px" w={["90%","90%","80%"]}>
        <NavLink to="/Marketing">
          <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
            <Flex textAlign="left" justifyContent="space-around">
              <Box width="10%">
                <Image src={Marketing} alt="Marketing Hub" width="100%" />
              </Box>
              <Box>
                <Text className="cardhead">Marketing Hub</Text>
                <Text>
                  Marketing automation <br />
                  software.{" "}
                  <span style={{ color: "teal", fontWeight: "500" }}>
                    <Link>
                      Free and premium <br /> plans <ArrowForwardIcon />
                    </Link>
                  </span>
                </Text>
              </Box>
            </Flex>
          </Box>
        </NavLink>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <NavLink to="/Sales">
            <Flex textAlign="left" justifyContent="space-around">
              <Box width="10%">
                <Image src={SalesHub} alt="Sales Hub" width="100%" />
              </Box>
              <Box>
                <Text className="cardhead">Sales Hub</Text>
                <Text>
                  Sales CRM software.{" "}
                  <span style={{ color: "teal", fontWeight: "500" }}>
                    <Link>
                      Free <br /> and premium plans <ArrowForwardIcon />
                    </Link>
                  </span>
                </Text>
              </Box>
            </Flex>
          </NavLink>
        </Box>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <Flex textAlign="left" justifyContent="space-around">
            <Box width="10%">
              <Image src={ServiceHub} alt="Service Hub" width="100%" />
            </Box>
            <Box>
              <Text className="cardhead">Service Hub</Text>
              <Text>
                Customer service software. <br />
                <span style={{ color: "teal", fontWeight: "500" }}>
                  <Link>
                    Free and premium plans <ArrowForwardIcon />
                  </Link>
                </span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <Flex textAlign="left" justifyContent="space-around">
            <Box width="10%">
              <Image src={CmsHub} alt="CMS Hub" width="100%" />
            </Box>
            <Box>
              <Text className="cardhead">CMS Hub</Text>
              <Text>
                Content management <br />
                software.{" "}
                <span style={{ color: "teal", fontWeight: "500" }}>
                  <Link>
                    Free and premium <br /> plans <ArrowForwardIcon />
                  </Link>
                </span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <Flex textAlign="left" justifyContent="space-around">
            <Box width="10%">
              <Image src={OperationsHub} alt="Operations Hub" width="100%" />
            </Box>
            <Box>
              <Text className="cardhead">Operations Hub</Text>
              <Text>
                Operations software.{" "}
                <span style={{ color: "teal", fontWeight: "500" }}>
                  <Link>
                    Free and <br /> premium plans <ArrowForwardIcon />
                  </Link>
                </span>
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box className="bbox">
        <Box className="cardbottomhead">
          <Text color={c}>App Marketplace</Text>
        </Box>
        <Box>
          <Text pb="30px">
            Connect your favorite apps to HubSpot.{" "}
            <span className="bottomtext">
              <Link>
                See all integration
                <ArrowForwardIcon />{" "}
              </Link>
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default NavSoftSection;
