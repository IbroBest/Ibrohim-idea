import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/image/Aksiya__img1.webp";
import img2 from "../assets/image/Aksiya__img2.webp";
import { color } from "framer-motion";

export const SaleAndVidio = () => {
  return (
      <Container  maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
        <Box py={6} display={"flex"} flexDirection={'column'}>
          <Heading fontSize={'24px'}fontWeight={'600'}>Aksiyalar va video-lavhalar</Heading>
          <Box display={'flex'}gap={4} py={5} >
        <Button p={'12px 24px'}fontSize={'16px'}fontWeight={'600'} _hover={{cursor:'pointer'}} bg={'#DD1470'} color={'white'}>Aksiyalar</Button>
        <Button p={'12px 24px'}fontSize={'16px'}fontWeight={'600'} border={'1px solid white'} bg={'#FFF'}_hover={{border:'1px solid #DD1470',color:'#dd1470'}}>Idea Content</Button>
          </Box>
        </Box>

        <Box display={"flex"} gap={{base:'10px',md:"20px"}} pb={"20px"}>
          <Box
            p={{base:'10px',md:"25px"}}
            w={{base:'318px',lg:"510px"}}
            h={{base:'240px',lg:"400px"}}
            bg={"#FFF"}
            borderRadius={"15px"}
          >
            <Image objectFit={'cover'} src={img2} borderRadius={"12px"} w={'100%'} h={{base:'150px',lg:"281px"}} />
            <Heading
              _hover={{ color: "#DD1470", transition: "0.5s" }}
              fontSize={{base:'10px',md:'18px',lg:'24px'}}
              py={{base:'2px',md:'none'}} 
              fontWeight={"600"}
              lineHeight={{base:'none',lg:'1.9'}}
              w={'100%'}
            >
              Smartfonlar uchun maxsus narxlar
            </Heading>
            <Text color={"grey"} py={{base:'2px',md:'none'}}  fontSize={{base:'10px',md:'14px',lg:'16px'}}>
              09.10.2023 - 31.10.2023
            </Text>
          </Box>
          <Box
              p={{base:'10px',md:"25px"}}
            w={{base:'318px',lg:"510px"}}
            h={{base:'240px',lg:"400px"}}
            bg={"#FFF"}
            borderRadius={"15px"}
          >
            <Image objectFit={'cover'} src={img1} borderRadius={"12px"}w={'100%'} h={{base:'150px',lg:"281px"}} />
            <Heading
              _hover={{ color: "#DD1470", transition: "0.5s" }}
              fontSize={{base:'10px',md:'18px',lg:'24px'}}
              py={{base:'4px',md:'none'}} 
              fontWeight={"600"}
              lineHeight={{base:'none',lg:'1.9'}}
              w={'100%'}
            >
              Boshlandi <span style={{ color: "red" }}>!</span>
            </Heading>
            <Text color={"grey"} py={{base:'2px',md:'none'}}  fontSize={{base:'10px',md:'14px',lg:'16px'}}>
              09.10.2023 - 31.10.2023
            </Text>
          </Box>
        </Box>
      </Container>

  );
};
