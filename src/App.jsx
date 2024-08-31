import React, { useContext } from "react";
import { Boshlandi } from "./layout/Boshlandi";
import { Box, CircularProgress, Container } from "@chakra-ui/react";
import { SotuvlarXiti } from "./products/SotuvlarXiti";
import { MobilTelefonlar } from "./products/MobilTelefonlar";
import { MaishiyTexnika } from "./products/KattaMaishiyTexnika";
import { OshxonaUchun } from "./products/OshxonaUchun";
import { Context } from "./context/Context";
import { SaleAndVidio } from "./products/SaleAndVidio";
import { Kategors } from "./products/Kategors";
import "./style/mainResponsive.css";
import { BottomHeader } from "./layout/BottomHeader";

const App = () => {
  const { data } = useContext(Context);
  return (
    <Box background={"#f2f3f5"}>
      {/* {!data.length && (
        <Box
          background={"#FFF"}
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          top={{ base: "-10%", md: "-23%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          zIndex={9}
        >
          <CircularProgress
            position={"fixed"}
            isIndeterminate
            color="#DD1470"
          />
        </Box>
      )} */}
      <Boshlandi />
      <SotuvlarXiti />
      <MobilTelefonlar />
      <MaishiyTexnika />
      <SaleAndVidio />
      <OshxonaUchun />
      <Kategors />
      <BottomHeader/>
    </Box>
  );
};

export default App;

// https://api.idea.uz/api/v2/products?quantity=6
