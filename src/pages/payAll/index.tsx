import { Box, TextInput, Stack, Group, Title, Button, Affix } from "@mantine/core";
import React from "react";
import { BsSearch } from "react-icons/all";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { OurServices } from "../../data";
import ServicesItem from "./components/ServicesItem";

type Props = {};

const Index = (props: Props) => {
  return (
    <AnimatedComponents>
      <Box mt={24}>
        <TextInput
          placeholder="Search for service offer"
          icon={<BsSearch size={25} color="#F3F3F3" />}
        />
      </Box>
      <Stack mt={24} sx={{height:"52vh" , overflowY:"auto"}}>
        {OurServices.map((value, index) => (
          <ServicesItem icon={value.icon} nameBill={value.text} />
        ))}
      </Stack>
      <Affix position={{ bottom: 0, right: 0 , left:0 }}>
      <Box sx={{width:"100%" }} px={16}>
        <Group position="apart" align="center" my={24}>
          <Title order={4}>Total amount:</Title>
          <Title order={4}>3601.50 EGP</Title>
        </Group>
        <Button mb={24}>
        Pay now
        </Button>
      </Box>
      </Affix>
    </AnimatedComponents>
  );
};

export default Index;
