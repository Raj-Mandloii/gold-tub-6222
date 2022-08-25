import { Box, Button, Flex, Text } from "@chakra-ui/react";

import Includes from "./Includes";

export default function Card({disp1,disp2,headOne,pOne,p2,p3,desc1,tOne,tTwo,tThree,tFour,tFive,tSix,ml,ml2,ml3,ml4,gap1,gap2,gap3}){

    return(
        <Box border={"1px solid lightgrey"} width="30%" padding={"0.3% 0.3% 0% 0.3%"} ml={ml}>
            {/* Top Section */}
          <Flex justify={"space-between"} alignItems="center">
            <Text fontSize={"2xl"} color="rgb(51, 71, 91)" ml={"2%"} >{headOne}</Text>
            <Box textAlign={"right"} m="0 2% 0 0">
                <Text fontSize={"sm"} color="rgb(51, 71, 91)">Starts at</Text>
                <Text fontSize={"large"} fontWeight="semibold" color="rgb(51, 71, 91)" >{pOne}</Text>

                <Flex  width="110%" mr="25%" gap={"3%"} fontSize={"smaller"} fontWeight="light"><Text  color="rgb(51, 71, 91)" >billed </Text><Text  textDecoration={"line-through"}>{p2}</Text><Text  fontWeight={"bold"}>{p3}/yr</Text></Flex>
            </Box>
          </Flex>    
          <Box>
            <Text color="rgb(51, 71, 91)" fontWeight={"light"} >{desc1}</Text>
          </Box>
          <Box>
            <Flex width="75%" height={"50px"} bgColor={"gray.300"} m="auto" mt={"4%"}
             borderRadius={"25px"}>
                <Box  ml="5%" width={"52%"} >
                <Text fontSize={"sm"} fontWeight={"semibold"} color="rgb(51, 71, 91)" mt={"5%"}>Pay Monthly</Text>
                <Text color="rgb(51, 71, 91)" fontSize={"small"} fontWeight="light">Commit Annually</Text>
                </Box>
                <Box width="65%" ml={"15%"} backgroundColor="white" border={"1px solid teal"}  borderRadius={"25px"}>
                <Text fontSize={"sm"} fontWeight={"semibold"} color="rgb(51, 71, 91)" mt={"4%"}>Pay Upfront</Text>
                <Text color="rgb(51, 71, 91)" fontSize={"small"} fontWeight="light">Commit Annually</Text>
                </Box>
            </Flex>
          </Box>
          <Button backgroundColor={"#ff7a59"} color="white" width={"80%"} height="55px" mt="5%">Buy Now</Button>
          <Box mt={"5%"}>
            <Text fontWeight={"semibold"} textAlign={"left"} ml="10%">Includes:</Text>
            <Box>
                <Includes src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/MarketingHub_Icon.svg"}
                tOne={tOne} tTwo={tTwo} ml={ml2} gap={gap1} />

                <Includes src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/SalesHub_Icon.svg"} tOne={tThree} tTwo={tFour} 
                gap={gap2} ml={ml3}/>

                <Includes src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/ServiceHub_Icon.svg"} tOne={tFive} tTwo={tSix}
                gap={gap3} ml={ml4}/>

                <Includes src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/CMSHub_Icon.svg"} tOne="CMS Hub Starter" gap={"4%"} disp={disp1} />

                <Includes src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/OperationsHub_Icon.svg"} tOne="Operations Hub Starter" gap={"4%"} disp={disp2}/>
            </Box>
          </Box>
          <Box borderTop={"1px solid  lightgray"} height="50px" width={"100%"} textAlign="center"><Text mt={"3%"} color="cyan.700">See all features</Text></Box>
          <Box borderTop={"1px solid lightgray"} height="50px" width={"100%"} textAlign="center"><Text mt={"3%"} color="cyan.700">Calculate your price</Text></Box>
        </Box>
    )
}