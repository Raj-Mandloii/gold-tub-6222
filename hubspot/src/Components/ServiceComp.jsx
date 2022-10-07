import { Box, Checkbox, Text } from "@chakra-ui/react";

export default function ServiceComp({header,price}){

    // Reviewed for: fw18_1070 and fw18_0133 - remove the sample text
    return(
        <Box>
            <Box border={"1px solid cyan"} width="50%" ml={"6%"} mt="3%" mb={"3%"} p="1% 0 1% 0">
                <Checkbox colorScheme='green'  textAlign={"left"} ml="3%">
                    {/* Reviewed for: fw18_0133 and fw18_1070 - follow consistency in code - how your are displaying header
 */}
                    <Text fontWeight={"semibold"}>{header}/mo</Text>
                     {/* Reviewed for: fw18_0133 and fw18_1070 - follow consistency in code - how your are displaying price
 */}
                    <Text fontWeight={"light"}>${price}</Text>
                    <Text fontWeight={"light"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad facere ipsam sunt itaque autem veritatis dignissimos eaque harum est</Text>
                </Checkbox>
            </Box>
        </Box>
    )
}
