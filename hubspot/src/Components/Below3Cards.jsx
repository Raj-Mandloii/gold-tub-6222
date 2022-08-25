import { Box, Flex, Text } from "@chakra-ui/layout"
import {PhoneIcon} from "@chakra-ui/icons"
import { Image } from "@chakra-ui/image"
import {List,ListItem,ListIcon,OrderedList,UnorderedList, Button, Icon, } from '@chakra-ui/react'
import {FiExternalLink} from "react-icons/fi"

export default function BelowThreeCards(){

    return(
            <Box color={"rgb(51, 71, 91)"}>
                <Box border={"1px solid red"} >
                    <Text fontSize={"large"} fontWeight="semibold">Not sure which plan is right for you?</Text>
                    <Text>Give us a call.</Text>
                    <Flex border={"1px solid grey"} width="35%" height={"60px"} borderRadius="25px" m={"auto"} justify="center" alignItems={"center"} gap="3%">
                        <PhoneIcon/>
                        <Text fontSize={"larger"} color="cyan.700" fontWeight={"semibold"}>+91 11712-79211</Text>
                    </Flex>
                </Box>
                <Flex m="5% 0 2% 2%">
                    <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13794/js/img/peopleBlobs/payments-smiling-person.png" 
                    width="50%" height={"40%"}/>
                    <Box>
                        <Box width="110%">
                        <Text fontSize={"larger"} fontWeight="semibold">Transform your customers’ buying experience with built-in</Text>
                        <Text  ml={"5%"} fontSize={"larger"} fontWeight="semibold" textAlign={"left"}>payments powered by the CRM.</Text>
                        </Box>
                        <Box m="15% 0 0 5%" >
                            <UnorderedList  width="100%">
                            <ListItem textAlign={"left"}><Text>Unlock new revenue streams with more ways to collect payment</Text></ListItem>
                            <ListItem textAlign={"left"}>Get paid faster with digital payments</ListItem>
                            <ListItem textAlign={"left"}>Give front office teams a 360-degree view of the customer</ListItem>
                            <ListItem textAlign="left">Currently available in the U.S. only</ListItem>
                            </UnorderedList>
                        </Box> 
                        <Button size={"md"} padding="21px" m={"13% 65% 0 0"} bgColor=" #425b76" color={"#fff"}>Learn more <Icon as={FiExternalLink}/></Button>   
                    </Box>
                </Flex>
            </Box>
    )
}