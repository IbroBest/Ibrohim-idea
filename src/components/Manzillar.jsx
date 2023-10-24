import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import manzil from "../assets/image/manzil.png";
export const Manzil = () => {
  const manzillar = [
    {name:'idea hududlar'},
    { name: "idea Chilonzor" },
    { name: "idea Nurafshon" },
    { name: "idea Yunusobod" },
    { name: "idea Buyuk Ipak yoli" },
    { name: "idea Sergeli" },
    { name: "idea Magnit" },
    { name: "idea Shahrisabz" },
    { name: "idea Qarshi" },
    { name: "idea Zarafshon" },
    { name: "idea Navoiy" },
    { name: "idea Beruniy" },
    { name: "idea Olmaliq" },
    { name: "idea Yangiyul" },
    { name: "idea  Andijon" },
    { name: "idea Angren" },
    { name: "idea Bekobod" },
    { name: "idea  Compass" },
    { name: "idea Chirchiq" },
    { name: "idea Chiroqchi" },
    { name: "idea Koson" },
    { name: "idea Sayram" },
    { name: "idea O`zbegim" },
    { name: "idea Kitob" },
  ];
  return (
    <Box bg={"#f2f3f5"}>
      <Container py={30} maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
        <Box py={5} alignItems={"center"} display={"flex"} >
          <Link to={"/"} style={{ fontSize: "16px" }}>
            Bosh sahifa   
          </Link>
          <Heading color={"#DD1470"} fontWeight={"400"} fontSize={"16px"}>
            {">"}   Bizning manzillar
          </Heading>
        </Box>
        <Box display={"flex"} alignItems={{base:'center',md:'none'}} justifyContent={"space-between"}flexDirection={{base:'column-reverse',md:'row'}} gap={"20px"}>
          {/* <Image src={manzil} w={"73%"} /> */}
          <iframe style={{width:'75%',height:'515px'}} src="https://www.google.com/maps/d/embed?mid=19CycvU-oa9ejv2PMtXjfO7K1I9gzyxg&ehbc=2E312F"></iframe>
          <Box
            width={"379px"}
            h={"auto"}
            background={"#fff"}
            padding={"20px"}
            borderRadius={"10px"}
          >
            <Heading fontWeight={"600"} fontSize={"18px"} mb={"16px"}>
              Hududni tanlang
            </Heading>
            <Box pb={"10px"} display={"flex"} justifyContent={"space-between"}>
              <select style={{ width: "100%" ,border:'1px solid grey',padding:'7px',borderRadius:"7px",marginBottom:'10px'}}>
                {manzillar.map((item) => (
                  <option>{item.name}</option>
                ))}
              </select>
            </Box>
            <hr />
            <Box mt={'10px'} className="locations">
            {manzillar.map((item) => (
              <Text lineHeight={'2.0'} fontSize={'15px'}_hover={{color:'#DD1470'}}transition={'0.3s'}>{item.name}</Text>
              ))}
              </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
