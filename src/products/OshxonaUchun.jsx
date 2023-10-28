import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import toj from "../assets/icon/toj.svg";
import { StarIcon } from "@chakra-ui/icons";
import star from "../assets/icon/star.svg";
import basket from "../assets/icon/basket.svg";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

export const OshxonaUchun = () => {
  const { data, allBasket, AllTanlanganlar } = useContext(Context);
  useEffect(() => {
    axios.get(
      "https://api.idea.uz/api/v2/products?is_bestseller=1&order_by=order&quantity=20&quantity=20"
    );
  }, []);
  const SubmitData = (item) => {
    allBasket(item);
  };
  const AddTanlanganlar = (item) => {
    AllTanlanganlar(item);
  };
  return (
    <Box background={"#f2f2f2"}>
      <Container   maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
      <Heading  color={"#282F3C"} fontSize={{base:'20px',lg:30}} fontWeight={"600"}>
          Oshxona uchun
        </Heading>
        <Box w={"100%"}>
          <Grid  templateColumns={"repeat(20,1fr)"} className="first-product" gap={"15px"}>
          {data.map((item) => (
              <GridItem
                my={"30px"}
                key={item.id}
                h={{base:'350px',md:'auto'}}
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
                  pl={{base:'50px',md:'0px'}}
                  alignItems={'center'}
                  py={"8px"}
                  w={{base:"120px",md:'100%'}}
                  h={{base:'140px',md:'200px'}} 
                  objectFit={"cover"}
                  src={item.img}
                  />

                  <HStack alignItems={'center'}>
                    <StarIcon color={'yellow.300'} fontSize={{base:'8px',md:"13px"}}/>
                    <Heading fontSize={{base:'8px',md:"13px"}}>
                      (5.0) 0 отзывов{" "}
                    </Heading>
                  </HStack>
                  <Heading mt={"5px"} fontSize={{base:'15px',md:"19px"}} color={"#DD1470"}>
                    {item.current_price_formatted}
                  </Heading>
                  <Heading
                    mt={"7px"}
                    fontSize={{base:'12px',md:"14px"}}
                    color={"#282F3C"}
                    fontWeight={"400"}
                  >
                    {item.title_name}
                  </Heading>
                  <Heading mt={"4px"} fontSize={{base:'12px',md:"16px"}}>
                    <span style={{ color: "#C0C0C0" }}>Бренд:  </span>
                    {item.brand_name}
                  </Heading>
                  </Link>
                  <Box
                    mt={{base:'10px',md:"5px"}}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"8px"}
                    >
                   
                    <Button
                      _hover={{
                        border: "1px solid #DD1470 ",
                        color: "#DD1470",
                      }}
                      transition={"0.4s"}
                      fontSize={{base:'10px',md:"14px"}}
                      h={{base:'40px',md:"48px"}}
                      border={"1px solid #F2F2F2"}
                      >
                      Hozirni oʻzidayoq <br /> xarid qilish
                    </Button>
                    <Button
                       h={{base:'40px',md:"48px"}}  
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
        </Box>
      </Container>
    </Box>
  );
};
