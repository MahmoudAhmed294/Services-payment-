import React from "react";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stack,
  TextInput,
  Title,
  Text,
  PasswordInput,
  Checkbox,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { MdKeyboardArrowLeft } from "react-icons/md";

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();

  return (
    <AnimatedComponents>
      <Stack justify="space-between" >
        <div>
          <Group position="apart" align="center">
            <ActionIcon
              variant="filled"
              color="dark.4"
              onClick={() => navigate(-1)}
            >
              <MdKeyboardArrowLeft size={24} />
            </ActionIcon>
          </Group>
          <Stack mb={32} mt={16}>
            <Title order={1}>Welcome!</Title>
            <Text size={"xl"} color="dark.1">
              Easiest way to manage.
              <br /> your money.
            </Text>
          </Stack>
        </div>

        <Box component="form" sx={{ minHeight: "55vh" }} mb={8}>
          <Stack spacing={24}>
            <TextInput placeholder="Full name" type="string" />
            <TextInput
              placeholder="Phone number"
              type="string"
              maxLength={14}
            />
            <TextInput placeholder="Email " type="email" />
            <div>
              <PasswordInput placeholder="Password" type="password" />
              <Checkbox label="I agree to terms and conditions" color="dark.2" radius={2} size="xs" mt={8} />
            </div>

            <Button onClick={()=>navigate("/phoneVer")}>Register</Button>
          </Stack>
        </Box>
        <Group spacing={3} align="center" position="center" mb={16}>
          <Text size="xs">Already have an account? </Text>
          <Text size="xs" component={Link} to="/login" color="brand">
            Signin
          </Text>
        </Group>
      </Stack>
    </AnimatedComponents>
  );
};

export default Register;
