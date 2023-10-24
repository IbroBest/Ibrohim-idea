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
        <Heading  color={"#282F3C"} fontSize={28} fontWeight={"600"}>
          Oshxona uchun kichik texnika
        </Heading>
        <Box w={"100%"}>
          <Grid  templateColumns={"repeat(20,1fr)"} className="first-product" gap={"15px"}>
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
                  <Image src={toj} />
                  <StarIcon
                  _hover={{color:'#DD1470'}}transition={'0.3s'} 
                    onClick={() => AddTanlanganlar(item)}
                    w={"24px"}
                    h={"24px"}
                  />
                </Box>
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
                <Box mt={'5px'} display={"flex"} alignItems={"center"} gap={'8px'}>
                  <Button
                    className="savat__icons"
                    _hover={{ border: "1px solid #DD1470 ", color: "#DD1470" }}
                    transition={"0.3s ease"}
                    fontSize={'14px'}
                    h={'48px'}
                    border={'1px solid #F2F2F2'}
                  >
                    Hozirni oʻzidayoq <br /> xarid qilish
                  </Button>
                  <Button
                    h={'48px'}
                    p={'12px'}
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
