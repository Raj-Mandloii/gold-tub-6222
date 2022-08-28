import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import CRARightSideComp from "./CRARightSideComp";

export default function CABAfterHeader(){

    return(
        <Flex color="#33475b">
            <Box>
                <Flex border={"1px solid black"} width="110%" ml={"10%"} alignItems="center">
                    <Box border={"1px solid red"} width="100%">
                        <Text fontSize={"4xl"} fontWeight="bold" textAlign={"left"}>Marketing Hub</Text>
                        <Text fontSize={"small"} fontWeight={"light"} textAlign="left" m={"2% 0 2$ 0"}>Everything you need to capture leads and turn them into customers.</Text>
                    </Box>
                    <Text fontWeight={"semibold"} color={"cyan.700"} width="40%">See all features</Text>
                </Flex>
                <Flex ml={"10%"} border="1px solid teal" width={"110%"}>
                   <Box width={"38%"} height="90px" border={"2px solid cyan"} bgColor="cyan.100"
                        >
                            <Flex justifyContent={"center"}  gap="2%">
                                <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Starter.svg" mt={"5%"}/>
                                <Text mt={"5%"}>Starter</Text>
                            </Flex>
                            <Text>$50/month</Text>
                    </Box>
                    <Box className="pricebox" width={"38%"} height="90px" border={"1px solid cyan"} >
                            <Flex justifyContent={"center"}  gap="2%">
                                <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Pro.svg" mt={"5%"}/>
                                <Text mt={"5%"}>Professional</Text>
                            </Flex>
                            <Text>$890/month</Text>
                    </Box>
                    <Box className="pricebox" width={"38%"} height="90px" border={"1px solid cyan"}>
                            <Flex justifyContent={"center"} gap="2%">
                                <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Ent.svg" mt={"5%"}/>
                                <Text mt={"5%"}>Enterprise</Text>
                            </Flex>
                            <Text>$3,200/month</Text>
                    </Box>
                </Flex>
                    <Box m="5% 0 5% 10%" width={"110%"}>
                        <Divider width={"100%"} borderColor={"1px solid grey"} />
                    </Box>
                <Flex border={"1px solid red"} ml="10%" width={"110%"} justifyContent="space-between" alignItems={"center"}>
                    <Box>
                        <Text fontSize={"large"} fontWeight="semibold" textAlign={"left"} mb="5%">Marketing Contacts</Text>
                        <Text fontWeight={"light"}>Includes 1,000 marketing contacts. Additional marketing contacts are sold in</Text>
                        <Flex>
                        <Text fontWeight={"light"}>increments of 1,000 from $50.00/month.</Text>
                        <Text fontWeight={"semibold"} color="cyan.700">More details.</Text>
                        </Flex>
                    </Box>
                    <Button variant={"outline"} size="lg" border="1px solid grey">1,000</Button>
                </Flex>
                <Slider aria-label='slider-ex-2' colorScheme='gray' defaultValue={30} width="110%"
                    ml={"10%"} mt="3%">
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>   
                    <Flex justifyContent={"space-between"} width="110%" ml={"10%"}mb="3%" fontWeight="light">
                        <Text>1,000</Text>
                        <Text>10,000</Text>
                    </Flex>
                    <Box border="1px solid lightgrey" height="70px" width={"110%"} ml={"10%"}>
                        <Text fontWeight={"semibold"}  mt="3%" >
                        All non-marketing contacts are free, up to a limit of 15 million overall contacts.
                        </Text>
                        <Text fontWeight={"light"}>Only pay for the contacts you want to market to.</Text>
                    </Box>
                    <Flex border={"1px solid black"} width="110%" ml={"10%"} alignItems="center">
                    <Box border={"1px solid red"} width="100%">
                        <Text fontSize={"4xl"} fontWeight="bold" textAlign={"left"}>Sales Hub</Text>
                        <Text fontSize={"small"} fontWeight={"light"} textAlign="left" m={"2% 0 2$ 0"}>Everything you need to close more deals, fast.</Text>
                    </Box>
                    <Text fontWeight={"semibold"} color={"cyan.700"} width="40%">See all features</Text>
                </Flex>
                <Flex ml={"10%"} border="1px solid teal" width={"110%"}>
                   <Box width={"38%"} height="90px" border={"2px solid cyan"} bgColor="cyan.100"
                        >
                            <Flex justifyContent={"center"}  gap="2%">
                                <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Starter.svg" mt={"5%"}/>
                                <Text mt={"5%"}>Starter</Text>
                            </Flex>
                            <Text>$50/month</Text>
                    </Box>
                    <Box className="pricebox" width={"38%"} height="90px" border={"1px solid cyan"} >
                            <Flex justifyContent={"center"}  gap="2%">
                                <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Pro.svg" mt={"5%"}/>
                                <Text mt={"5%"}>Professional</Text>
                            </Flex>
                            <Text>$890/month</Text>
                    </Box>
                    <Box className="pricebox" width={"38%"} height="90px" border={"1px solid cyan"}>
                            <Flex justifyContent={"center"} gap="2%">
                                <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Ent.svg" mt={"5%"}/>
                                <Text mt={"5%"}>Enterprise</Text>
                            </Flex>
                            <Text>$3,200/month</Text>
                    </Box>
                </Flex>
                <Box m="5% 0 5% 10%" width={"110%"}>
                        <Divider width={"100%"} borderColor={"1px solid grey"} />
                </Box>
                <Flex ml={"7%"}>
                     <Box>   
                    <Text fontSize={"large"} fontWeight={"semibold"} textAlign="left" ml={"4%"}>
                        Sales Hub users
                    </Text>
                    <Text fontSize={"small"} fontWeight={"light"} width="80%" textAlign={"left"} ml="4%">
                    Choose how many users can access the Sales Hub Starter features. 2 paid users included. $25/month per additional user.
                    </Text>
                    </Box>
                    <Flex border={"1px solid lightgrey"} width="110px" height={"45px"} borderTopRightRadius="7px" justify={"space-between"} borderBottomRightRadius="7px">
                        <Text m="5% 0 0 15%">2</Text>
                        <Flex direction={"column"} >
                        <Button width={"25px"} height="22px" borderBottomRightRadius={"none"} border="1px solid lightgrey"><ChevronUpIcon color={"cyan.700"}/></Button>
                        <Button width={"25px"} height="22px" borderTopRightRadius={"none"} border="1px solid lightgrey"><ChevronDownIcon color={"grey"}/></Button>
                        </Flex>
                    </Flex>
                    </Flex>
            </Box>
            <CRARightSideComp/>
        </Flex>
    )

}