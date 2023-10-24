import { TimeIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/image/Aksiya__img1.webp'
import img2 from '../assets/image/Aksiya__img2.webp'

export const Aksiya = () => {
  return (
    <Box background={"#f2f3f5"}>
      <Container maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
        <Box  py={6 } alignItems={"center"} display={"flex"}>
          <Link to={"/"} style={{ fontSize: "14px" }}>
            Bosh sahifa 
          </Link>
          <Heading color={"#DD1470"} fontWeight={"400"} fontSize={"14px"}>
            {"  > "}Aksiya va chegirmalar
          </Heading>
        </Box>

        <Box display={'flex'} gap={'20px'} pb={'50px'}>
          <Box p={'25px'} w={"510px"} h={"400px"} bg={"#FFF"} borderRadius={'15px'}>
            <Image src={img2}borderRadius={'12px'} h={'281'}/>
            <Heading _hover={{color:'#DD1470',transition:'0.5s'}} fontSize={'24px'} fontWeight={'600'}lineHeight={'2'}>Smartfonlar uchun maxsus narxlar</Heading>
            <Text color={'grey'}fontSize={'15px'}>09.10.2023 - 31.10.2023</Text>
          </Box>
          <Box p={'25px'} w={'510px'}h={'400px'}bg={'#FFF'} borderRadius={'15px'}>
          <Image src={img1}borderRadius={'12px'} h={'281'}/>
          <Heading _hover={{color:'#DD1470',transition:'0.5s'}} fontSize={'24px'} fontWeight={'600'}lineHeight={'2'}>Boshlandi <span style={{color:'red'}}>!</span></Heading>
            <Text color={'grey'}fontSize={'15px'}>09.10.2023 - 31.10.2023</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
