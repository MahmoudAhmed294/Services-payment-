import React from "react";
import {
  Container,
  Stack,
  Title,
  Box,
  TextInput,
  Group,
  Checkbox,
  Button,
} from "@mantine/core";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";
import {
  HiPencil,
  BsCreditCard2BackFill,
  BsFillPersonFill,
} from "react-icons/all";

type Props = {};
const Index = (props: Props) => {
  return (
    <AnimatedComponents noContainer>
      <Container mt={24}>
        <Title order={4}>Add new Card</Title>
      </Container>

      <Box sx={{ backgroundColor: "#323232" }} py={32} component={"form"}>
        <Container>
          <Stack spacing={14}>
            <TextInput
              type="number"
              label="Card number"
              icon={<HiPencil color="#F3F3F3" size={25} />}
              rightSection={
                <Box mr={16} mt={8}>
                  <BsCreditCard2BackFill size={25} color="#F3F3F3" />
                </Box>
              }
            />
            <Group position="apart">
              <TextInput
                label="Expire date"
                icon={<HiPencil color="#F3F3F3" size={25} />}
                sx={{
                  width: "47%",
                }}
              />
              <TextInput
                label="CVV"
                placeholder="CVV"
                type="number"
                sx={{
                  width: "47%",
                }}
              />
            </Group>
            <Box>
              <TextInput
                type="text"
                label="Cardholder name"
                icon={<HiPencil color="#F3F3F3" size={25} />}
                rightSection={
                  <Box mr={16} mt={8}>
                    <BsFillPersonFill size={25} color="#F3F3F3" />
                  </Box>
                }
              />
              <Checkbox
                label="I agree to terms and conditions"
                color="dark.2"
                radius={2}
                size="xs"
                mt={8}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Button mt={80}>Confirm</Button>
      </Container>
    </AnimatedComponents>
  );
};

export default Index;
