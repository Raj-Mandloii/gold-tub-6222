import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
const TestPage = () => {
  const auth = useSelector((store) => store.isAuth);
  return (
    <Stack alignItems={"center"}>
      <Box>{auth ? "True" : "False"}</Box>
    </Stack>
  );
};

export default TestPage;
