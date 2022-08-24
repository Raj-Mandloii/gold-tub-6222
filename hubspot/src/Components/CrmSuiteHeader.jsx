import { Box, Text } from "@chakra-ui/react";

export default function CrmSuiteHeader(){

    return(
        <Box>
            <Box>
                <Text fontSize={"4xl"} fontWeight={"semibold"} color="rgb(51, 71, 91);">CRM Suite</Text>
                <Text fontWeight={"light"} color="rgb(51, 71, 91);">Includes free tools, plus:</Text>
            </Box>
        </Box>
    )
}