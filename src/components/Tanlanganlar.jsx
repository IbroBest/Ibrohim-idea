import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Box, Button, Container, Heading, Image, Text, background } from "@chakra-ui/react";
import { DeleteIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import tanlanganlarLogo from "../assets/image/tanlanganlarLogo.png";

export const Tanlanganlar = () => {
  const { tanlanganlar,setTanlanganlar } = useContext(Context);

  const AllDeleteTanlanganlar = (ides)=>{

  }
  const DeleteData = (id)=>{
      let beforeDel = tanlanganlar.filter((item)=> item.id !== id);
      setTanlanganlar(beforeDel)
  }

  return (
    <Box background={"#f2f3f5"}>
      
      <Container pb={10} maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}>
      <Box py={5} alignItems={"center"} display={"flex"}>
            <Link to={"/"} style={{ fontSize: "16px" }}>
              Bosh sahifa
            </Link>
            <Heading color={"#DD1470"} fontWeight={"400"} fontSize={"16px"}>
            {"  >"} tanlanganlar
            </Heading>
          </Box>
      {tanlanganlar.length === 0 && (
            <Container
              maxW={"1576px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              background={"#fff"}
              p={5}
              w={"100%"}
              gap={4}
            >
              <Image src={tanlanganlarLogo} w={"300px"} h={"22  0px"} />
              <Text color={"#282f3c"} fontSize={"24px"} fontWeight={"600"}>
                Tanlanganlarda hozircha hech narsa yoʻq
              </Text>
              <Text color={"#282f3c"} fontSize={"14px"} fontWeight={"400"}>
                Mahsulot kartochkasida joylashgan yurakchani bosib,
                mahsulotlarni qoʻshishingiz mumkin
              </Text>
              <Link to={"/"} className="bosh-sahifaga-otish__btn">
                bosh sahifaga otish
              </Link>
            </Container>
          )}
        <Box display={'flex'} gap={'20px'}>
        <Box display={'flex'} flexDirection={'column'}>

          {tanlanganlar.map((item) => (
            <Box
              mb={'10px'}
              p={'24px'}
              h={'174px'}
              borderRadius={'10px'}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              key={item.id}
              background={"#fff"}
              w={'1177px'}
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
                  _hover={{ color: "#DD1470" }}
                  className="savat__icons"
                  color={"rgb(148, 153, 165)"}
                  w={"32px"}
                  h={"32px"}
                />
                <LinkIcon
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

         {tanlanganlar.length > 0 &&  
            <Box width={'379px'} h={'250px'} background={'#fff'} padding={'20px'} borderRadius={'10px'} >
              <Heading fontWeight={'600'}fontSize={'18px'} mb={'16px'}>Sizning istaklaringiz roʻyxati</Heading>
              <Box pb={'10px'} display={'flex'}justifyContent={'space-between'}>
                <Text fontSize={'14px'}fontWeight={'400'}>Mahsulotlar soni</Text>
                <Text>{tanlanganlar.length}</Text>
              </Box>
              <hr />

              <Button onClick={AllDeleteTanlanganlar(tanlanganlar.length)} background={'none'}border={'1px solid #DD1470'}_hover={{background:"#DD1470",color:'white'}}transition={'0.4s'}color={'#DD1470'} m={'30px 0 16px 0 '} w={'100%'}p={'14px 36px'} >hammasini o'chirish</Button>
              <Button w={'100%'}p={'14px 36px'} background={'#DD1470'} color={'white'} _hover={{background:'rgb(172, 32, 95)'}}>Savatga o'tish</Button>
          </Box>
          }
        </Box>
      </Container>
    </Box>
  );
};
