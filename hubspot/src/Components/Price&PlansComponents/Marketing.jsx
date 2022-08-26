import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Card from '../Card';
import CustomCards from './CustomCards';

export const Marketing = () => {
  const [link, setLink] = useState(false);
  return (
    <Flex direction={"column"}>
      <Flex justifyContent={"center"}>
        <Image src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/MarketingHub_Icon.svg"} />
        <Text color={"#33475B"} pl={"0.4em"} fontSize={"35px"} fontWeight={"600"}>Marketing Hub</Text>
        <Text>TM</Text>
      </Flex>
      <Box display={"flex"} justifyContent={"center"}>
        <Text pr={"3px"} fontSize={"12px"}>
          Everything you need to capture leads and turn them into customers.</Text>

        <Text onMouseLeave={() => setLink(false)}
          onMouseEnter={() => {
            setLink(true);

          }} as={!link ? "" : "u"} fontSize={"12px"} color={"#1F91AE"}>Calculate your price</Text>
        <ArrowDownIcon mt={"0.2em"} w={6} h={5} color={"#1F91AE"} />
      </Box>
      <Flex p={"1em"} bgColor={"#E5F5F8"} justifyContent={"center"}  alignSelf={"center"} w={"75%"} border={"1px solid black"}>
          <Text fontSize={"16px"} fontWeight={"700"}>
          On September 1st, the price of Marketing Hub Enterprise will increase to $3,600/month.</Text> 
          <Text mt={"6px"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>Buy now at the current price, and save.</Text> 
          <Button   fontSize={"10px"} borderRadius={"2px"} color={"white"} h={"2em"} bgColor={"#425B76"} >Talk to Sales</Button>
      </Flex>
      
      <Flex m={6}>
        <CustomCards headOne={"Starter"} 
        pOne="$45/mo" p2={"$600"} p3="$540" 
        desc1={"Essential marketing, sales, customer service, CMS, and operations software."} 
        tOne="Marketing Hub Starter" tTwo={"Starts at 1,000 marketing contacts"} tThree={"Sales Hub Starter"} 
        tFour="Starts at 2 paid users" tFive={"Service Hub Starter"} tSix="Starts at 2 paid users" 
        disp1={"block"} disp2="block" ml={"5%"} ml2="8%" ml4={"-7%"}
          gap2="5%" gap3={"5%"} />

        <CustomCards headOne={"Professional"} pOne="$1,600/mo" p2={"t $21,360"} p3="$19,200"
          desc1={"Advanced marketing, sales, customer service, CMS, and operations software."}
          tOne="Marketing Hub Professional" tTwo={"Starts at 2,000 marketing contacts"}
          tThree="Sales Hub Professional" tFour="Starts at 5 paid users" tFive={"Service Hub Professional"} tSix="Starts at 5 paid users" disp2={"block"} gap1="4%" gap2={"4%"}
          gap3="4%" ml3={"-13%"} ml4={"-15%"} />

        <CustomCards headOne={"Enterprise"} pOne="$5,000/mo" p3="$60,000" desc1={"Our marketing, sales, customer service, CMS, and operations software."} tOne="Marketing Hub Enterprise" tTwo={"Starts at 10,000 marketing contacts"} tThree="Sales Hub Enterprise" tFour={"Starts at 10 paid users"} tFive="Service Hub Enterprise" tSix={"Starts at 10 paid users"} disp2="block" gap1={"3%"} ml2="4%" gap2={"5%"} ml3="-6%"
          gap3={"5%"} ml4="-11%" />
      </Flex>
    </Flex>
  )
}
