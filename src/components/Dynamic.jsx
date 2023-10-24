import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";

export const Dynamic = () => {
  const { DynamicItem, setDynamicItem } = useContext(Context);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://api.idea.uz/api/v2/products/6403/attributes`)
      .then((res) => console.log(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box>
      <Container
        maxW={{ sm: "550px", md: "750px", lg: "1116px", xl: "1576px" }}
      >
        <Image src={DynamicItem.img} />
        <Heading>chiqdi</Heading>
      </Container>
    </Box>
  );
};
