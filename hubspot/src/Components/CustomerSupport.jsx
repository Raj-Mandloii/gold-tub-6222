import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import {TiDocumentText} from "react-icons/ti"
import {IoMdPeople} from "react-icons/io"

export default function CustomerSupport(){

    return(
        <Flex  color={"rgb(51, 71, 91)"} gap="10%" mt={"5%"} mb="2%">
            <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/peopleBlobs/gyasi.jpg" width={"280px"} height="337px" />
            <Box >
                <Box  textAlign="left">
                    <Text fontSize={"small"} >CUSTOMER SUPPORT</Text>
                    <Text fontSize={"4xl"} fontWeight="bold" >HubSpot is more than just software.</Text>
                    <Text fontWeight={"light"} mt="5%">You don’t have to do it alone. HubSpot’s award-winning customer support and services teams are here to answer your questions, help you master the inbound methodology, and make sure you’re getting the most out of your tools. All that — plus our detailed help documentation, educational resources, and training programs — means you’ll never feel left out in the cold.</Text>
                </Box>
                <Flex justifyContent={"space-around"}>
                    <Box  mt="3%" height={"70px"}>
                        <Text fontWeight={"semibold"}>Phone & Email Support</Text>
                        <PhoneIcon color={"gray.400"} fontSize="xl" mt={"10%"}/>
                    </Box>
                    <Box  mt="3%" height={"70px"}>
                        <Text fontWeight={"semibold"}>Help Documentation & Training</Text>
                        <Icon as={TiDocumentText} color="grey" fontSize={"3xl"} mt="4%"/>
                    </Box>
                    <Box  mt="3%" height={"70px"}>
                        <Text fontWeight={"semibold"}>Community Support</Text>
                        <Icon as={IoMdPeople} fontSize="3xl" color={"grey"} mt="5%"/>
                    </Box>
                    
                </Flex>
            </Box>
        </Flex>
    )
}