import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import "./FrequentlyAskedQue.css"
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,} from '@chakra-ui/react'
import FaqComp from "./FaqComp"
import {FiExternalLink} from "react-icons/fi"
import { PhoneIcon } from "@chakra-ui/icons"


export default function FrequentlyAskedQue(){

    return(
        <Box className="faq"height={"100vh"} color={"rgb(51, 71, 91)"} width={"auto"}>
            <Text fontSize={"4xl"} fontWeight="bold">Frequently Asked Questions</Text>
            <FaqComp/>
            <Flex gap={"1%"} m="3% 0  1% 20%">
                <Text fontSize={"small"} fontWeight="light">For more detailed information on product packaging and the limits that apply, please see our </Text>
                <Text fontSize={"small"} fontWeight="semibold" color={"cyan.700"}> Product and Services Catalog. <Icon as={FiExternalLink} color="grey"/></Text>
            </Flex>
            <Flex mt={"13%"} gap="7%" ml={"10%"} alignItems="center">
                <Text fontSize={"3xl"} width="65%" textAlign={"left"} fontWeight="bold">
                    Still have questions about how HubSpot's software can help your business?
                </Text>
                <Text fontSize={"xl"} color="cyan.700">
                    
                  <PhoneIcon color={"rgb(51, 71, 91)"}/>  +91 11712-79211
                </Text>
            </Flex>
        </Box>
    )
}