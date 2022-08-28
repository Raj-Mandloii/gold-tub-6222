import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import photo from "../AllData/Tab3Third.webp";

const Report = () => {
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
            Bring your team together by translating data into strategies that
            move the needle.
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
          <Flex justifyContent={"space-between"} gap="3rem" mb='2rem'>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem" >
                Marketing Analysis
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Make smarter, data-backed decisions with powerful custom
                reporting and built-in analytics. Tie your work to deals closed
                and contacts created with attribution reporting.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Custom Objext
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Enjoy the flexibility to store and customize any kind of data in
                HubSpot. Slice and dice custom object data into reports, and
                build dashboards to share insights with your team.
              </Text>
            </Box>
            <Box align="left">
              <Text color="teal" fontWeight="600" my="1rem">
                Salesforce Integration
              </Text>
              <Text color={"gray.600"} lineHeight="25px">
                Connect HubSpot to Salesforce for a fast, reliable,
                bi-directional sync — no technical work required. Send lead
                intelligence to your sales team so they have better context to
                close deals.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Report;
