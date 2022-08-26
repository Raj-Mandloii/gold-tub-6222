import {
  Box, Button, Flex, Text, Spacer, Image, chakra, textDecoration, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, CheckIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react'
import communiy from "../../Assets/community.png"
import collar from "../../Assets/collar.png"
import graph from "../../Assets/graph.png"
import svgfordiv from "../../Assets/svgfordiv.png"
import { useState } from 'react'
export default function FreeTools() {
  const [underline, setUnderline] = useState(false);
  const [link, setLink] = useState(false);
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

            border={"1px solid gray"} borderRadius={"3em"} p={7} mt={"2em"} mb={"2em"} pl={'7em'} pr={"7em"}>
            {/* ml={"42em"} mr={"42em"} */}
            <PhoneIcon mt={"0.1em"} mr={"0.6em"} w={3} h={3} color={"gray"} />
            <Text onMouseLeave={() => setUnderline(false)}
              onMouseEnter={() => {
                setUnderline(true);

              }} as={!underline ? "" : "u"} fontSize={"1.2em"} color={"#1F91AE"}>+91 11712-79211</Text>
          </Button>
        </Box>

      </Flex>

      {/* ----------------------      Frequently                     Asked                   Questions      -------------------------------        */}
      <Flex justifyContent={"center"} direction={"column"}>
        <Box pt={"2em"} bgSize={"contain"}
          h={"auto"}
          minH={"52em"}
          w={"100%"}
          backgroundPosition={"center"} bgRepeat={"no-repeat"}
          bgImage={"//static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/bottom-blob.svg"}>
          <Text mb={"1em"} color={"#33475B"} mt={["6em", "4em", "1em", "0.3em"]} fontWeight={"900"} fontSize={["21px", "25px", "28px", "30px"]} >Frequently Asked Questions</Text>
          <br />
          <Faq />

          <Box display={"flex"} justifyContent={"center"}>
            <Text pr={"3px"} fontSize={"12px"}>
              For more detailed information on product packaging and the limits that apply, please see our </Text>

            <Text onMouseLeave={() => setLink(false)}
              onMouseEnter={() => {
                setLink(true);

              }} as={!link ? "" : "u"} fontSize={"12px"} color={"#1F91AE"}>Product and Services Catalog.</Text>
            <ExternalLinkIcon mt={"0.2em"} w={3} h={3} color={"gray"} />
          </Box>

        </Box>
      </Flex>

      <Text mb={"1em"} color={"#33475B"} mt={["-6em", "-4em", "1em", "1em"]} fontWeight={"900"} fontSize={["21px", "25px", "28px", "30px"]} >
        Start growing today with HubSpot’s free tools.</Text>
      <Button sx={buttonStyle}>Get started free</Button>


    </Box>
  )
}



function Divs({ heading, array }) {
  return (
    // 
    <Flex direction={"column"} overflow={"hidden"} minH={["22em","22em","26em","26em"]} justifyContent={"space-evenly"}  m={4} w={["93%", "93%", "93%", "13%"]} border={"0.001px solid gray"} pb={"1em"} pt="10" pl={"1em"} pr={"0.3em"} rounded='md' bg='white'>
      <Text textAlign={"start"} fontWeight={"700"} pb="1em" fontSize={["16px", "16px", "16px", "16px"]}>{heading}</Text>
      {/*  */}
      <InsideText content={array[0]} />
      <InsideText content={array[1]} />
      <InsideText content={array[2]} />
      <InsideText content={array[3]} />
      <InsideText content={array[4]} />
      <hr style={{ color: "black", height: "1em" }} />
      <a style={{ color: "#1F91AE" }} href=''>See all features</a>
    </Flex>
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

function Faq() {
  const faqArray = [
    {
      title: "Are HubSpot's free tools are really free?",
      desc: `Yes! This is not a free trial. HubSpot’s free tools are 100% free — simple as that. 
    You can add 1,000,000 contacts, unlimited free users, and your free access has no time limit. 
    Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, 
    which could affect your Marketing Hub subscription’s contact tier pricing.`},
    {
      title: "What are the limits of free HubSpot account?",
      desc: `HubSpot’s free tools offer many “lite” versions of select tools featured in our paid products. 
    There are limits to your free HubSpot account, which differ by feature. Learn more about limits.
    `},
    {
      title: "Does HubSpot's free tools integrate with my email?",
      desc: `Yes, you can connect HubSpot’s free CRM tools to Gmail, G Suite, and many versions of Outlook.
    `},
    {
      title: "What is user, and how many can I have with my free HubSpot Account?",
      desc: `You can think of a user as any person who has access to use the HubSpot software. 
    You can always have unlimited free users, whether or not you decide to upgrade some users to a paid version of Sales Hub or Service Hub. That means even if you upgrade, you only need to pay for the users who need access to paid features — and your other free users will still remain free!

    Paid plans, however, include a set number of paid users that you can increase on a per-user basis.
    `},
    {
      title: "How many contact can I upload into my fee HubSpot account",
      desc: `You can add up to 1,000,000 contacts to your free HubSpot account. Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, which could affect your Marketing Hub subscription’s contact tier pricing.
    `},
    {
      title: "What type of support are available to free HubSpot users?",
      desc: `There are several types of support available to free HubSpot CRM users. HubSpot offers support for many languages including English, French, German, Japanese, and Portuguese. For the full list of languages HubSpot supports, view HubSpot’s language offering.

    Free HubSpot users can chat with fellow software users in HubSpot Community, sharpen their skills in HubSpot Academy, and get expert advice on HubSpot tools in the Knowledge Base.
    
    `},

  ]
  return (
    <Box w={["87%", "87%", "87%", "52%"]} m="auto">
      <Accordion allowToggle>
        {faqArray.map(item => (
          <AccordionItem
            py={["0em", "0em", "0em", "1rem"]}
            background="white"
            border="1px solid gray"
            mb="1rem"
          >
            <Text>
              <AccordionButton>
                <AccordionIcon color="cyan.600" fontSize="20px" />
                <Box
                  ml="1rem"
                  flex="1"
                  textAlign="left"
                  fontWeight="600"
                  fontSize="12px"
                >
                  {item.title}
                </Box>
              </AccordionButton>
            </Text>
            <AccordionPanel
              color="gray.600"
              mx="1.5rem"
              align="left"
              pb={4}
              fontSize={"12px"}
            >{item.desc}
            </AccordionPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </Box>
  )
}
