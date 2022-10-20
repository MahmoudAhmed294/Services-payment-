import {
  Affix,
  Box,
  Button,
  Center,
  Group,
  Modal,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { BsChevronDown, BsPencilSquare } from "react-icons/bs";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import { useState } from "react";
import { Title } from "@mantine/core";
import { useNavigate } from 'react-router-dom';

type Props = {};

const Index = (props: Props) => {
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate()

  return (
    <AnimatedComponents>
      <Box
        sx={{
          backgroundColor: "#323232",
          position: "relative",
          borderRadius: 16,
        }}
        py={32}
        mt={48}
      >
        <Group position="center" align="center">
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
            <BsPencilSquare size={25} />
          </Center>
        </Group>
        <Stack p={16}>
          <TextInput label="Name" withAsterisk type="text" />
          <TextInput label="Email" withAsterisk type="email" />
          <TextInput label="Phone Number" withAsterisk type="number" />
          <Select
            label="Your Inquire"
            withAsterisk
            rightSection={<BsChevronDown size={18} />}
            defaultChecked
            sx={{
              ".mantine-Select-item": {
                fontSize: 14,
              },
              ".mantine-Select-label": {
                fontSize: 14,
              },
            }}
            data={[
              { value: "Complaint", label: "Complaint" },
              { value: "Suggestion", label: "Suggestion" },
              { value: "Review", label: "Review" },
            ]}
            size="lg"
          />

          <Textarea label="Inquire details" withAsterisk />
        </Stack>
      </Box>
      <Box sx={{ height: 90 }} />
      <Affix position={{ bottom: 24, left: 16, right: 16 }}>
        <Button onClick={() => setSuccessMessage(true)}>Send</Button>
      </Affix>
      <Modal
        opened={successMessage}
        onClose={() => setSuccessMessage(false)}
        centered
      >
        <Box py={32}>
          <Group position="center" align="center">
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
              <BsPencilSquare size={25} />
            </Center>
          </Group>
          <Title order={4} align="center">
            Your inquire was sent successfully!
            <br /> Thank you
          </Title>
        </Box>
        <Button mt={24} onClick={() => navigate("/home")}>
          Return to home
        </Button>
      </Modal>
    </AnimatedComponents>
  );
};

export default Index;
