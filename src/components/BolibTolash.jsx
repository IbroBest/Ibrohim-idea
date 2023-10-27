import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const BolibTolash = () => {
  return (
    <Box background={"#f2f3f5"}>
      <Container
        pb={10}
        maxW={{
          sm: "550px",
          md: "750px",
          lg: "1116px",
          xl: "1576px",
          "2xl": "1576px",
        }}
      >
        <Box py={5} alignItems={"center"} display={"flex"}>
          <Link to={"/"} style={{ fontSize: "16px" }}>
            Bosh sahifa
          </Link>
          <Heading color={"#DD1470"} fontWeight={"400"} fontSize={"16px"}>
            {"  >"} Bo'lib to'lash
          </Heading>
        </Box>

        <Box borderRadius={'10px'} p={'24px'} bg={"#FFF"} w={"100%"} h={"auto"}>
          <Text>
            <span style={{fontWeight:'700'}}>idea</span> maishiy texnika va elektronika do'konida siz butun assortiment uchun bir zumda muddatli to`lash rejasini olishingiz mumkin. 
            <br /><br />
            Hozir - oling, keyin - toʻlang! 
            <br /><br />
            Idea do‘konlar tarmog‘ining barcha filiallarida maishiy texnika va elektronika mahsulotlarini oldindan to‘lovsiz va Toshkent shahri bo‘ylab bepul yetkazib berish bilan 6, 12, 18, 24 yoki 30 oylik muddatli to'lovga xarid qilishingiz mumkin.
            <br /><br />
            Muddatli to'lovga xarid qilinayotgan mahsulotlarni ro'yxatdan o'tkazish shartlari va hujjatlari:
            <br /><br />
            <span style={{fontWeight:'700'}}> 1. Pasportni rasmiylashtirish, shartlar: </span>
            <br /><br />
            . 1 350 000 so'mdan ortiq ish haqilik rasmiy ish bilan ta'minlangan;
            <br /><br />
            <span style={{fontWeight:'700'}}> 2. Pasport + Uzcard yoki Humo plastik kartasi: </span>
            <br /><br />
            .kamida 1 200 000 so'm doimiy oylik tushumlar bilan kartadan foydalanish muddati 3 oydan kam bo'lmagan; 
            <br /><br />
            . O‘zbekiston bo‘ylab berilgan. 
            <br /><br />
            Muddatli to'lov to'g'risidagi qarorni skoring natijalaridan so'ng darhol olish mumkin. 
            <br /><br />
            Tovarlarni muddatli to'lov orqali sotib olish uchun minimal qiymat 500 000 so'm. 
            <br /><br />
            Siz idea.uz saytida onlayn soʻrov qoldirib yoki doʻkonlarimizdan biriga tashrif buyurib muddatli to'lov uchun ariza berishingiz mumkin.
            <br /><br />
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
