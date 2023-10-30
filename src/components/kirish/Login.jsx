import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from "@chakra-ui/react";
import {React,useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ModalContext } from "../../context/ModalContext";
import { Register } from "./Register";

export const Login = () => {
  const {open,closeModal,openParModal} = useContext(ModalContext)
  const [show,setShow] = useState(false)
  const handleShow = ()=>{
    setShow(!show)
  }
  
////////////////////// Kirish //////////////////////

  return (
    <Box>
      <Modal  isOpen={open} OnClose={closeModal}>
          {/* <ModalOverlay/> */}
          <ModalContent>
            <ModalCloseButton onClick={closeModal}/>
            <ModalBody justifyContent={'center'}>
                <Heading py={'45px'}textAlign={'center'}fontSize={'25px'}fontWeight={'700'}>Kirish</Heading>
              <Input type="number" mb={3} borderRadius={'10px'} padding={'15px'} placeholder="+998(__)___-__-__" pl={5} />
              <Box position={'relative'}>
              <Input type={show?'text':'password'} borderRadius={'10px'} padding={'15px'} placeholder="Пароль..." pl={5}  />
              <Box cursor={'pointer'} onClick={handleShow}  position={'absolute'} right={5} top={'6px'}>{show?<ViewIcon/>:<ViewOffIcon/>}</Box>
              </Box>
              <Button w={'100%'} py={'15px'}borderRadius={'10px'}mt={4}bg={'#DD1470'}border={'1px solid #DD1470'} _hover={{background:'rgb(172, 32, 95)'}} color={'white'}>Kirish</Button>
              <Text  color={'#DD1470'}fontSize={'16px'}py={2} textAlign={'center'}fontWeight={'400'}cursor={'pointer'}>Parolni unutdingizmi?</Text>
              <Register/>
              <Box gap={2} display={'flex'}justifyContent={'center'} my={2}>
                <Text >Akkauntingiz yoʻqmi?</Text>
                <Link style={{color:'#dd1470'}}cursor={'pointer'} onClick={openParModal}>Ro'yxatdan o'tish</Link>
              </Box>
            </ModalBody>
          </ModalContent>
      </Modal>
    </Box>
  );
};
