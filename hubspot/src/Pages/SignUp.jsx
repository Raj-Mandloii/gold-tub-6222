import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SignUpLogo from "../Assets/LoginLogo.svg";

const SignUp = () => {
  return (
    <VStack>
      <Flex justifyContent={"space-between"} gap='40rem' p={[1,1,2,4]} alignItems="center">
        <Box>
          <Image src={SignUpLogo} />
        </Box>
        <Box>
          Have an account?
          <Link to="/login" style={{ color: "#0091AE" }}>
            Sign in
          </Link>
        </Box>
      </Flex>
    </VStack>
  );
};

export default SignUp;
