import React from "react";
import { Box, Checkbox, Group, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

type Props = {
  icon: any;
  nameBill: string;
  link?: string;
  status: string;
};

const PaymentHistoryItem = ({ icon, nameBill, status }: Props) => {
  return (
    <Group position="apart">
      <Group spacing={16}>
        <Box
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
          <Box sx={{ height: 30, svg: { fontSize: 25 } }}>{icon}</Box>
          <Text sx={{ fontSize: 11 }}>{nameBill}</Text>
        </Box>
        <div>
          <Text size="xs">1200.50 EGP</Text>
          <Text color="dark.1" sx={{ fontSize: 10 }}>
            January 16, 2022, 04:35 PM{" "}
          </Text>
        </div>
      </Group>
      <Box
        sx={{
          backgroundColor:
            status === "Success"
              ? "#509C57"
              : status === "Overdue"
              ? "#A12D2D"
              : "#CE9751",
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Text size="xs">More details </Text>
      </Box>
    </Group>
  );
};

export default PaymentHistoryItem;
