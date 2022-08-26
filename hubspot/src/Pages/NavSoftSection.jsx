import "./NavSoftSection.css";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Marketing from "../Assets/MarketingHub.svg";
import SalesHub from "../Assets/SalesHub.svg";
import OperationsHub from "../Assets/OperationsHub.svg";
import CmsHub from "../Assets/CmsHub.svg";
import ServiceHub from "../Assets/ServiceHub.svg";
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
      <Box className="btnlinkbox">
        <Flex justifyContent="space-between">
          <Box className="boxstyle">
            <Link to="">
              Free HubSpot CRM <ArrowForwardIcon />
            </Link>
          </Box>
          <Box className="boxstyle">
            <Link to="">
              Overview of all products <ArrowForwardIcon />
            </Link>
          </Box>
        </Flex>
      </Box>
      <Box className="cards">
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
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
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
      </Box>
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
