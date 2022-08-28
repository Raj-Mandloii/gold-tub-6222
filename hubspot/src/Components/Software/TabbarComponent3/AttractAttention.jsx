import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import photo from "../AllData/Tab3First.webp";

const AttractAttention = () => {
  return (
    <Box w="90%" m="auto" mt="1.5rem" mb="2.5rem">
      <Flex gap={"2.5rem"}>
        <Box
          mt="1rem"
          w="19%"
          align="left"
          fontSize="25px"
          fontWeight={"600"}
          color="gray.600"
        >
          <Text>
            Create content your prospects crave, and make it impossible to miss.
          </Text>
        </Box>
        <Box w="78%">
          <Img src={photo} alt="photo" />
          <Text
            mt="1.5rem"
            align="left"
            color="gray.600"
            fontWeight="600"
            fontSize={"18px"}
          >
            POPULAR FEATURES:
          </Text>
          <Flex justifyContent={"space-between"} gap="3rem">
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Blog
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Publish content your audience is looking for, and get discovered
                in search, social media, and beyond. Add calls-to-action that
                convert readers into customers.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                SEO
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Build your search authority and outrank competitors with tools
                that help you plan your content strategy and optimize your
                content as you type.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Ad Tracking & Management
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Stop struggling to justify your ad spend. Manage Facebook,
                LinkedIn, and Google ads right inside HubSpot, and track which
                ads are turning prospects into customers.
              </Text>
            </Box>
          </Flex>
          <Flex my="2.5rem" justifyContent={"space-between"} gap="2rem">
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Social Media Management
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Stop letting important interactions go unnoticed. Monitor and
                prioritize conversations, and publish to social networks with
                the same tool you use to create campaigns.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Video
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Enhance the impact of your content through the power of video.
                Host and manage files right inside HubSpot, and easily embed
                them in social media, web pages, and blog posts.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Live Chat
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Connect with and convert visitors in real time — when your
                product is top of mind. Use bots to qualify leads and scale your
                efforts so you can focus on the conversations that matter most.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default AttractAttention;
