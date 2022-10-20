import React from "react";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Text,
  TextInput,
  Stack,
  Container,
} from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import CardBackground from "../../assets/bgCard.svg";
import BoxesContainer from "./components/BoxesContainer";
import { myFlats, OurServices } from "../../data";
import Footer from "../../components/ui/Footer";
import OurSponsor from "./components/OurSponsor";
import Messages from "./components/MessagesModel";
import TotalBalance from "../../components/ui/TotalBalance";

type Props = {};

const Index = (props: Props) => {
  return (
    <AnimatedComponents>
      <Container size="lg" sx={{ height: "100%" }}>
        <Box mt={24}>
          <TextInput
            placeholder="Search for service offer"
            icon={<BsSearch size={25} color="#F3F3F3" />}
          />
        </Box>
        <Box mt={24}>
          <TotalBalance  />
        </Box>
        <BoxesContainer data={myFlats} title="My Flats" />
        <BoxesContainer data={OurServices} title="Our Services" />
      </Container>

      <OurSponsor />
      <Messages />
      <Footer />
    </AnimatedComponents>
  );
};

export default Index;
