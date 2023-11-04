import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Box, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { DeleteIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import taqqoslashLogo from "../assets/image/taqqoslashLogo.png";

export const Taqqoslash = () => {
  const { taqqoslash, setTaqqoslash } = useContext(Context);

  const DeleteData = (id) => {
    let beforeDel = taqqoslash.filter((item) => item.id !== id);
    setTaqqoslash(beforeDel);
  };
  return (
    <Box background={"#f2f3f5"}>
      <Container
        pb={10}
        maxW={{ sm: "550px", md: "750px", lg: "1116px", xl: "1576px" }}
      >
        <Box py={5} alignItems={"center"} display={"flex"}>
          <Link to={"/"} style={{ fontSize: "16px" }}>
            Bosh sahifa   
          </Link>
          <Heading color={"#DD1470"} fontWeight={"400"} fontSize={"16px"}>
            {"  >  "}Taqqoslash
          </Heading>
        </Box>
        {taqqoslash.length === 0 && (
          <Container borderRadius={'5px'}pb={10}maxW={"1576px"}display={"flex"}flexDirection={"column"}alignItems={"center"}background={"#fff"}p={5}w={"100%"}gap={4}>
            <Image src={taqqoslashLogo}w={{base:'350px',md:"550px"}} h={{base:'200px',md:"260px"}} />
            <Text color={"#282f3c"} fontSize={"24px"} fontWeight={"600"}>
              Taqqoslashga hozircha hech narsa yoʻq
            </Text>
            <Text color={"#282f3c"} fontSize={"14px"} fontWeight={"400"}>
              Mahsulot kartochkasida joylashgan halqalar orqali, taqqoslashni
              bosib mahsulotlarni qoʻshishingiz mumkin
            </Text>
            <Link to={"/"} className="bosh-sahifaga-otish__btn">
              bosh sahifaga otish
            </Link>
          </Container>
        )}
        {taqqoslash.length > 0 && (
          <Box overflow={"hidden"}bg={"#fff"}p={"24px"}borderRadius={"10px"}display={"flex"}>
            {taqqoslash.map((item) => (
              <Box className="taqqoslash__item"pr={"5"}mx={"5"}borderRight={"1px solid grey"}display={"flex"}flexDirection={"column"}w={"220px"}key={item.id}
              >
                <Box mb={"20px"} p={3} alignItems={"center"}>
                  <DeleteIcon fontSize={"22px"}_hover={{ color: "#DD1470" }}transition={"0.4s"}onClick={() => DeleteData(item.id)}/>
                  <Image w={"100%"}objectFit={"cover"}h={"160px"}src={item.img}/>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    {" "}
                    <Heading fontWeight={"800"}display={"flex"}fontSize={"18px"}>
                      {item.current_price_formatted}
                    </Heading>
                    <span style={{ fontSize: "13px" }}> x 0oy</span>{" "}
                  </Box>
                  <Link style={{ fontSize: "16px", fontWeight: "400" }}>
                    {item.slug}
                  </Link>
                </Box>
                <Box>
                  <Heading fontWeight={"700"} fontSize={"18px"}>
                    Firk mulohozalar
                  </Heading>
                  <hr />
                  <Box my={"15px"}>
                    <StarIcon color={"#FC9700"} fontSize={"11px"} mr={"3px"} />
                    <StarIcon color={"#FC9700"} fontSize={"11px"} mr={"3px"} />
                    <StarIcon color={"#FC9700"} fontSize={"11px"} mr={"3px"} />
                    <StarIcon color={"#FC9700"} fontSize={"11px"} mr={"3px"} />
                    <StarIcon color={"#FC9700"} fontSize={"11px"} mr={"3px"} />
                    <Heading fontSize={"15px"} mt={"1px"} fontWeight={"400"}>
                      0 fikr-mulohazalar
                    </Heading>
                  </Box>
                  <hr />
                  <Heading fontWeight={"700"} fontSize={"18px"}>
                    Umumiy xususiyatlar
                  </Heading>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};
