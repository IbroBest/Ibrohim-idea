import {
  Box,
  Container,
  InputRightElement,
  Image,
  Input,
  InputGroup,
  Text,

} from "@chakra-ui/react";
import { React , useContext } from "react";
import instagram from '../assets/icon/instagram.svg'
import telegram from '../assets/icon/telegram.svg'
import fecebook from '../assets/icon/fecebook.svg'
import idea from "../assets/icon/Logo.svg";

import { Link } from "react-router-dom";
import {
  AttachmentIcon,
  LockIcon,
  PhoneIcon,
  PlusSquareIcon,
  QuestionOutlineIcon,
  SearchIcon,
  StarIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Context } from "../context/Context";
import { MaxsulotlarKatalogi } from "../components/MaxsulotlarKatalogi";
import { ResponsiveHeader__search } from "./header/ResponsiveHeader__search";
import { ModalContext } from "../context/ModalContext";
import { Login } from "../components/kirish/Login";
// import locationIcon from '../assets/icon/location.svg'

export const Header = () => {
  const {openModal} = useContext(ModalContext)
  const {basket,tanlanganlar,taqqoslash} = useContext(Context)
  return (
    <Box>
    <Box background={{base:'#f2f3f5',lg:"#fff"}}>

      
    <Container className="header"  maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
      <Box  p={{base:'5px',lg:'20px'}}background={{base:'#f2f3f5',lg:'#fff'}} display={"flex"} flexDirection={{base:'row  ',lg:'row'}} justifyContent={'space-between'} alignItems={'center'} gap={{base:10,lg:'none'}} >
        <Box alignItems={'center'} display={{base:'none',lg:'flex'  }} gap={"32px"}>
          <Link to={'https://t.me/ideastore_uz'}><Image w={'26px'}h={'26px'}  src={telegram} /></Link>
          <Link to={'https://www.facebook.com/ideastore.uz/'}><Image w={'26px'}h={'26px'} src={fecebook} /></Link>
          <Link to={'https://www.instagram.com/ideastore.uz/'}><Image w={'29px'}h={'29px'}  src={instagram} /></Link>
        </Box>
        <Link to={"/"}>
          <Image src={idea} w={{base:'65px',lg:'105px'}} />

        </Link>

          <Box   display={{base:'none',lg:'flex'}} justifyContent={{base:'space-between',lg:'none'}} gap={10}>
            <Link to={"/manzillar"}>

                <Text display={'flex'}flexDirection={'column'}alignItems={'center'} transition={'0.4s'} _hover={{color:'#DD1470'}} color={"gray"} fontSize={18}>
                <AttachmentIcon fontSize={19} mb={1} />
                  Bizning manzillar
                </Text>
            </Link>
           
            <Link to={"/aksiya"}>
                <Text display={'flex'}flexDirection={'column'}alignItems={'center'} transition={'0.4s'} _hover={{color:'#DD1470'}} color={"gray"} fontSize={18}>
                <TimeIcon fontSize={19} mb={1} />
                  Aksiya va chegirmalar
                </Text>
            </Link>
            

                <Text onClick={openModal} display={'flex'}flexDirection={'column'}alignItems={'center'} transition={'0.4s'}  _hover={{color:'#DD1470'}} color={"gray"} fontSize={18}>
                <LockIcon fontSize={19} mb={1} />
                  kirish
                <Login/>

                </Text>


            </Box>  

              <Box display={{base:'flex',lg:'none'}}alignItems={'center'} gap={2}>
                <PhoneIcon display={{base:'none',sm:'block'}}  color={'#dd1470'} />
                <Text color={'#282f3c'} display={{base:'none',sm:'block'}} fontSize={'14px'}> 71 230 77 99</Text>
              </Box>
              <Text display={{base:'flex',lg:'none'}} color={'#282f3c'} fontSize={'14px'}>O'zbekcha    {'>'} </Text>
          

      </Box>
      <Box my={{base:'16px',lg:'none'}} justifyContent={'space-between'} gap={'10px'} alignItems={"center"} display={{base:'none',lg:'flex'}} >
        <MaxsulotlarKatalogi/>
        
          <InputGroup w={'55%'}>
          <InputRightElement alignItems={'center'} >
          <SearchIcon />
          </InputRightElement>
            <Input h={'46px'} border={'none'} pl={5}background={'#f2f2f2'} placeholder="Maxsulot qidirish" />
          </InputGroup>

        <Box gap={6} display={'flex'}>

          <Box display={{base:'none',lg:'block'}} position={'relative'} textAlign={"center"}>
        <Link to={"/tanlanganlar"} >
            <StarIcon fontSize={17} mb={1} />
            <Text fontSize={18}>Tanlanganlar</Text>
            <Text display={'flex'} justifyContent={'center'} alignItems={'center'} top={'-9px'} right={7} borderRadius={'50%'}  background={'yellow'}w={'20px'} h={'20px'} position={'absolute'}>{tanlanganlar.length}</Text>
        </Link>
          </Box>
          <Box display={{base:'none',lg:'block'}} position={'relative'} textAlign={"center"}>
        <Link to={"/savatcha"}>
            <PlusSquareIcon fontSize={17} mb={1} />
            <Text fontSize={18}>Savatcha</Text>
            <Text display={'flex'} justifyContent={'center'} alignItems={'center'} top={'-9px'} right={3} borderRadius={'50%'}  background={'yellow'}w={'20px'} h={'20px'} position={'absolute'}>{basket.length}</Text>
        </Link>
          </Box>
          <Box display={{base:'none',lg:'block'}} position={'relative'} textAlign={"center"}>
        <Link to={"/taqqoslash"}>
            <QuestionOutlineIcon fontSize={17} mb={1} />
            <Text fontSize={18}>Taqqoslash</Text>
            <Text display={'flex'} justifyContent={'center'} alignItems={'center'} top={'-9px'} right={5} borderRadius={'50%'}  background={'yellow'}w={'20px'} h={'20px'} position={'absolute'}>{taqqoslash.length}</Text>
        </Link>
          </Box>
        </Box>
      </Box>

     
        </Container>
      </Box>
      <ResponsiveHeader__search display={{base:'block',lg:'none'}}/>
      </Box>
  )
}
//  <ResponsiveHeader__search display={{base:'block',lg:'none'}}/>