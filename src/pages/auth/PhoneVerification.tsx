import {
  ActionIcon,
  Box,
  Button,
  Group,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { MdKeyboardArrowLeft } from "react-icons/md";
import OtpInput from "react-otp-input";
import { useState } from "react";

type Props = {};

const PhoneVerification = (props: Props) => {
  const [otpValue, setOtpValue] = useState("");
  const navigate = useNavigate();

  const handelChange = (value: string) => {
    setOtpValue(value);
  };
  return (
    <AnimatedComponents>
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
            <Title order={1}>Verification</Title>
            <Text size={"xl"} color="dark.1">
              Enter 4-digit number that
              <br />
              sent to +2011221****
            </Text>
          </Stack>
        </div>

        <Box component="form">
          <Stack justify={"space-between"} sx={{ height: "100%" }}>
            <Group position="apart" align="center" mb={24}>
              <OtpInput
                numInputs={4}
                value={otpValue}
                onChange={handelChange}
                containerStyle={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                inputStyle={{
                  backgroundColor: "#363636",
                  borderRadius: 8,
                  padding: 8,
                  height: 42,
                  width: 70,
                  border: 0,
                  color: "#C4C4C4",
                  fontSize: 20,
                  outline: "1px #C4C4C4",
                }}
              />
            </Group>
            <Button onClick={()=>navigate('/home')}>Continue</Button>
          </Stack>
        </Box>
        <Group spacing={3} align="center" position="center" mb={16}>
          Resend code in 02:34
        </Group>
      </Stack>
    </AnimatedComponents>
  );
};

export default PhoneVerification;
