import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { DeleteIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";
import basketLogo from "../assets/image/basket.png";
import { Link } from "react-router-dom";
export const Savatcha = () => {
  const { basket,AllTanlanganlar,AllTaqooslangan} = useContext(Context);
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
        <Box display={"flex"} gap={"20px"} >

            <Box w={"1177px"}>
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
                  w={"100%"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Image w={"120px"} h={"120px"} src={item.img} />
                    <Box display={"flex"} flexDirection={"column"}>
                      <Box display={"flex"} gap={3}>
                        <Text
                          color={"#282f3c"}
                          fontSize={"18px"}
                          fontWeight={"800"}
                        >
                          {item.current_price_formatted}
                        </Text>
                        <Heading
                          p={"5px 8px"}
                          color={"white"}
                          borderRadius={"100px"}
                          fontSize={"16px"}
                          background={"#DD1470"}
                        >
                          Toliq tolov{">"}
                        </Heading>
                      </Box>
                      <Box display={"flex"} gap={"7px"}>
                        <Text
                          pt={1.2}
                          color={"#282f3c"}
                          fontSize={"16px"}
                          fontWeight={"500"}
                          _hover={{ color: "#DD1470" }}
                        >
                          {item.slug}
                        </Text>
                        <Text
                          pt={1.2}
                          p={"2px 5px"}
                          background={"yellow.300"}
                          borderRadius={"100px"}
                        >
                          {item.discount}
                        </Text>
                      </Box>
                      <Text pt={2}>Mahsulot kodi: 4688</Text>
                    </Box>
                  </Box>
                  <Box display={"flex"} gap={7} pr={7}>
                    <DeleteIcon
                      onClick={() => DeleteData(item.id)}
                      _hover={{ color: "#DD1470" }}
                      className="savat__icons"
                      color={"rgb(148, 153, 165)"}
                      w={"32px"}
                      h={"32px"}
                    />
                    <StarIcon
                    onClick={()=>AddTanlanganlar(item)}
                      _hover={{ color: "#DD1470" }}
                      className="savat__icons"
                      color={"rgb(148, 153, 165)"}
                      w={"32px"}
                      h={"32px"}
                    />
                    <LinkIcon
                    onClick={()=>AllTaqooslangan(item)}
                      _hover={{ color: "#DD1470" }}
                      className="savat__icons"
                      color={"rgb(148, 153, 165)"}
                      w={"32px"}
                      h={"32px"}
                    />
                  </Box>
                </Box>
              ))}
            </Box>


          {basket.length > 0 && (
            <Box
              p={"24px"}
              w={"400px"}
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
      </Container>
    </Box>
  );
};
