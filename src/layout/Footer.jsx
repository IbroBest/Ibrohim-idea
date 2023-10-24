import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import WhiteLogo from '../assets/image/WhiteLogo.png'
import telegram from '../assets/icon/telegram.svg'
import instagram from '../assets/icon/instagram.svg'
import fecebook from '../assets/icon/fecebook.svg'
export const Footer = () => {
  return (
    <Box  padding={'40px 0 40px 0 ' }  background={'#282F3C'}>
      <Container display={'flex'} justifyContent={'space-between'} h={'auto'}    maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
          <Box pt={'50px'} display={{base:'none',lg:'block'}}>
            <Image w={'105px'}h={'43px'} src={WhiteLogo}/> 
            <Box display={'flex'} pt={'25px'} gap={'12px'}>
              <Image padding={'6px'}borderRadius={'50%'} w={'40px'}h={'40px'} border={'1px solid grey'} src={telegram}/>
              <Image padding={'6px'}borderRadius={'50%'} w={'40px'}h={'40px'} border={'1px solid grey'} src={fecebook}/>
              <Image padding={'6px'}borderRadius={'50%'} w={'40px'}h={'40px'} border={'1px solid grey'} src={instagram}/>
            </Box>
          </Box>        
          <Box display={{base:'none',lg:'flex'}}flexDirection={'column'} gap={'18px'}>
              <Heading color={'white'}fontSize={'18px'}>Xaridorlarga</Heading>  
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>savol-javob</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Saytda buyurtma berish</Text>
          </Box>
          <Box display={{base:'none',lg:'flex'}}flexDirection={'column'} gap={'18px'}>
              <Heading color={'white'}fontSize={'18px'}>idea.uz</Heading>  
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Biz haqimizda</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Bizning do'konlarimiz</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Aloqa</Text>
          </Box>
          <Box display={{base:'none',lg:'flex'}}flexDirection={'column'} gap={'18px'}>
              <Heading color={'white'}fontSize={'18px'}>Ma'lumot</Heading>  
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Maqolalar</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Muddatli to'lov</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Oferta</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Vakansiyalar</Text>
          </Box>
          <Box display={{base:'none',lg:'flex'}}flexDirection={'column'} gap={'11px'}>
              <Heading  color={'white'}fontSize={'18px'}>Qayta aloqa</Heading>  
              <Button _hover={{border:'1px solid #DD1470',color:'#DD1470'}}transition={'0.3s'} background={'#282F3C'} color={'#FFFFFF'}border={'1px solid #FFFFFF'}p={'7px 12px'}>Xabar qoldirish</Button>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Saytda buyurtma berish</Text>
              <Heading _hover={{color:'#DD1470'}} transition={'0.4s'} color={'white'}fontSize={'18px'}>71 230 77 99</Heading>  
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Har kuni 9:00dan 21:00gacha</Text>
              <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'14px'} fontWeight={'400'} color={'#7A7D8C'}>Pochta</Text>

          </Box>


          <Accordion display={{base:'block',lg:'none'}} flexDirection={'column'} defaultIndex={[0]} allowMultiple w={'100%'}>
            <Box>
            <AccordionItem mb={'10px'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={'white'}fontWeight={'800'}>
        Xaridorlarga
        </Box>
        <AccordionIcon color={'white'}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}>Savol-javob</Text>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}>Saytdan buyurtma berish</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem mb={'10px'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={'white'} fontWeight={'800'}>
        idea.uz
        </Box>
        <AccordionIcon color={'white'}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}>Biz haqimizda</Text>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}>Bizning do'konlarimiz</Text>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}>Aloqa</Text>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb={'10px'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={'white'}fontWeight={'800'}>
        Ma'lumot
        </Box>
        <AccordionIcon color={'white'}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}lineHeight={'1.3'}>Maqolalar</Text>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}lineHeight={'1.3'}>Muddatli to'lov</Text>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}lineHeight={'1.3'}>Oferta</Text>
        <Text _hover={{color:'#DD1470'}} transition={'0.4s'} fontSize={'16px'} fontWeight={'400'} color={'#7A7D8C'}lineHeight={'1.3'}>Vakansiyalar</Text>
    </AccordionPanel>
  </AccordionItem>
            </Box>

            <Image w={'105px'}h={'43px'}display={{base:'flex',lg:'none'}}mt={3} src={WhiteLogo}/> 

            <Box display={{base:'flex',lg:'none'}} pt={'25px'} gap={'12px'}>
              <Image padding={'6px'}borderRadius={'50%'} w={'40px'}h={'40px'} border={'1px solid grey'} src={telegram}/>
              <Image padding={'6px'}borderRadius={'50%'} w={'40px'}h={'40px'} border={'1px solid grey'} src={fecebook}/>
              <Image padding={'6px'}borderRadius={'50%'} w={'40px'}h={'40px'} border={'1px solid grey'} src={instagram}/>
            </Box>

          </Accordion>



      </Container>
    </Box>
  )
}
