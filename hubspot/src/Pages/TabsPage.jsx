import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Flex} from '@chakra-ui/react'
import BelowThreeCards from '../Components/Below3Cards'
import BelowHeader from '../Components/BelowHeader'
import CABAfterHeader from '../Components/CABAfterHeader'
import CalculateYourPrice from '../Components/CalculateYourPrice'
import Card from '../Components/Card'
import CreateABundleHeader from '../Components/CreateABundleHeader'
import CrmSuiteHeader from '../Components/CrmSuiteHeader'
import CustomerSupport from '../Components/CustomerSupport'
import Footer from '../Components/Footer'
import FrequentlyAskedQue from '../Components/FrequentlyAskedQue'
import ReacommendedServices from '../Components/RecommendedServices'
import "./TabsPage.css"

export default function TabPage(){

    return(
        <Box>
        <Tabs>
            
            <Box className="tabNav"  width="200vh" ml={"2%"} bgColor="white" >
            <TabList   height={"80px"} >
                <Flex w="18%"   m="auto" justifyContent={"space-evenly"}>

                <Box >
                <Tab className='tab' type='cyan'>CRM Suite</Tab>
                </Box>

                <Box  >
                <Tab className='tab' type='cyan'>Create a Bundle</Tab>
                </Box>

                </Flex>
            
            
            </TabList>
            </Box>
            <TabPanels>
                <TabPanel>
                    {/* <Text fontSize={"xl"}>Tab One</Text> */}
                    <Box bgColor={"rgb(245, 248, 250);"} height="50vh">
                    <CrmSuiteHeader />
                    <BelowHeader/>
                    </Box>
                    <Flex>
                    <Card headOne={"Starter"} pOne="$45/mo" p2={"$600"} p3="$540" desc1={"Essential marketing, sales, customer service, CMS, and operations software."} tOne="Marketing Hub Starter" tTwo={"Starts at 1,000 marketing contacts"} tThree={"Sales Hub Starter"} tFour="Starts at 2 paid users" tFive={"Service Hub Starter"} tSix="Starts at 2 paid users" disp1={"block"} disp2="block" ml={"5%"} ml2="8%" ml4={"-7%"} 
                    gap2="5%" gap3={"5%"}/>

                    <Card headOne={"Professional"} pOne="$1,600/mo" p2={"t $21,360"} p3="$19,200"
                    desc1={"Advanced marketing, sales, customer service, CMS, and operations software."}
                    tOne="Marketing Hub Professional" tTwo={"Starts at 2,000 marketing contacts"}
                    tThree="Sales Hub Professional" tFour="Starts at 5 paid users" tFive={"Service Hub Professional"} tSix="Starts at 5 paid users" disp2={"block"} gap1="4%" gap2={"4%"}
                    gap3="4%" ml3={"-13%"} ml4={"-15%"}/>

                    <Card headOne={"Enterprise"} pOne="$5,000/mo"  p3="$60,000" desc1={"Our marketing, sales, customer service, CMS, and operations software."} tOne="Marketing Hub Enterprise" tTwo={"Starts at 10,000 marketing contacts"} tThree="Sales Hub Enterprise" tFour={"Starts at 10 paid users"} tFive="Service Hub Enterprise" tSix={"Starts at 10 paid users"} disp2="block" gap1={"3%"} ml2="4%" gap2={"5%"} ml3="-6%"
                     gap3={"5%"} ml4="-11%"/>
                    </Flex>
                    <BelowThreeCards/>
                    <CalculateYourPrice/>
                    <CustomerSupport/>
                    <FrequentlyAskedQue/>
                    
                </TabPanel>
                <TabPanel>
                    {/* <Text fontSize={"xl"}>Tab Two</Text> */}
                    <Box  height="25vh">
                        <CreateABundleHeader/>
                        <CABAfterHeader/>
                    </Box>

                    <ReacommendedServices/>
                   

                </TabPanel>
            </TabPanels>
        </Tabs>
            <Footer/>
        </Box>
    )

}