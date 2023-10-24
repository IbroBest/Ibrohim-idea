import { AddIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Image, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import hamburger from '../assets/icon/span.hamburger.svg'
import React from "react"
export const  MaxsulotlarKatalogi = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()


    const katalog = [
        {title:'Smartfonlar'},
        {title:'TV, audio va video'},
        {title:'Maishiy texnika'},
        {title:'Go`zallik va so`glik'},
        {title:'Noutbuklar va kompyuterlar'},
        {title:'Gadjetlar va aksessuarlar'},
        {title:'Avto zona'},
        {title:'Sport uchun buyumlar'},
        {title:'Ofis va uy uchun mebel'},
        {title:'Bolalar uchun tovarlar'},
        {title:'Ta`mirlash uchun asboblar'},
        {title:'Video kuzatuv tizimlari'},

      ]
  
    return (
      <>
        <Button p={{base:'5px',lg:'12px 24px'}} alignItems={'center'} background={"#DD1470"} _hover={{background:'rgb(172, 32, 95)'}} color={'white'} onClick={onOpen} gap={{base:'0',lg:'10px'}}>
       <Image w={'25px'} h={'25px'} src={hamburger}/>
         <Text display={{base:'none',lg:'block'}}>mahsulotlar katalogi</Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement='top'
          initialFocusRef={firstField}
        >
          <DrawerContent>
            <DrawerHeader display={'flex'} justifyContent={'space-between'}> 
              <Text fontSize={'20px'}>Maxsulotlar Katalogi     🔽</Text>              
              <Box  onClick={onClose}><CloseButton fontSize={'20px'} /></Box>              
            </DrawerHeader>
  
            <DrawerBody display={'flex'}gap={'20px'}>

                <Box padding={'20px'}gap={'20px'} h={'auto'}display={'flex'}flexDirection={'column'}alignItems={'center'} width={'50%'}>
                  {
                    katalog.slice(0,6).map((item)=>(
                      <Heading cursor={'pointer'}  mb={'9px'}_hover={{color:'#DD1470',borderBottom:'2px solid #DD1470'}}transition={'0.3s'} textAlign={'center'} w={'350px'}fontSize={'18px'}fontWeight={'400'} borderBottom={'2px solid #f2f2f2'}>{item.title}</Heading>
                    ))
                  }
                </Box>
                <Box padding={'20px'}gap={'20px'} h={'auto'}display={'flex'}flexDirection={'column'}alignItems={'center'} width={'50%'}>
                  {
                    katalog.slice(6,12).map((item)=>(
                      <Heading cursor={'pointer'}  mb={'9px'}_hover={{color:'#DD1470',borderBottom:'2px solid #DD1470'}}transition={'0.3s'} textAlign={'center'} w={'350px'}fontSize={'18px'}fontWeight={'400'} borderBottom={'2px solid #f2f2f2'}>{item.title}</Heading>
                    ))
                  }
                </Box>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    )
  }