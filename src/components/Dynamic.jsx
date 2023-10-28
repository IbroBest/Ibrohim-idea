import { Box, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { LinkIcon, StarIcon } from "@chakra-ui/icons";

export const Dynamic = () => {
  const { DynamicItem, setDynamicItem ,attributes,setAtributes, AllTanlanganlar,AllTaqooslangan } = useContext(Context);
  const params = useParams();
  const productId = params.id;

  const AddTanlanganlar = (item) => {
    AllTanlanganlar(item);
  };
  const AddTaqqoslash = (item) => {
    AllTaqooslangan(item);
  };
  useEffect(() => {
    axios
      .get(`https://api.idea.uz/api/v2/products/${productId}/attributes`)
      .then((res) => setAtributes(res.data.data))
      console.log(attributes);

      // error 👇
      // .catch((error) => console.log(error));
  }, [productId]);

  useEffect(() => {
    axios
      .get(`https://api.idea.uz/api/v2/products/${productId}`)
      .then((res) => setDynamicItem(res.data.data));
      // console.log(DynamicItem);
  }, [productId]);

  return (
    <Box background={"#f2f3f5"}>
      <Container maxW={{ sm: "550px", md: "750px", lg: "1116px", xl: "1576px" }}>

        {/* saliha ko'rsatuvchi 👇 */}
      <Box py={5} alignItems={"center"} display={"flex"}>
            <Link to={"/"} style={{ fontSize: "16px" }}>
              Bosh sahifa
            </Link>
            {"  >  "} 
            <Text cursor={'pointer'}>Smatfonlar</Text>
            
            <Text color={'#DD1470'}>{"  >  "} {DynamicItem.slug}</Text>

          </Box>

          {/* Main  👇*/}
        <Box gap={'20px'} display={'flex'} py={'30px'}>

          {/* Birinchi bo'lak 👇 */}
          <Box p={'24px'} h={"auto"} w={"1177px"} bg={"#FFF"} borderRadius={'12px'}>
              <Heading fontSize={'32px'} fontWeight={'600'}>{DynamicItem.slug}</Heading>
                <Box display={'flex'} gap={'10px'}py={'9px'}>
                  <HStack cursor={'pointer'}_hover={{color:'#DD1470'}} transition={'0.3s'} onClick={()=>AllTanlanganlar(DynamicItem)}  gap={'5px'}> <StarIcon/> <Text>Tanlanganlarga</Text> </HStack>
                  <HStack cursor={'pointer'}_hover={{color:'#DD1470'}} transition={'0.3s'} onClick={()=>AllTaqooslangan(DynamicItem)} gap={'5px'}> <LinkIcon/> <Text>Tanlanganlarga</Text> </HStack>
                </Box>


                <HStack py={'20px'}alignItems={'start'} justify={'space-between'}>

                    {/* pach tarafdagi rasmlar 👇 */}
                  <VStack py={'5px'} w={'105px'}h={'438px'} border={'1px solid red'}>

                    <Box borderRadius={'10px'} p={'3px'} border={'1px solid #DD1470'}>
                      <Image src={DynamicItem.gallery} w={'75px'}h={'75px'}/>
                    </Box>
                    <Box borderRadius={'10px'} p={'3px'} border={'1px solid #DD1470'}>
                      <Image src={DynamicItem.gallery} w={'75px'}h={'75px'}/>
                    </Box>

                  </VStack>

                   {/*  main photo 👇 */}
                  <Box border={'1px solid red'} p={'34px'}>
                    <Image w={'463px'}h={'438px'}  src={DynamicItem.img}/>
                  </Box>

                  <Box w={'433px'}h={'100px'} border={'1px solid red'}></Box>

                </HStack>
          </Box>

          {/* Ikkinchi bo'lak 👇 */}
          <Box h={"233px"} w={"380px"}bg={"#FFF"}></Box>
        </Box>
      </Container>
    </Box>
  );
};
