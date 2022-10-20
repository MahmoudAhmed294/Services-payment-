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
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { MdKeyboardArrowLeft } from "react-icons/md";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  return (
    <AnimatedComponents noHeader>
      <Stack justify="space-between">
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
            <Title order={1}>Let's sign you in.</Title>
            <Text size={"xl"} color="dark.1">
              Welcome Back.
              <br /> You have been missed!
            </Text>
          </Stack>
        </div>

        <Box component="form" sx={{ minHeight: "50vh" }}>
          <Stack spacing={24}>
            <TextInput
              placeholder="Enter your username or Email"
              type="string"
            />
            <Box>
              <PasswordInput
                placeholder="Enter your Password"
                type="password"
              />
              <Text
                size="sm"
                mt={6}
                sx={{ display: "block" }}
                align="right"
                component={Link}
                to="/forgetPassword"
              >
                Forgot password?
              </Text>
            </Box>

            <Button onClick={()=>navigate("/home")}>Sign in</Button>
          </Stack>
        </Box>
        <Group spacing={3} align="center" position="center" mb={16}>
          <Text size="xs">Don't have an account? </Text>
          <Text size="xs" component={Link} to="/register" color="brand">
            Register
          </Text>
        </Group>
      </Stack>
    </AnimatedComponents>
  );
};

export default Login;
