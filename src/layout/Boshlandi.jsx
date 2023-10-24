import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import image from "../assets/image/image.png";
import Carousel from "../components/carousel";
export const Boshlandi = () => {
  return (
    <Box background={"#f2f2f2"}>
      <Container
        p={5}
        maxW={{ sm:'550px',md: "750px", lg: "1116px", xl: "1576px" }}
        mt={10}
      >
        <Box display={"flex"} gap={"20px"}>
          <Carousel />
          <Image
            display={{ base: "none", lg: "flex" }}
            w={"380px"}
            src={image}
            borderRadius={15}
          />
          <Box
            display={{ base: "none", xl: "block" }}
            background={"#fff"}
            borderRadius={15}
            p={5}
            w={"380px"}
            h={"389px"}
          >
            <Heading mb={5} fontSize={20}>
              Odamlar koʻpincha qidirishadi
            </Heading>
            <Box h={"292px"} className="boshlandi-content">
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Купить телевизор Shivkai
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Sovutgichlar
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Купить телевизор Samsung
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Dazmollar Braun
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Gaz plitasi Samsung
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Купить телевизор Premier
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Sichqonchalar SVEN
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  e Купить телевизор Artel
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Tosterlar Bosch
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Payvandlash apparatlari EPA
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Trimmerlar Xiaomi
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Купить телевизор Ssmart
                </Text>
                <hr />
              </Box>{" "}
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Klaviaturalar va sichqonchalar Dell
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Goʻsht maydalagichlar Mega
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Blenderlar Braun
                </Text>
                <hr />
              </Box>
              <Box mt={3}>
                <Text fontSize={18} mb={4}>
                  Sovutgichlar
                </Text>
                <hr />
              </Box>
            </Box>
            <Box mt={3}></Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
