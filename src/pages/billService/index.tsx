import React from "react";
import {
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { IoIosWater } from "react-icons/all";
import { Outlet, useNavigate } from "react-router-dom";

type Props = {};

const Index = (props: Props) => {
  return (
    <AnimatedComponents noContainer>
      <Center
        sx={{ backgroundColor: "#323232", padding: 16, width: "100%" }}
        mt={32}
      >
        <Stack align="center" spacing={0}>
          <IoIosWater size={44} />
          <Text size="xs" color="dark.1" mt={8}>
            Please pay
          </Text>
          <Title order={3}> 1250.50 EGP </Title>
        </Stack>
      </Center>
      <Outlet />
    </AnimatedComponents>
  );
};

export default Index;
