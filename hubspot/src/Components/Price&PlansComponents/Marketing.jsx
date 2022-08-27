import { ArrowDownIcon, CheckIcon, ExternalLinkIcon, Icon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./customStyle.css"
import CustomCards from './CustomCards';

export const Marketing = () => {
  const freeTools = [
    "Forms",
    "Email marketing",
    "Ad management",
    "Live chat",
    "Reporting dashboard"
  ]
  const starter = [
    { id: 1, name: 'MARKETING AUTOMATION', tasks: ['Form automation', 'Email automation'] },
    { id: 2, name: 'REMOVE HUBSPOT BRANDING FROM', tasks: ['Forms', 'Email marketing', 'Landing pages', 'Live chat'] },
    { id: 3, name: 'GET HELP FAST', tasks: ['Email and in-app chat support'] },
  ];

  const professional = [
    {
      id: 1, name: 'AUTOMATE & PERSONALIZE ENGAGEMENT ACROSS CHANNELS',
      tasks: ['Omni-channel marketing automation', 'ABM tools and automation', 'Dynamic personalization', 'Multi-language content', 'Social media', 'Video hosting & management', 'Contact and company scoring']
    },
    {
      id: 2, name: 'ORCHESTRATE EFFICIENT CAMPAIGNS',
      tasks: ['Collaboration tools', 'Campaign management', 'Teams']
    },

    {
      id: 3, name: 'OPTIMIZE CAMPAIGN CONVERSION',
      tasks: ['A/B testing', 'Ad conversion events', 'Contact create attribution']
    },
    {
      id: 3, name: 'BUILD CUSTOM REPORTS',
      tasks: ['Website traffic analytics', 'Campaign reporting', 'Custom reporting', 'Salesforce integration']
    },
    {
      id: 3, name: 'GET ADVANCED SUPPORT',
      tasks: ['Phone support']
    },
  ];
  const enterprise = [
    { id: 1, name: 'MARKETING AUTOMATION', tasks: ['Form automation', 'Email automation'] },
    { id: 2, name: 'REMOVE HUBSPOT BRANDING FROM', tasks: ['Forms', 'Email marketing', 'Landing pages', 'Live chat'] },
    { id: 3, name: 'GET HELP FAST', tasks: ['Email and in-app chat support'] },
  ];

  const trasformData = [
    "Unlock new revenue streams with more ways to collect payment",
    "Get paid faster with digital payments",
    "Give front office teams a 360-degree view of the customer",
    "Currently available in the U.S. only",
  ]


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
      <Flex p={"1em"} bgColor={"#E5F5F8"} justifyContent={"center"} alignSelf={"center"} w={"75%"} border={"1px solid black"}>
        <Text fontSize={"14px"} fontWeight={"700"}>
          On September 1st, the price of Marketing Hub Enterprise will increase to $3,600/month.</Text>
        <Text mt={"0.1em"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>Buy now at the current price, and save.</Text>
        <Button mt={"0.1em"} fontSize={"10px"} borderRadius={"2px"} color={"white"} h={"2em"} bgColor={"#425B76"} >Talk to Sales</Button>
      </Flex>
      {/* =====================   C       A   R   D  S     =================================== */}

      <Flex m={6} overflow="hidden" maxH={"95em"}>
        <CustomCards headOne={"Starter"} price={"$45/mo"} btnContent="Buy Now" defaultValue={1000}
          marketing1="Includes 1,000 marketing contacts. Additional marketing"
          marketing2="contacts are sold in increments of 1,000 from"
          marketing3="$45.00/month."
          belowBtnContent="Free tools with increased limits,"
          link={true}
          employees={starter}

        />
        <CustomCards headOne={"Professional"}
          price={"$890/mo"} btnContent="Talk to Sales" defaultValue={2000}
          marketing1="Includes 2,000 marketing contacts. Additional marketing"
          marketing2="contacts are sold in increments of 5,000 from"
          marketing3="$224.72/month."
          belowBtnContent={"Starter"}
          employees={professional}
        />

        <CustomCards headOne={"Enterprise"} price={"$3,200/mo"} btnContent="Talk to Sales" defaultValue={10000}
          marketing1="Includes 10,000 marketing contacts. Additional marketing"
          marketing2="contacts are sold in increments of 10,000 from"
          marketing3="$100.00/month."
          belowBtnContent={"Professional"}
          employees={enterprise}
        />
      </Flex>

      {/* ================== FREE    COMPONENTS     ======================= */}
      <Flex p={"1em"} direction="column" alignSelf={"center"} w={"75%"} border={"3px solid #F5F8FA"}>
        <Flex m={6} justifyContent={"space-between"}>
          <Text fontSize={"18px"} >Free Tools</Text>
          <Button p={4} border="1px solid #FF7A59" mt={"0.1em"} fontWeight={"300"} fontSize={"13px"} borderRadius={"2px"} color={"#FF7A59"} h={"2em"} bgColor={"white"} >Get started free</Button>
        </Flex>
        <hr />
        <Flex>
        {
          freeTools.map(item=>(
            <Box mt={4} display={"flex"}>
               <CheckIcon ml={8}  color={"gray"} mt={"0.2em"} />
              <Text textAlign={"start"} mt={"0.1em"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>{item}</Text>
            </Box>
          ))
        }
        <Text fontWeight={"600"} className='underline' textAlign={"start"} mt={"1.3em"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>See all features</Text>
        </Flex>
       </Flex>
       <Text mt={10} color={"#33475B"} pl={"0.4em"} fontSize={"30px"} fontWeight={"800"}>Recommended Bundles</Text>

       {/*  ===================               S T A R T E R    C R M     S U I T E S */}

       <Flex direction={"column"} alignSelf={"center"} w={"75%"} boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
       <Flex  mt={6} p={8} >
          <Flex  w={"70%"} textAlign={"start"} direction={"column"}>
            <Text ml={2}  fontSize={"md"} fontWeight={"bold"}>Starter CRM Suite</Text>
            <Text ml={2} mt={2} color={"#425B76"} fontSize={"xs"}>Our Starter CRM Suite includes all the marketing, 
              sales, content management, operations, and customer </Text>
             <Text m={2} color={"#425B76"} fontSize={"xs"}>service tools your growing business needs.<span className='underline'>See bundled pricing details</span></Text> 
            <MediumDark content={"Ideal for:"}/>
            <CheckIconWithText content={"Creating content and generating leads"}/>
            <CheckIconWithText content={"Streamlining your outreach, connecting with prospects, and tracking and improving performance"}/>
            <CheckIconWithText content={"Organizing and tracking customer communications, maximizing productivity, and measuring efficiency"}/>
          </Flex>
          <Flex  w={"25%"} direction={"column"}>
          <Text fontSize={"xs"} color={"#425B76"} fontWeight={"light"} >start at</Text>
                <Text fontSize={"lg"} color="rgb(51, 71, 91)" fontWeight={"600"} >$50/mo</Text>
                <Text  fontSize={"xs"} color={"#425B76"} fontWeight={"light"} >billed monthly</Text>
                <Box>
              {/*  **********************    SWITCH      ********************* */}
                <Flex  height={"50px"} bgColor={"gray.300"} m="auto" mt={"4%"}
                    borderRadius={"25px"}>
                    <Box  width={"52%"}   backgroundColor="white" border={"1px solid teal"} borderRadius={"25px"}>
                        <Text  fontSize={"xs"} fontWeight={"semibold"} color="rgb(51, 71, 91)" mt={"4%"}>Pay Upfront</Text>
                        <Text color="rgb(51, 71, 91)" fontSize={"10px"} fontWeight="light">Commit Annually</Text>
                    </Box>
                    <Box ml="5%" width={"52%"} >
                        <Text fontSize={"xs"} fontWeight={"semibold"} color="rgb(51, 71, 91)" mt={"5%"}>Pay Monthly</Text>
                        <Text color="rgb(51, 71, 91)" fontSize={"10px"} fontWeight="light">Commit Annually</Text>
                    </Box>
                </Flex>
                <OrangeButton btnContent={"Buy now"} bgColor={"#ff7a59"} color="white" border={"2px"}/>
                <OrangeButton btnContent={"See all features"} bgColor={"white"} color="#00AFB2" border={"0px"}/>
            </Box>
          </Flex>
       </Flex>
        <MediumDark content={"Includes free tools, plus:"} ml={10}/>
        {/*   ICONS WITH TEXT  */}
        <Flex>
        <IconWithText src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/MarketingHub_Icon.svg"}
        content="Marketing Hub Starter" varticleBar={"|"}
        />
        <IconWithText src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/CMSHub_Icon.svg"}
        content="CMS Hub Starter" varticleBar={"|"}
        />
        <IconWithText src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/SalesHub_Icon.svg"}
        content="Sales Hub Starter" varticleBar={"|"}
        />
        <IconWithText src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/ServiceHub_Icon.svg"}
        content="Service Hub Starter" varticleBar={"|"}
        />
        <IconWithText src={"https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/OperationsHub_Icon.svg"}
        content="Operations Hub Starter"
        />
        </Flex>
      <Flex>

        </Flex>
       </Flex>

       {/*        -----------------------     Not sure which plan is right for you?     --------------------------- */}

       <Flex mt={"3em"} direction={"column"} alignSelf={"center"} justifyContent={"center"}>
        <MediumDark textAlign={"center"} content={"Not sure which plan is right for you?"}/>
        <MediumDark textAlign={"center"} content={"Give us a call."}/>
        <Box display={"flex"} justifyContent={"center"}>
          <Button isActive colorScheme='white'

            border={"1px solid gray"} borderRadius={"3em"} p={7} mt={"2em"} mb={"2em"} pl={'7em'} pr={"7em"}>
            {/* ml={"42em"} mr={"42em"} */}
            <PhoneIcon mt={"0.1em"} mr={"0.6em"} w={3} h={3} color={"gray"} />
            <Text className='underline' fontSize={"1.2em"} color={"#1F91AE"}>+91 11712-79211</Text>
          </Button>
        </Box>
       </Flex>

       {/* --------------------  FLEX WITH IMAGE ------------------ */}
       <Flex  w={"75%"} alignSelf={"center"} justifyContent="space-evenly">
          <Image ml={10} w={"33em"} src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/peopleBlobs/payments-smiling-person.png'/>
          <Flex direction={"column"} justifyContent="center">
              <Text fontSize={"1.1em"} fontWeight="bold">Transform your customers’ buying experience with built-in </Text>
              <Text mb={"2em"} textAlign={"start"} fontSize={"1.1em"} fontWeight="bold">payments powered by the CRM.</Text>
              <ul style={{textAlign:"start",color:"#425B76",fontSize:"13px",marginLeft:"1em"}}>
              {trasformData.map(item=>(
                <li>{item}</li>
              ))}
              </ul>
              <Button w={"10em"} p={4}  mt={"2em"} fontWeight={"300"} fontSize={"13px"} borderRadius={"2px"} 
              color={"white"} h={"2em"} bgColor={"#425B76"} >Learn more<Icon  ml={1} as={ExternalLinkIcon} /></Button>
          </Flex>
       </Flex>
    </Flex>
  )
}




function CheckIconWithText({content}){

  return (
    <Box mt={1} display={"flex"}>
    <CheckIcon ml={2}  color={"gray"} mt={"0.2em"} />
    {/* <Icon  ml={2} as={MdSettings} /> */}
     <Text color={"#425B76"} textAlign={"start"} mt={"0.0em"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>{content}</Text>
    
 </Box>
  )
}

function IconWithText({content,src,varticleBar}){

  return (
    <Box ml={"1.5em"} mt={1} mb={"2em"} display={"flex"}>
    <Image w={"1em"} src={src}/>
     <Text color={"#425B76"} textAlign={"start"} mt={"0.2em"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>{content}</Text>
     <Text ml={"1.5em"}  color={"#33475B"}>{varticleBar}</Text>
     {/* {"|"} */}

 </Box>
  )
}
function MediumDark({content,ml,textAlign}){

  return (
    <Text textAlign={!textAlign ? "start" : textAlign} m={2} ml={ml} fontSize={"sm"} fontWeight={"bold"}>{content}</Text>
  )
}

function OrangeButton({btnContent,color,bgColor,border}){
  return (
    <Button border={border} fontWeight={400} fontSize={"sm"}  backgroundColor={bgColor} color={color} width={"100%"} height="50px" mt="5%">{btnContent}</Button>
  )
}