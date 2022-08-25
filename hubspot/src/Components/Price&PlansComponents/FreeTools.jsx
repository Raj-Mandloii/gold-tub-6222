import { Box, Button, Flex, Text, Spacer, Image, chakra, textDecoration } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, CheckIcon } from '@chakra-ui/icons'
import React from 'react'
import communiy from "../../Assets/community.png"
import collar from "../../Assets/collar.png"
import graph from "../../Assets/graph.png"
import svgfordiv from "../../Assets/svgfordiv.png"
import { useState } from 'react'
export default function FreeTools() {
  const [underline, setUnderline] = useState(false);
  const data = [
    ["Forms", "Email marketing", "Ad management", "Landing pages", "Shared inbox"],
    ["Live chat", "Basic bots", "Team email", "Customizable quotes", "Email scheduling"],
    ["Ticketing", "Email scheduling", "Live chat", "Shared inbox", "Basic bots"],
    ["Drag-and-drop editor", "Mobile optimization", "Blog", "Standard SSL certificate", "Website pages"],
    ["Data sync", "Historical sync", "Default field mappings", "App Marketplace integrationss", "Contact management"],
  ]

  const headings = [
    "FREE MARKETING TOOLS:",
    "FREE SALES/CRM TOOLS:",
    "FREE SERVICE TOOLS:",
    "FREE CMS TOOLS:",
    "FREE OPERATIONS TOOLS:",
  ]
  const buttonStyle = {
    bgColor: "#FF7A59",
    color: "white",
    pl: "2em",
    pr: "2em",
    pt: "2em",
    pb: "2em",
    borderRadius: "2px"
  }
  return (
    <Box>
      <Flex justifyContent={"center"} direction={"column"}>
        <Text fontWeight={"600"} fontSize={["32px", "32px", "32px", "32px"]}>Start growing today with HubSpot’s free tools.</Text>
        <Text color={"gray"} pt={"1.4em"} fontWeight={"400"} marginTop={"0.8em"} marginBottom={"2em"} fontSize={["14px", "14px", "14px", "14px"]} >
          Get access to all of HubSpot's free marketing, sales, customer service, CMS, and operations tools.
        </Text>

      </Flex>
      <Button sx={buttonStyle}>Get started free</Button>
      <br />
      {/* ----------------------     FIVE    DIVS    BELOW    BUTTON    -------------------------------        */}
      <Flex alignItems={"center"} w={"100%"} justifyContent={"center"} direction={["column", "column", "column", "row"]}>
        <Divs heading={headings[0]} array={data[0]} />
        <Divs heading={headings[1]} array={data[1]} />
        <Divs heading={headings[2]} array={data[2]} />
        <Divs heading={headings[3]} array={data[3]} />
        <Divs heading={headings[4]} array={data[4]} />
      </Flex>
      {/* ----------------------     The            HubSpot           Guarantee     -------------------------------        */}

      <Flex justifyContent={"center"}>
        <Box p={5} bgSize={["400%", "400%", "400%", "100%"]}
          objectFit={"fill"} bgPosition="center" bgRepeat="no-repeat" w={"80%"} h={"auto"} bgImage={svgfordiv}>
          <Text mb={"3em"} color={"#33475B"} mt={"2.3em"} fontWeight={"900"} fontSize={["21px", "25px", "28px", "30px"]} >The HubSpot Guarantee</Text>

          <Flex justifyContent={"space-evenly"} position={["column", "column", "row", "row"]}>
            <Box></Box>
            <Box w={"20%"} textAlign={"center"}>
              <Image w={"4em"} style={{ display: "block", margin: "0 auto" }} src={communiy} />
              <Text fontWeight={"bold"}>Full Team Visibility</Text>
              <Text p={2}>Invite your entire team to collaborate in one place.</Text>
            </Box>
            <Box w={"20%"} textAlign={"center"}>
              <Image w={"4em"} style={{ display: "block", margin: "0 auto" }} src={collar} />
              <Text fontWeight={"bold"}>Free Access</Text>
              <Text p={2}>This isn't a trial. Your free access never expires.</Text>
            </Box>
            <Box w={"20%"} textAlign={"center"}>
              <Image w={"4em"} style={{ display: "block", margin: "0 auto" }} src={graph} />
              <Text fontWeight={"bold"}>All Your Data</Text>
              <Text p={2}>Store as many as one million contacts and companies.</Text>
            </Box>
            <Box></Box>
          </Flex>
          <br />
          <br />
          <Button sx={buttonStyle}>Get started free</Button>
          <br />
          <br />
        </Box>
      </Flex>

      {/* ----------------------       Give         us          a              call      -------------------------------        */}

      <Flex mt={"3em"} justifyContent={"center"} direction={"column"}>
        <Text fontWeight={"bold"}>Not sure which plan is right for you?</Text>
        <Text fontWeight={"bold"}>Give us a call.</Text>
        <Box display={"flex"} justifyContent={"center"}>
        <Button isActive colorScheme='white'
          
          border={"1px solid gray"} borderRadius={"3em"}  p={7} mt={"2em"} mb={"2em"} pl={'7em'} pr={"7em"}>
            {/* ml={"42em"} mr={"42em"} */}
          <PhoneIcon mt={"0.1em"} mr={"0.6em"} w={3} h={3} color={"gray"} />
          <Text onMouseLeave={() => setUnderline(false)}
            onMouseEnter={() => {
              setUnderline(true);

            }} as={!underline ? "" : "u"} fontSize={"1.2em"} color={"#1F91AE"}>+91 11712-79211</Text>
        </Button>
        </Box>

      </Flex>
    </Box>
  )
}



function Divs({ heading, array }) {
  return (
    <Box m={4} w={["93%", "93%", "93%", "13%"]} border={"0.001px solid gray"} pb={"1em"} pt="10" pl={"1em"} pr={"0.3em"} rounded='md' bg='white'>
      <Text textAlign={"start"} fontWeight={"700"} pb="1em" fontSize={["16px", "16px", "16px", "16px"]}>{heading}</Text>
      {/*  */}
      <InsideText content={array[0]} />
      <InsideText content={array[1]} />
      <InsideText content={array[2]} />
      <InsideText content={array[3]} />
      <InsideText content={array[4]} />
      <hr style={{ color: "black", height: "1em" }} />
      <a style={{ color: "#1F91AE" }} href=''>See all features</a>
    </Box>
  )


}

function InsideText({ content }) {
  const textStyle = {
    color: "gray",
    ml: "1em",
    fontWeight: "400",
    textAlign: "start",
    fontSize: ["14px", "12px", "12px", "14px"],
    pb: "2em"
  }
  return (
    <Flex direction={"row"} w={"100%"} >
      <CheckIcon color={"gray"} mt={"0.2em"} />
      <Text sx={textStyle}>{content}</Text>
    </Flex>
  )
}
