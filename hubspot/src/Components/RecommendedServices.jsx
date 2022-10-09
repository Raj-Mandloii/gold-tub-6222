import { Box, Text } from "@chakra-ui/react"
import ServiceComp from "./ServiceComp"

export default function ReacommendedServices(){

    return(
        <Box color="#33475b">
                <Box  width="60%" ml={["0","6%","6%"]}>
                    <Text fontSize={["xl","2xl","4xl"]} fontWeight="bold" textAlign={"left"}>Recommeded Services</Text>
                    <Text fontSize={["x-small","small","small"]} fontWeight={"light"} textAlign="left" m={"2% 0 2$ 0"}>Upgrade your plan with these premium services for expert help and guidance.</Text>
                </Box>
                <ServiceComp header={"Inbound Consulting: Monthly"} price="450.00"/>
                <ServiceComp header={"Inbound Consulting: Ongoing"} price="1,100.00"/>
                <ServiceComp header={"Technical Consulting: Ongoing"} price="1,100" />
                <ServiceComp header={"Premium Consulting"} price="1,900.00" />
                <ServiceComp header={"Onboarding Foundations"} price="350.00" />
                <ServiceComp header={"Inbound Consulting: Standard"} price="1,500.00" />
                <ServiceComp header={"Inbound Consulting: Advanced"} price="3,000.00" />
                <ServiceComp header={"Inbound Consulting: Premium"} price="4,500" />
                <ServiceComp header={"Technical Consulting: Standard"} price="1,500.00" />
                <ServiceComp header={"Technical Consulting: Advanced"} price="3,000.00" />
                <ServiceComp header={"Technical Consulting: Premium"} price="4,500.00" />
                <ServiceComp header={"Marketing Fundamentals Training"} price="1,000.00" />
                
                
                
        </Box>
    )
}