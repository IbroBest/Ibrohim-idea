import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Box, Button, Container, Grid, GridItem, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon, DeleteIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";
import basketLogo from "../assets/image/basket.png";
import { Link } from "react-router-dom";
import toj from "../assets/icon/toj.svg";
import basket from "../assets/icon/basket.svg";
import star from "../assets/icon/star.svg";



export const Savatcha = () => {
  const { basket,AllTanlanganlar,AllTaqooslangan,data} = useContext(Context);
  // const DeleteData = (id)=>{ // }
  const AddTanlanganlar = (item) => {
    AllTanlanganlar(item);
  };
  const AddTaqqoslash = (item) => {
    AllTaqooslangan(item);
  };
  return (
    <Box background={"#f2f3f5"}>
      <Container pb={10} maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
        <Box py={5} alignItems={"center"} display={"flex"}>
          <Link to={"/"} style={{ fontSize: "16px" }}>
            Bosh sahifa   
          </Link>
          <Heading color={"#DD1470"} fontWeight={"400"} fontSize={"16px"}>
            {">"}   savatcha
          </Heading>
        </Box>

          {basket.length === 0 && (
            <Container maxW={'1576px'} display={'flex'} flexDirection={'column'} alignItems={'center'} background={'#fff'} p={5} w={"100%"}  gap={4}>
              <Image src={basketLogo} w={"400px"} h={"260px"} />
              <Text color={'#282f3c'} fontSize={'24px'} fontWeight={'600'}>Savatchada hozircha hech narsa yoʻq</Text>
              <Text color={'#282f3c'} fontSize={'14px'}fontWeight={'400'}>
              Siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan foydalanishingiz mumkin
              </Text>
              <Link to={'/'}
               className="bosh-sahifaga-otish__btn"
              >
                bosh sahifaga otish
              </Link>
            </Container>
          )}
        <Box display={'flex'} justifyContent={{base:'none',lg:'space-between'}}flexDirection={{base:'column',lg:'row'}} gap={'40px'}mb={'50px'}>
        <Box display={'flex'} flexDirection={'column'}>


              {basket.map((item) => (
                <Box
                  borderRadius={'10px'}
                  mb={"10px"}
                  p={"24px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  key={item.id}
                  background={"#fff"}
                  w={{lg:'670px',xl:'932px','2xl':'1000px'}}
                  flexDirection={{base:'column',md:'row'}}
                >
                  <Box display={"flex"} w={'100%'} alignItems={{base:'start',md:"center"}}>
                    <Image w={"120px"} h={"120px"} src={item.img} />
                    <Box display={"flex"} flexDirection={"column"}>
                      <Box display={"flex"} gap={3}>
                        <Text
                          color={"#282f3c"}
                          fontSize={{base:'13px',md:"18px"}}
                          fontWeight={"800"}
                        >
                          {item.current_price_formatted}
                        </Text>
                        <Heading
                          display={{base:"none",md:'flex'}}
                          p={"5px 8px"}
                          color={"white"}
                          borderRadius={"100px"}
                          fontSize={{base:'13px',md:"18px"}}
                          background={"#DD1470"}
                        >
                          Toliq tolov{">"}
                        </Heading>
                      </Box>
                      <Box display={"flex"} gap={"7px"}>
                        <Text
                          pt={1.2}
                          color={"#282f3c"}
                          fontSize={{base:'10px',md:"18px"}}
                          fontWeight={"500"}
                          _hover={{ color: "#DD1470" }}
                        >
                          {item.slug}
                        </Text>
                      </Box>
                      <Text pt={2}>Mahsulot kodi: 4688</Text>
                    </Box>
                  </Box>
                  <Box w={{base:'100%',md:'auto'}} pl={{base:'20px',md:'0px'}}  display={"flex"} gap={7} pr={7}>
                    <DeleteIcon
                     fontSize={{base:'20px',md:"30px"}}
                      onClick={() => DeleteData(item.id)}
                      _hover={{ color: "#DD1470" }}
                      className="savat__icons"
                      color={"rgb(148, 153, 165)"}

                    />
                    <StarIcon
                     fontSize={{base:'20px',md:"30px"}}
                    onClick={()=>AddTanlanganlar(item)}
                      _hover={{ color: "#DD1470" }}
                      className="savat__icons"
                      color={"rgb(148, 153, 165)"}

                    />
                    <LinkIcon
                     fontSize={{base:'20px',md:"30px"}}
                    onClick={()=>AllTaqooslangan(item)}
                      _hover={{ color: "#DD1470" }}
                      className="savat__icons"
                      color={"rgb(148, 153, 165)"}

                    />
                  </Box>
                </Box>
              ))}

            </Box>


          {basket.length > 0 && (
            <Box
              p={"24px"}
              w={{base:'100%',lg:'280px',xl:'300px','2xl':'360px'}}
              h={"auto"}
              borderRadius={"10px"}
              background={"#fff"}
            >
              <Heading mb={"12px"} fontSize={"18px"} color={"#282f3c"}>
                    Sizning savatchangiz
                  </Heading>
              {basket.map((item) => (
                <Box key={item.id} mb={4} display={'flex'} flexDirection={'column'} alignItems={'start'}>
                  
                  <Text fontSize={"15px"} color={'#282f3c'} fontWeight={"600"}>
                    {item.name}
                  </Text>
                  <Box pt={1} display={'flex'}justifyContent={'space-between'}w={'100%'}>
                  <Text color={'grey'} fontWeight={'400'}>narx</Text>
                  <Text fontWeight={'400'}>{item.current_price_formatted}</Text>
                  </Box>
                  
                </Box>

              ))}
              <br />
              <hr />
              <Button
                    mt={"35px"}
                    w={"100%"}
                    background={"none"}
                    border={"1px solid #DD1470"}
                    color={"#DD1470"}
                    transition={"0.3s"}
                    _hover={{ background: "#DD1470", color: "white" }}
                  >
                    rasmilashtirish
                  </Button>
            </Box>
          )}
        </Box>

         {/* /////////         savatni pasi         ///////// */}


        {data.length > 0 &&
<>

<Box display={'flex'}justifyContent={'space-between'}>
<Heading fontSize={{base:'14px',sm:'24px'}}>Siz uchun maxsus</Heading>
<Heading alignItems={'center'}fontWeight={'500'} fontSize={{base:'10px',sm:'16px'}} color={'#DD1470'}>Hammasini Ko'rish <ArrowForwardIcon/></Heading>
  </Box>

  <Grid
  templateColumns={"repeat(20,1fr)"}
  className="first-product"
  gap={'15px'}
  flexDirection={'column'}
>
 
  {data.map((item) => (
    <GridItem
      my={"30px"}
      key={item.id}
      h={"auto"}
      background={"#fff"}
      borderRadius={"12px"}
      p={"16px"}
      w={{base:"208px",lg:'244px'}}
    >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Image onClick={() => AddTaqqoslash(item)} src={toj} />
          <StarIcon _hover={{color:'#DD1470'}}transition={'0.3s'} onClick={() => AddTanlanganlar(item)}w={"24px"}h={"24px"}/>
        </Box>
      <Link to={`/product/${item.id}`}>
        <Image
          py={"8px"}
          w={"100%"}
          h={"200px"}
          objectFit={"cover"}
          src={item.img}
        />

        <HStack>
          <Image src={star} />{" "}
          <Heading fontSize={"13px"} mt={"7px"}>
            (5.0) 0 отзывов{" "}
          </Heading>
        </HStack>
        <Heading mt={"5px"} fontSize={"19px"} color={"#DD1470"}>
          {item.current_price_formatted}
        </Heading>
        <Heading
          mt={"7px"}
          fontSize={"14px"}
          color={"#282F3C"}
          fontWeight={"400"}
        >
          {item.title_name}
        </Heading>
        <Heading mt={"4px"} fontSize={"15px"}>
          <span style={{ color: "#C0C0C0" }}>Бренд:  </span>
          {item.brand_name}
        </Heading>
        </Link>
        <Box
          mt={"5px"}
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          >
         
          <Button
            className="savat__icons"
            _hover={{
              border: "1px solid #DD1470 ",
              color: "#DD1470",
            }}
            transition={"0.3s ease"}
            fontSize={"14px"}
            h={"48px"}
            border={"1px solid #F2F2F2"}
            >
            Hozirni oʻzidayoq <br /> xarid qilish
          </Button>
          <Button
            h={"48px"}
            p={"12px"}
            background={"#DD1470"}
            borderRadius={"9px"}
            onClick={() => SubmitData(item)}
            _hover={{ background: "rgb(172, 32, 95)" }}
          >
            <Image w={"24px"} h={"24px"} src={basket} />
          </Button>
        </Box>
    </GridItem>
  ))}
</Grid>
</>

}
      </Container>
    </Box>
  );
};
