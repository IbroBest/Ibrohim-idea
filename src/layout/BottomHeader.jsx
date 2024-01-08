import { ArrowBackIcon, LinkIcon, LockIcon, PlusSquareIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { ModalContext } from "../context/ModalContext";
import { Login } from "../components/kirish/Login";

export const BottomHeader = () => {
  const {openModal} = useContext(ModalContext)

  const {basket,tanlanganlar,taqqoslash} = useContext(Context)
  // 20px

  return (
    <Box>
      
      <Box  alignItems={'center'} w={'100%'}bg={'#FFF'}p={'16px 10px'} justifyContent={'space-around'} flexDirection={{base:'column',sm:'row'}}  display={{base:'flex',lg:"none"}} position={'fixed'}bottom={0} px={'10px'}>

        {/* 480 > chiqadigan itemlar 👇  */}

        <Box display={{base:'flex',sm:'none'}} alignItems={'center'} gap={'10px'}>

        <Box position={"relative"}textAlign={"center"}>
          <Link to={"/"}>
          <ArrowBackIcon color={'#9499a5'} fontSize={'22px'}/>
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }}fontSize={'15px'}>
              Bosh sahifaga
            </Text>
          </Link>
        </Box>

        <Box  position={"relative"}textAlign={"center"}>
          <Link to={"/tanlanganlar"}>
            <StarIcon color={'#9499a5'} fontSize={"18px"} mb={1} />
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={'15px'}>
              Tanlanganlar
            </Text>
            <Text  fontSize={'11px'}
                display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-4px"}right={'32px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{tanlanganlar.length}
            </Text>
          </Link>
        </Box>
        <Box position={"relative"}textAlign={"center"}>
          <Link to={"/savatcha"}>
            <PlusSquareIcon color={'#9499a5'} fontSize={'18px'} mb={1} />
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={'15px'}>
              Savatcha
            </Text>
            <Text  fontSize={'11px'}
                display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-5px"}right={'20px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{basket.length}
            </Text>
          </Link>
        </Box>

        </Box>

        <Box pt={'10px'}  display={{base:'flex',sm:'none'}} alignItems={'center'} gap={'25px'}>
        <Box  position={"relative"}textAlign={"center"}>
          <Link to={"/taqqoslash"}>
            <Text display={'flex'}flexDirection={'column'}alignItems={'center'}>
            <LinkIcon color={'#9499a5'} fontSize={'18px'}mb={1} />
              <Text  fontSize={'15px'} transition={'0.4s'} color={'#9499a5'} _hover={{ color: "#DD1470" }}>Taqqoslash</Text>
            </Text>
            <Text fontSize={'11px'}
              display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-5px"}right={'25px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{taqqoslash.length}
            </Text>
          </Link>
        </Box>
        <Box  position={"relative"}textAlign={"center"}>
          <Link to={"/taqqoslash"}>
            <Box onClick={openModal} display={'flex'}flexDirection={'column'}alignItems={'center'} >
                <LockIcon color={'#9499a5'}fontSize={'18px'}mb={'7px'} />
                  <Text transition={'0.4s'}color={'#9499a5'}  _hover={{color:'#DD1470'}}fontSize={'15px'}>kirish</Text>
                <Login/>
            </Box>
          </Link>
        </Box>
        </Box>


        {/* 480 > chiqadigan itemlar 👆  */}


        <Box display={{base:'none',sm:'block'}} position={"relative"}textAlign={"center"}>
          <Link to={"/"}>
          <ArrowBackIcon color={'#9499a5'} fontSize={'22px'}mb={1}/>
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }}fontSize={'18px'}>
              Bosh sahifaga
            </Text>
          </Link>
        </Box>

        <Box  display={{base:'none',sm:'block'}} position={"relative"}textAlign={"center"}>
          <Link to={"/tanlanganlar"}>
            <StarIcon color={'#9499a5'} fontSize={"18px"} mb={1} />
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={'18px'}>
              Tanlanganlar
            </Text>
            <Text  fontSize={'11px'}
                display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-4px"}right={'32px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{tanlanganlar.length}
            </Text>
          </Link>
        </Box>
        <Box display={{base:'none',sm:'block'}} position={"relative"}textAlign={"center"}>
          <Link to={"/savatcha"}>
            <PlusSquareIcon color={'#9499a5'} fontSize={'18px'} mb={1} />
            <Text color={'#9499a5'} _hover={{ color: "#DD1470" }} fontSize={'18px'}>
              Savatcha
            </Text>
            <Text  fontSize={'11px'}
                display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-5px"}right={'20px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{basket.length}
            </Text>
          </Link>
        </Box>
        <Box display={{base:'none',sm:'block'}} position={"relative"}textAlign={"center"}>
          <Link to={"/taqqoslash"}>
            <Text display={'flex'}flexDirection={'column'}alignItems={'center'}>
            <LinkIcon color={'#9499a5'} fontSize={'18px'}mb={1} />
              <Text  fontSize={'18px'} transition={'0.4s'} color={'#9499a5'} _hover={{ color: "#DD1470" }}>Taqqoslash</Text>
            </Text>
            <Text fontSize={'11px'}
              display={"flex"}justifyContent={"center"}alignItems={"center"}top={"-5px"}right={'25px'}borderRadius={"50%"}background={"#FFBF3C"}w={"14px"}h={"14px"}position={"absolute"}>{taqqoslash.length}
            </Text>
          </Link>
        </Box>
        <Box display={{base:'none',sm:'block'}} position={"relative"}textAlign={"center"}>
          <Link to={"/taqqoslash"}>
            <Box onClick={openModal} display={'flex'}flexDirection={'column'}alignItems={'center'} >
                <LockIcon color={'#9499a5'}fontSize={'18px'}mb={'7px'} />
                  <Text transition={'0.4s'}color={'#9499a5'}  _hover={{color:'#DD1470'}}fontSize={'18px'}>kirish</Text>
                <Login/>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};


