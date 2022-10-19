import { Box, Center, Container, Group, Stack, Title, Text, Divider } from '@mantine/core';
import React from "react";
import { BsCheckLg } from "react-icons/bs";

type Props = {};

const Bill = (props: Props) => {
  return (
    <Box
      sx={{ backgroundColor: "#323232", position: "relative" , borderRadius:16 }}
      py={32}
      mt={48}
    >
      <Group position="center" align="center"  >
        <Center
          sx={{
            backgroundImage: "linear-gradient( #AD712F, #F1BF75)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            position: "absolute",
            top: -26,
          }}
        >
          <BsCheckLg size={25} />
        </Center>
      </Group>
      <Container>
        <Stack spacing={8} align="center" mt={24}>
            <Text size="md">Payment Successful!</Text>
            <Text size="xs" color="dark.2">Bill number:B83423478</Text>
        </Stack>
        <Divider variant="dashed" my={16} color="dark.0"/>
        <Stack spacing={24}>
            <Group position='apart' align="center">
                <Text size="xs">Date:</Text>
                <Text size="xs">January 16, 2022</Text>
            </Group>
            <Group position='apart' align="center">
                <Text size="xs">Time:</Text>
                <Text size="xs">04:35 PM</Text>
            </Group>
            <Group position='apart' align="center">
                <Text size="xs">Water access code:</Text>
                <Text size="xs">000123742</Text>
            </Group>
            <Group position='apart' align="center">
                <Text size="xs">Customer name:</Text>
                <Text size="xs">Loaa hany</Text>
            </Group>
            <Group position='apart' align="center">
                <Text size="xs">Total amount:</Text>
                <Title order={5} > 1200.50 EGP</Title>
            </Group>
            <Group position='apart' align="center">
                <Text size="xs">Paid:</Text>
                <Title order={5} > 1000.00 EGP</Title>
            </Group>
            <Group position='apart' align="center">
                <Text size="xs">Remaining:</Text>
                <Title order={5} > 200.50 EGP</Title>
            </Group>
        </Stack>
      </Container>
    </Box>
  );
};

export default Bill;
