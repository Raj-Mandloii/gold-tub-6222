import { AddIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import styles from "./CSS/MarketingHub.module.css";
import firstImg from "./AllData/MarketingHubFirst.png";
import icon from "./AllData/MarketingIcon.png";
import frontify from "./AllData/FrontifyLogo.webp"
import Vmware from "./AllData/VmwareLogo.webp"
import Loom from "./AllData/LoomLogo.png"
import Monday from "./AllData/MondayLogo.webp"
import Trello from "./AllData/TrelloLogo.webp"
import Momentive from "./AllData/MomentiveLogo.jpg"
import Reddit from "./AllData/RedditLogo.png"
import Soundcloud from "./AllData/SoundcloudLogo.png"


const MarketingHub = () => {
  return (
    <div className={styles.container}>
      {/* //add the Navbar */}
      <div>Navbar</div>
      <Box className={styles.box1}>
        <Box pt="1rem" className={styles.ProductOverview}>
          <Box
            fontWeight="600"
            color="cyan.800"
            _hover={{ textDecoration: "underline" }}
          >
            {" "}
            <Link to="/productoverview">Product Overview</Link>
          </Box>
          <Box>
            <ChevronRightIcon fontSize="30px" color="gray.600" mt="-4px" />
          </Box>
          <Box fontWeight={"500"}>Marketing Hub</Box>
        </Box>
        <Flex
          w="74%"
          m="auto"
          my="1.3rem"
          gap={"2rem"}
          justifyContent="space-between"
        >
          {/* First box Start here (Upper two flex) */}
          <Box w="50%">
            <Img mt="1rem" src={firstImg} alt="imageFirst" />
          </Box>
          {/* Second box Start here (Upper two flex) */}
          <Box w="52%" align="left">
            <Box ml="-307px">
              <Flex my="1.2rem" gap={"1rem"} justifyContent={"center"}>
                <Img w="30px" h="30px" src={icon} alt="icon" />
                <Text
                  color="gray.700"
                  position={"relative"}
                  fontSize={"20px"}
                  fontWeight="700"
                >
                  Marketing Hub{" "}
                  <Text
                    fontSize={"12px"}
                    position="absolute"
                    top="4px"
                    right="-22px"
                    color="gray.700"
                  >
                    TM
                  </Text>
                </Text>
              </Flex>
            </Box>
            <Text fontSize={"33px"} fontWeight="700" color="gray.700">
              Marketing Software
            </Text>
            <Button
              mt="1.3rem"
              mb='3rem'
              borderRadius="3px"
              color="white"
              background={"#FF5C35"}
              py="1.6rem"
              px="2rem"
              _hover={{ background: "orange.300" }}
            >
              Get started
            </Button>
            {/* Accordation start here */}
            <Accordion allowToggle>
              <AccordionItem
                mb="1rem"
                border='1px solid lightgray'
                borderRadius={'4px'}
                borderShadow='lg'
                py='6px'
              >
                <h2>
                  <AccordionButton>
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight={'600'}
                      fontSize='15px'
                     
                    >
                      Product Description
                    </Box>
                    <AddIcon color="cyan.600" fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Marketing software to help you attract the right audience,
                  convert more visitors into customers, and run complete inbound
                  marketing campaigns at scale — all on one powerful,
                  easy-to-use platform.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                mb="1rem"
                border='1px solid lightgray'
                borderRadius={'4px'}
                borderShadow='lg'
                py='6px'
              >
                <h2>
                  <AccordionButton>
                    <Box
                     ml="1rem"
                     flex="1"
                     textAlign="left"
                     fontWeight={'600'}
                     fontSize='15px'
                    >
                      Pricing Overview
                    </Box>
                   <AddIcon color="cyan.600" fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Free and premium plans that grow with you. Editions starting at:
                   - $0/month (Free) 
                   - $45/month (Starter) 
                   - $800/month (Professional) 
                   - $3,200/month (Enterprise)
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                 mb="1rem"
                 border='1px solid lightgray'
                 borderRadius={'4px'}
                 borderShadow='lg'
                 py='6px'
              >
                <h2>
                  <AccordionButton>
                    
                    <Box
                     ml="1rem"
                     flex="1"
                     textAlign="left"
                     fontWeight={'600'}
                     fontSize='15px'
                    >
                      Feature
                    </Box>
                   <AddIcon color="cyan.600" fontSize="16px" />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Attract visitors through blogging, social media, ads, and more. Convert visitors into customers with landing pages, email, marketing automation, ABM, and more. Track ROI with revenue attribution reporting. All powered by the customer data in your CRM to enable personalization at scale.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          {/* Second box End here (Upper two flex) */}
        </Flex>
        <Text fontWeight={'600'} color='gray.600'>TRUSTED BY</Text>
        <Box display={'flex'} gap='2rem' w='82%' m='auto'>
            <Img mt='7px' w='100px' h='25px' src={frontify} alt='logoIcon' />
            <Img w='100px' h='40px' src={Vmware} alt='logoIcon' />
            <Img w='100px' h='30px' src={Loom} alt='logoIcon' />
            <Img w='100px' h='40px' src={Monday} alt='logoIcon' />
            <Img w='100px' h='40px' src={Trello} alt='logoIcon' />
            <Img w='100px' h='40px' src={Momentive} alt='logoIcon' />
            <Img w='100px' h='40px' src={Reddit} alt='logoIcon' />
            <Img mt='10px' w='140px' h='20px' src={Soundcloud} alt='logoIcon' />
        </Box>
      </Box>
      {/* Box 1 white background end here */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MarketingHub;
