import { SearchIcon } from '@chakra-ui/icons'
import { Box, Container, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { MaxsulotlarKatalogi } from '../../components/MaxsulotlarKatalogi'

export const ResponsiveHeader__search = () => {
  return (
    <Container gap={5}  maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }} background={'#fff'} my={'16px'}  alignItems={"center"} display={{base:'flex',lg:'none'}} >
        <MaxsulotlarKatalogi/>

          <InputGroup w={'100%'} alignItems={'center'}>
          <InputRightElement alignItems={'center'} >
          <SearchIcon fontWeight={'500'}color={'grey'}fontSize={'13px'}/>
          </InputRightElement>
            <Input h={'46px'} w={'100%'} border={'none'} pl={5}background={'#f2f2f2'} placeholder="Maxsulot qidirish" />
          </InputGroup>

      </Container>
  )
}
