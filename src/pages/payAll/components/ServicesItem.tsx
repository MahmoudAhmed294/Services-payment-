import React from "react";
import { Box, Checkbox, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

type Props = {
  icon: any;
  nameBill: string;
  link?: string;
};

const ServicesItem = ({ icon, nameBill }: Props) => {
  return (
    <Group position="apart">
      <Group spacing={16}>
        <label
          style={{
            backgroundColor: "#333",
            position: "relative",
            borderRadius: 8,
            height: 73,
            width: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Checkbox
            sx={{
              position: "absolute",
              right: 1,
              top: 5,
              input: {
                borderColor: "#CE9751",
                width: 13,
                height: 13,
              },
            }}
            size="xs"
            radius={1}
            color="brand"
          />
          <Box sx={{ height: 30, svg: { fontSize: 25 } }}>{icon}</Box>
          <Text size="xs">{nameBill}</Text>
        </label>
        <div>
          <Text size="xs">1200.50 EGP</Text>
          <Text color="dark.1" sx={{ fontSize: 10 }}>
            January 16, 2022, 04:35 PM{" "}
          </Text>
        </div>
      </Group>
      <Link
        to="/billService"
        style={{ textDecorationColor: "#C4C4C4", textUnderlineOffset: 3 }}
      >
        <Text size="xs" color="dark.1" sx={{}}>
          More details
        </Text>
      </Link>
    </Group>
  );
};

export default ServicesItem;
