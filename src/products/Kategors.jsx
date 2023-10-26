import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import iphone from '../assets/image/iphone.png'
import washing from '../assets/image/washing.png'
import tv from '../assets/image/tv.png'
import gazPlita from '../assets/image/gazplita.png'
import laptop from '../assets/image/laptop.png'
import dazmol from '../assets/image/dazmol.webp'

export const Kategors = () => {
  return (
    <Container py={4}  maxW={{ sm:'410px',md: "696px", lg: "1116px", xl: "1576px" }}>

      <Heading display={{base:'none',lg:"flex"}} color={"#282F3C"} py={"10px"} fontSize={30} fontWeight={"600"}>
        Kategoriyalar
      </Heading>

      <Box display={{base:'none',lg:"flex"}} gap={"20px"}>

        <Box _hover={{background:'#0d6efd',}}transition={'0.3s'}  overflow={'hidden'} position={'relative'} bg={'#e8e8e8'}borderRadius={'14px'} p={'24px'} w={"380px"} h={"260px"}>
            <Heading fontSize={'20px'}>Smartfonlar</Heading>
            <Image position={'absolute'}zIndex={1} right={{lg:'-95px',xl:'-110px'}}w={'300px'} top={{lg:'133px',xl:'94px'}} src={iphone}/>
        </Box>

        <Box _hover={{background:'#6f42c1'}}transition={'0.3s'} overflow={'hidden'} position={'relative'} bg={'#e8e8e8'}borderRadius={'14px'} p={'24px'} w={"380px"} h={"260px"}>
            <Heading fontSize={'20px'}>Kir yuvish mashinalari</Heading>
            <Image position={'absolute'}zIndex={1} right={'-10px'} top={'120px'} w={'140px'} src={washing}/>
        </Box>
        <Box _hover={{background:'#ffc107'}}transition={'0.3s'}  overflow={'hidden'} position={'relative'} bg={'#e8e8e8'}borderRadius={'14px'} p={'24px'} w={"180px"} h={"260px"}>
            <Heading fontSize={'17px'}>televizorlar</Heading>
            <Image position={'absolute'}zIndex={1} right={{lg:'-20px',xl:'-40px'}} top={{lg:'140px',xl:'100px'}} w={'100%'} src={tv}/>
        </Box>
        <Box  _hover={{background:'#0dcaf0'}}transition={'0.3s'} position={'relative'} overflow={'hidden'} bg={'#e8e8e8'}borderRadius={'14px'} p={'24px'} w={"180px"} h={"260px"}>
            <Heading fontSize={'17px'}>Gaz plitasi</Heading>
            <Image position={'absolute'}zIndex={1} right={'-30px'}  top={'120px'} w={'140px'} src={gazPlita}/>
        </Box>
        <Box w={"380px"} gap={'16px'} display={'flex'}flexDirection={'column'}>
          <Box _hover={{background:'#dc3545'}}transition={'0.3s'}  p={'24px'} position={'relative'} overflow={'hidden'} bg={'#e8e8e8'}borderRadius={'14px'} w={"100%"}  h={"122px"} >
            <Heading fontSize={'17px'}>Notebooklar</Heading>
            <Image position={'absolute'}zIndex={1}  w={'140px'} src={laptop}right={'-10px'}/>
          </Box>
          <Box _hover={{background:'#198754'}}transition={'0.3s'}  p={'24px'} position={'relative'} overflow={'hidden'} bg={'#e8e8e8'}borderRadius={'14px'} w={"100%"}  h={"122px"} >
            <Heading fontSize={'17px'}>Oshxona uchun kichik texnika</Heading>
            <Image position={'absolute'}zIndex={1}  w={'100px'}top={'30px'} src={dazmol}right={'-10px'}/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
