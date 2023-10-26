import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ModalContext } from "../../context/ModalContext";
import axios from "axios";

////////////////////// ROYHATDAN OTISH //////////////////////

export const Register = () => {
  const { closeParModal, parOpen, closeAllModal } = useContext(ModalContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show,setShow] = useState(false)
  const handleShow = ()=>{
    setShow(!show)
  }


  async function register(){
      try {
       await axios.post('http://localhost:5000/auth/register',{
          username:username,
          password:password
        }).then((res)=>console.log(res.data))
      } catch (error) {
        console.log(error.response.data);
      }
  }
  const OnRegister = ()=>{
    register()
  }
  return (
    <Box>
      <Modal isOpen={parOpen} OnClose={closeAllModal}>
        <ModalContent>
          <ModalCloseButton onClick={closeAllModal} />
          <ModalBody>
            <Heading py={"45px"}textAlign={"center"}fontSize={"25px"}fontWeight={"600"}>
              <span className="material-symbols-outlined"></span>
              Ro'yhatdan o'tish</Heading>
            <Input onChange={(e) => setUsername(e.target.valeu)}type="text"mb={3}borderRadius={"10px"}padding={"15px"}placeholder="Ism,Familiya"pl={5}/>
            <Box position={'relative'}>
              <Input onChange={(e)=>setPassword(e.target.valeu)} type={show?'text':'password'} borderRadius={'10px'} padding={'15px'} placeholder="Пароль..." pl={5}  />
              <Box cursor={'pointer'} onClick={handleShow}  position={'absolute'} right={5} top={'6px'}>{show?<ViewIcon/>:<ViewOffIcon/>}</Box>
              </Box>
            <Button
              w={"100%"}
              py={"15px"}
              borderRadius={"10px"}
              mt={4}
              bg={"#DD1470"}
              border={"1px solid #DD1470"}
              _hover={{ background: "rgb(172, 32, 95)" }}
              color={"white"}
              onClick={OnRegister}
            >
              Ro'yhatdan O'tish
            </Button>
            <Box
              py={5}
              gap={2}
              display={"flex"}
              justifyContent={"center"}
              my={2}
            >
              <Text>Akkauntingiz yoʻqmi?</Text>
              <Link
                style={{ color: "#dd1470" }}
                cursor={"pointer"}
                onClick={closeParModal}
              >
                Kirish
              </Link>
              {/* <MainModal/> */}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
//
