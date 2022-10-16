import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpLogo from "../Assets/LoginLogo.svg";
// import axios from "axios";
const SignUp = () => {
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    const payload = {
      firstname,
      lastname,
      email,
      password,
    };
    // console.log(JSON.stringify(payload));
    // const url="http://localhost:8700/user/signup"
    const deployedUrl="https://hubspotbackend-production.up.railway.app/user/signup"
    fetch(deployedUrl, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) =>
        res.msg === "Email already exists"
          ? toast({
              position: "bottom-right",
              title: "Email already exists",
              status: "info",
              duration: 3000,
              isClosable: true,
            })
          :toast({
            position: "bottom-right",
            title: "SignUp successful",
            status: "info",
            duration: 3000,
            isClosable: true,
          }), 
          navigate("/login")
      );
  };
  const gotoHome = () => {
    navigate("/login");
  };
  return (
    <VStack>
      <Flex
        justifyContent={"space-between"}
        gap={[10, 20, "20rem", "52rem"]}
        p={[2, 4]}
        alignItems="center"
      >
        <Box>
          <Image
            onClick={gotoHome}
            cursor={'pointer'}
            src={SignUpLogo}
            width={["100px", "100px", "120px", "180px"]}
          />
        </Box>
        <Box fontSize={["12px", "16px",'18px']}>
          Have an account?{" "}
          <Link to="/login" style={{ color: "#0091AE" }}>
            Sign in
          </Link>
        </Box>
      </Flex>
      <Text fontSize={["2xl", "2xl", "5xl"]} fontWeight={[300, 600]} p={[2, 0]}>
        Create your free account
      </Text>
      <form>
        <VStack alignItems="flex-start" py={[0, 15]}>
          <Flex flexDir={["column", "row"]} gap={[2, 7]} my="2">
            <FormControl>
              <FormLabel fontSize={["14px", "18px"]} fontWeight="500">
                First name
              </FormLabel>
              <Input
                variant={"flushed"}
                type="text"
                placeholder="Enter Firstname"
                required={true}
                onChange={(e) => setFName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={["14px", "18px"]} fontWeight="500">
                Last name
              </FormLabel>
              <Input
                variant={"flushed"}
                type="text"
                placeholder="Enter Lastname"
                required={true}
                onChange={(e) => setLName(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Box my="2">
            <FormControl isRequired>
              <FormLabel fontSize={["14px", "18px"]} fontWeight="500">
                E-mail
              </FormLabel>
              <Input
                type={"email"}
                variant="flushed"
                placeholder="Enter E-Mail"
                required={true}
                w={["auto", "210%"]}
                onChange={(e) => setEMail(e.target.value)}
              />
            </FormControl>
          </Box>
          <Box my="2">
            <FormControl isRequired>
              <FormLabel fontSize={["14px", "18px"]} fontWeight="500">
                Password
              </FormLabel>
              <Input
                type={"password"}
                variant="flushed"
                placeholder="Password"
                required={true}
                w={["auto", "210%"]}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Box>
        </VStack>
        <Box my="2">
          <FormControl>
            <Button
              w="100%"
              color={"white"}
              bgColor="#FF7A59"
              fontWeight={400}
              onClick={handleSubmit}
              _hover={{
                color: "white",
                backgroundColor: "#FF7A59",
              }}
              disabled={
                firstname === "" ||
                lastname === "" ||
                email === "" ||
                password === ""
              }
            >
              Sign Up
            </Button>
          </FormControl>
        </Box>
      </form>
    </VStack>
  );
};

export default SignUp;
