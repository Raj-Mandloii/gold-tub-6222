import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import photo from "../AllData/Tab3Second.webp";

const ConvertMore = () => {
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
            Turn more visitors into leads with a personalized yet scalable
            strategy.
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
                Landing Page Builder
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Design and launch beautiful landing pages without help from
                developers or IT. Choose from mobile-optimized templates that
                are proven to convert, or build pages from the ground up.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Form Builder
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Easily build forms using a simple drag-and-drop editor. Add them
                to your website to convert anonymous visitors into leads that
                automatically flow into your CRM.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Marketing Automation
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Save time and scale your efforts with automated workflows.
                Nurture and score leads, personalize marketing across channels
                at scale, automate cross-functional operations, manage data in
                bulk, and more.
              </Text>
            </Box>
          </Flex>
          <Flex my="2.5rem" justifyContent={"space-between"} gap="2rem">
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Email Marketing
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Create mobile-optimized email campaigns that look professionally
                designed — all by yourself. Personalize content for each
                recipient, and run A/B tests to improve clickthrough rates.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Account-Based Marketing
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Unite your marketing and sales teams with collaborative,
                intuitive ABM tools. Build deeper relationships, and turn your
                highest-value target accounts into customers.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Lead Tracking & Management
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Get the full picture for every lead in a single, integrated
                database. Segment and nurture contacts based on any data you’ve
                collected, and automatically score leads for your sales team.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ConvertMore;
