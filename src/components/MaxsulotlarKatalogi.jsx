import { AddIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Image, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import hamburger from '../assets/icon/span.hamburger.svg'
import React from "react"
export const  MaxsulotlarKatalogi = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()


    const katalog = [
        {title:'Smartfonlar',id:1},
        {title:'TV, audio va video',id:2},
        {title:'Maishiy texnika',id:3},
        {title:'Go`zallik va so`glik',id:4},
        {title:'Noutbuklar va kompyuterlar',id:5},
        {title:'Gadjetlar va aksessuarlar',id:6},
        {title:'Avto zona',id:7},
        {title:'Sport uchun buyumlar',id:8},
        {title:'Ofis va uy uchun mebel',id:9},
        {title:'Bolalar uchun tovarlar',id:10},
        {title:'Ta`mirlash uchun asboblar',id:11},
        {title:'Video kuzatuv tizimlari',id:12},

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
                      <Heading key={item.id} cursor={'pointer'}  mb={'9px'}_hover={{color:'#DD1470',borderBottom:'2px solid #DD1470'}}transition={'0.4s'} textAlign={'center'} w={'350px'}fontSize={'18px'}fontWeight={'400'} borderBottom={'2px solid #f2f2f2'}>{item.title}</Heading>
                    ))
                  }
                </Box>
                <Box padding={'20px'}gap={'20px'} h={'auto'}display={'flex'}flexDirection={'column'}alignItems={'center'} width={'50%'}>
                  {
                    katalog.slice(6,12).map((item)=>(
                      <Heading  key={item.id} cursor={'pointer'}  mb={'9px'}_hover={{color:'#DD1470',borderBottom:'2px solid #DD1470'}}transition={'0.4s'} textAlign={'center'} w={'350px'}fontSize={'18px'}fontWeight={'400'} borderBottom={'2px solid #f2f2f2'}>{item.title}</Heading>
                    ))
                  }
                </Box>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    )
  }