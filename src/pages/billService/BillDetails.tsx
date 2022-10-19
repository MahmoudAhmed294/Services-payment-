import { Group, Stack, Title, Text, Container, Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { BillDetailsData } from "../../data";

type Props = {};

const BillDetails = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Stack
        sx={{ backgroundColor: "#323232", padding: 16, width: "100%" }}
        spacing={14}
        mt={16}
      >
        <Title order={4}>Transaction details</Title>
        {BillDetailsData.map(({ title, value }) => (
          <Group position="apart">
            <Text size="xs" color="dark.1">
              {title}
            </Text>
            <Text size="xs">{value}</Text>
          </Group>
        ))}
      </Stack>
      <Container size="lg">
        <Stack mt={24}>
          <Button size="lg" onClick={() => navigate("/billService/billType")}>
            <Text>Add to bill pay checkout</Text>
          </Button>
          <Button variant="subtle" color="dark.0" size="sm" onClick={() => navigate("/payAll")}>
            Pay more then one service
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default BillDetails;
