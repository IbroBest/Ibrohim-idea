import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { DeleteIcon, LinkIcon, PlusSquareIcon } from "@chakra-ui/icons";

export const Searchproduct = () => {
  const {searchProduct,inputValue} = useContext(Context);

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
            {"  >  "}Qidiruv
          </Heading>
        </Box>

        <Heading display={"flex"} color={"#c0c0c0"}>
          <Text color={"#282f4c"} fontWeight={"600"}>
            Qidiruv 
          </Text>
          {` «${inputValue}»`}
        </Heading>

        {/* Main */}
        <Box display={"flex"}justifyContent={{ base: "none", lg: "space-between" }}flexDirection={{ base: "column", lg: "row" }}gap={"40px"}mb={"50px"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box mb={"10px"}p={"24px"}h={"174px"}w={{ lg: "670px", xl: "932px", "2xl": "1000px" }}borderRadius={"10px"}display={"flex"}justifyContent={"space-between"}alignItems={"center"}background={"#fff"}gap={0}flexDirection={{ base: "column", md: "row" }}>
              <Box
                display={"flex"}
                w={"100%"}
                alignItems={{ base: "start", md: "center" }}
              >
                {/* <Image w={"120px"} h={"120px"} src={searchProduct.image[0]} /> */}
                <Box display={"flex"} flexDirection={"column"}>
                  <Box display={"flex"} gap={3}>
                    <Text
                      color={"#282f3c"}
                      fontSize={{ base: "13px", md: "18px" }}
                      fontWeight={"800"}
                    >
                      30000
                    </Text>
                    <Heading
                      display={{ base: "none", md: "flex" }}
                      p={"5px 8px"}
                      color={"white"}
                      borderRadius={"100px"}
                      fontSize={{ base: "13px", md: "18px" }}
                      background={"#DD1470"}
                    >
                      Toliq tolov{">"}
                    </Heading>
                  </Box>
                  <Box display={"flex"} gap={"7px"}>
                    <Text
                      pt={1.2}
                      color={"#282f3c"}
                      w={{ base: "130px", md: "80%" }}
                      fontSize={{ base: "10px", md: "18px" }}
                      fontWeight={"500"}
                      _hover={{ color: "#DD1470" }}
                    >
                      desc
                    </Text>
                  </Box>
                  <Text fontSize={{ base: "10px", md: "18px" }} pt={2}>
                    Mahsulot kodi: 4688
                  </Text>
                </Box>
              </Box>
              <Box
                display={"flex"}
                w={{ base: "100%", md: "auto" }}
                pl={{ base: "20px", md: "0px" }}
                alignItems={{ base: "start", md: "center" }}
                gap={7}
                pr={7}
              >
                <DeleteIcon
                  transition={"0.3s"}
                  fontSize={{ base: "20px", md: "30px" }}
                  onClick={() => DeleteData(item.id)}
                  _hover={{ color: "#DD1470" }}
                  className="savat__icons"
                  color={"rgb(148, 153, 165)"}
                />
                <PlusSquareIcon
                  transition={"0.3s"}
                  fontSize={{ base: "20px", md: "30px" }}
                  onClick={() => SubmitData(item)}
                  _hover={{ color: "#DD1470" }}
                  className="savat__icons"
                  color={"rgb(148, 153, 165)"}
                />
                <LinkIcon
                  transition={"0.3s"}
                  fontSize={{ base: "20px", md: "30px" }}
                  onClick={() => AllTaqooslangan(item)}
                  _hover={{ color: "#DD1470" }}
                  className="savat__icons"
                  color={"rgb(148, 153, 165)"}
                />
              </Box>
            </Box>
          </Box>

          <Box className="royxat"w={{ base: "100%", lg: "280px", xl: "300px", "2xl": "360px" }}h={"250px"}background={"#fff"}padding={"20px"}borderRadius={"10px"}>
            <Heading fontWeight={"600"} fontSize={"18px"} mb={"16px"}>
              Sizning istaklaringiz roʻyxati
            </Heading>
            <Box pb={"10px"} display={"flex"} justifyContent={"space-between"}>
              <Text fontSize={"14px"} fontWeight={"400"}>
                Mahsulotlar soni
              </Text>
            </Box>
            <hr />

            <Button
              background={"none"}
              border={"1px solid #DD1470"}
              _hover={{ background: "#DD1470", color: "white" }}
              transition={"0.4s"}
              color={"#DD1470"}
              m={"30px 0 16px 0 "}
              w={"100%"}
              p={"14px 36px"}
            >
              hammasini o'chirish
            </Button>
            <Link to={"/savatcha"}>
              <Button
                w={"100%"}
                p={"14px 36px"}
                background={"#DD1470"}
                color={"white"}
                _hover={{ background: "rgb(172, 32, 95)" }}
              >
                Savatga o'tish
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
