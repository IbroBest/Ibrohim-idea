import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box display={{base:'none',lg:'block'}} background={'#282f3c'}>

    <Container p={3}  maxW={{md:'696px',lg:'1116px',xl:'1576px'}} display={'flex'} justifyContent={'space-between'}>
      <Box display={'flex'} gap={5} alignItems={'center'}>
        <Text color={'white'} fontSize={16}>Biz haqimizda</Text>
        <Text color={'white'} fontSize={16}>Muddatli to'lov</Text>
        <Text color={'white'} fontSize={16}>Vakansiyalar</Text>
      </Box>
      <Box display={'flex'} gap={5} alignItems={'center'}>
        <PhoneIcon color={'#dd1470'} />
        <Text color={'white'} fontSize={16}> 71 230 77 99</Text>
        <Text color={'white'} fontSize={16}>O'zbekcha    {'>'} </Text>
      </Box>
    </Container>
    </Box>
  )
}
