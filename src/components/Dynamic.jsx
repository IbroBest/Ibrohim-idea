import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { LinkIcon, StarIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../style/DynamicCarousel.css";
import { Pagination } from "swiper/modules";
import toj from "../assets/icon/toj.svg";

export const Dynamic = () => {
  const {
    DynamicItem,
    setDynamicItem,
    attributes,
    setAtributes,
    AllTanlanganlar,
    AllTaqooslangan,
  } = useContext(Context);
  const params = useParams();
  const productId = params.id;

  // const img1 = DynamicItem.gallery[0].original
  // const img2 = DynamicItem.gallery[1].original

  const AddTanlanganlar = (item) => {
    AllTanlanganlar(item);
  };
  const AddTaqqoslash = (item) => {
    AllTaqooslangan(item);
  };
  useEffect(() => {
    axios
      .get(`https://api.idea.uz/api/v2/products/${productId}/attributes`)
      .then((res) => setAtributes(res.data.data));
    console.log(attributes);

    // error 👇
    // .catch((error) => console.log(error));
  }, [productId]);

  useEffect(() => {
    axios
      .get(`https://api.idea.uz/api/v2/products/${productId}`)
      .then((res) => setDynamicItem(res.data.data));
    console.log(DynamicItem);
  }, [productId]);

  return (
    <Box background={"#f2f3f5"}>
      <Container
        maxW={{ sm: "550px", md: "750px", lg: "1116px", xl: "1576px" }}
      >
        {/* sahifa ko'rsatuvchi 👇 */}
        <Box  py={"25px"} alignItems={"center"} display={{base:'none',md:"flex"}}>
          <Link to={"/"} style={{ fontSize: "16px" }}>
            Bosh sahifa
          </Link>
          
          <Text cursor={"pointer"}display={{base:'none',md:'block'}}>{"   >   "}Smatfonlar</Text>

          <Text color={"#DD1470"}>
            {"   >   "} {DynamicItem.slug}
          </Text>
        </Box>

        {/* Main  👇*/}
        <Box
        pt={{base:'15px',md:'0'}}
          display={"flex"}
          justifyContent={{ base: "center", lg: "space-between" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={"20px"}
        >
          {/* Birinchi bo'lak 👇 */}
          <Box
            w={{ lg: "800px", xl: "1202px", "2xl": "1130px" }}
            p={"24px"}
            h={"auto"}
            bg={"#FFF"}
            borderRadius={"12px"}
            alignItems={"center"}

          >
            <Box display={'flex'} flexDirection={'column'}>

            <Heading fontSize={{ base:'14px',sm: "18px",md:'28px', lg: "32px" }} fontWeight={"600"}>
              {DynamicItem.slug}
            </Heading>
            {/* savat va taqqoslashga otirish 👇 */}
            <Box display={{ base: "none", lg: "flex" }} gap={"10px"} py={"9px"}>
              <HStack
                cursor={"pointer"}
                _hover={{ color: "#DD1470" }}
                transition={"0.3s"}
                onClick={() => AllTanlanganlar(DynamicItem)}
                gap={"5px"}
              >
                {" "}
                <StarIcon /> <Text>Tanlanganlarga</Text>{" "}
              </HStack>
              <HStack
                cursor={"pointer"}
                _hover={{ color: "#DD1470" }}
                transition={"0.3s"}
                onClick={() => AllTaqooslangan(DynamicItem)}
                gap={"5px"}
              >
                {" "}
                <LinkIcon /> <Text>Tanlanganlarga</Text>{" "}
              </HStack>
            </Box>
            </Box>

            <Box display={'flex'}justifyContent={'space-between'} padding={'5px'}>
              
            
            {/* chap tarafdagi rasmlar 👇 */}
            <VStack display={{ base: "none", lg: "block" }}py={"5px"}w={"105px"}h={"438px"}>
              <Box alignItems={"center"}w={"100%"}borderRadius={"10px"}p={"3px"}>
                <Image src={DynamicItem.gallery} w={"75px"} h={"75px"} />
              </Box>
              <Box borderRadius={"10px"} p={"3px"} >
                <Image src={DynamicItem.gallery} w={"75px"} h={"75px"} />
              </Box>
            </VStack>

            {/*  main photo 👇 */}

            <Box display={"flex"}alignItems={"start"}justifyContent={{base:"space-between",lg:'none'}}w={{base:"100%",lg:'auto'}}p={{base:'20px',xl:"34px"}}>

              <Image display={{ base: "none", sm: "none" }} src={toj} />
              <Image w={{base:'130px',sm:'190px',md:'260px',lg:'290px',xl:'326px','2xl':'404px'}} h={{base:'130px',sm:'190px',md:'260px',lg:'300px',xl:"368px"}} src={DynamicItem.img} />
              <Box alignItems={'center'} display={{ base: "flex", lg: "none" }}gap={"10px"}flexDirection={"column"}>
                <Image display={{ base: "block", sm: "none" }} src={toj} />
                <StarIcon cursor={"pointer"}_hover={{ color: "#DD1470" }}transition={"0.3s"}onClick={() => AllTanlanganlar(DynamicItem)}/>
                <LinkIcon cursor={"pointer"}_hover={{ color: "#DD1470" }}transition={"0.3s"}onClick={() => AllTaqooslangan(DynamicItem)}/>
              </Box>

            </Box>

            {/* o'ng tarafadagi bo'lak 👇 */}
            <Box display={{ base: "none", lg: "flex" }}w={{lg:'265px',xl:'358px','2xl':'450xp'}}h={"100px"}border={"1px solid red"}>
              <Image src={toj}w={'40px'}h={'20px'}/>
              <Heading fontSize={'16px'}>Mahsulot haqida qisqacha </Heading>
            </Box>
            </Box>
          </Box>

          {/* 2 - bo'lak 👇 */}
          <Box h={"233px"} w={{lg:'264px','2xl':"380px"}} bg={"#FFF"} p={'16px'}borderRadius={'16px'}>
            <Heading fontSize={'15px'}>Maxsulot narxi</Heading>
            <Text fontSize={'25px'}color={'#DD1470'} fontWeight={'600'}pt={'7px'}>{DynamicItem.old_price_formatted}</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
{
  /*       DYNAMIC CAROUSEL      */
}

const DynamicCarousel = () => {
  const img1 = DynamicItem.gallery[0].original;
  const img2 = DynamicItem.gallery[1].original;
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
