import {
  Box,
  Avatar,
  Group,
  FileButton,
  ActionIcon,
  Stack,
  TextInput,
} from "@mantine/core";
import { DatePicker, DateRangePicker } from "@mantine/dates";
import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import AnimatedComponents from "../../components/RouteAnimated/AnimatedComponents";

type Props = {};

const Index = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <AnimatedComponents headerTitle="Profile">
      <Group position="center" my={40}>
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => (
            <ActionIcon {...props}>
              <Avatar size="xl" radius={100} />
            </ActionIcon>
          )}
        </FileButton>
      </Group>
      <Stack spacing={16}>
        <TextInput
          label="Name on card"
          value={"Loaa hany"}
          rightSection={<HiPencil />}
        />
        <DatePicker
          label="Date of birth"
          size="lg"
          defaultValue={new Date()}
          sx={{
            input: {
              fontSize: 14,
            },
            ".mantine-DatePicker-label": {
              fontSize: 14,
            },
          }}
        />

        <TextInput
          label="Address"
          value="alexandria"
          rightSection={<HiPencil />}
        />
        <TextInput
          label="Phone number"
          value="0123467889"
          rightSection={<HiPencil />}
        />
        <TextInput
          label="Change password"
          type="password"
          value="1235554854"
          rightSection={<HiPencil />}
        />
      </Stack>
    </AnimatedComponents>
  );
};

export default Index;
