import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Flex,Text,Image } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Marketing = () => {
    const [link, setLink] = useState(false);
  return (
    <Flex direction={"column"}>
        <Flex justifyContent={"center"}>
        <Image src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/MarketingHub_Icon.svg"}/>
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

    </Flex>
  )
}
