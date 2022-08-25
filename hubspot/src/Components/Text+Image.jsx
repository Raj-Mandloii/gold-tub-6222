import { Box, Image, Text } from "@chakra-ui/react";

export default function TextPlusImage({src,text}){

    return(
        <Box mt={"2%"}>
            <Image src={src} m="auto" />
            <Text color={"rgb(51, 71, 91);"} fontWeight="light" >{text}</Text>
        </Box>
    )
}