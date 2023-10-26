import { ArrowBackIcon, LinkIcon, LockIcon, PlusSquareIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { ModalContext } from "../context/ModalContext";
import { Login } from "../components/kirish/Login";

export const BottomHeader = () => {
  const {openModal} = useContext(ModalContext)

  const {basket,tanlanganlar,taqqoslash} = useContext(Context)

  return (
    <Box>
      <Box  w={'100%'}bg={'#FFF'}p={'16px 10px'} justifyContent={'space-around'}  display={{base:'flex',lg:"none"}} position={'fixed'}bottom={0} px={5}>

        <Box position={"relative"}textAlign={"center"}>
          <Link to={"/"}>
          <ArrowBackIcon color={'#9499a5'} fontSize={'24px'}mb={1}/>
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={18}>
              Bosh sahifaga
            </Text>
          </Link>
        </Box>

        <Box  position={"relative"}textAlign={"center"}>
          <Link to={"/tanlanganlar"}>
            <StarIcon color={'#9499a5'} fontSize={"20px"} mb={1} />
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={18}>
              Tanlanganlar
            </Text>
            <Text  fontSize={'11px'}
                display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-4px"}right={'32px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{tanlanganlar.length}
            </Text>
          </Link>
        </Box>
        <Box position={"relative"}textAlign={"center"}>
          <Link to={"/savatcha"}>
            <PlusSquareIcon color={'#9499a5'} fontSize={"20px"} mb={1} />
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={18}>
              Savatcha
            </Text>
            <Text  fontSize={'11px'}
                display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-5px"}right={'20px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{basket.length}
            </Text>
          </Link>
        </Box>
        <Box position={"relative"}textAlign={"center"}>
          <Link to={"/taqqoslash"}>
            <Text display={'flex'}flexDirection={'column'}alignItems={'center'}>
            <LinkIcon color={'#9499a5'} fontSize={"20px"} mb={1} />
              <Text  fontSize={18} transition={'0.4s'} color={'#9499a5'} _hover={{ color: "#DD1470" }}>Taqqoslash</Text>
            </Text>
            <Text fontSize={'11px'}
              display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-5px"}right={'25px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{taqqoslash.length}
            </Text>
          </Link>
        </Box>
        <Box position={"relative"}textAlign={"center"}>
          <Link to={"/taqqoslash"}>
            <Box onClick={openModal} display={'flex'}flexDirection={'column'}alignItems={'center'} >
                <LockIcon color={'#9499a5'} fontSize={'20px'} mb={'7px'} />
                  <Text transition={'0.4s'}color={'#9499a5'}  _hover={{color:'#DD1470'}} fontSize={18}>kirish</Text>
                <Login/>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};


