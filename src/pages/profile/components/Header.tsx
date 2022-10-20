import {
    ActionIcon,
    Avatar,
    Group,
    Indicator,
    Stack,
    Text,
  } from "@mantine/core";
  import { BsFillBellFill } from "react-icons/all";
  
type Props = {}

const Header = (props: Props) => {
  return (
    <Group position="apart" align="center" p={0}>
    <Group spacing={5}>
      <Avatar radius="xl" size="lg" />
      <Stack spacing={0}>
        <Text color="dark.2">Welcome,</Text>
        <Text>Mahmoud Ahmed</Text>
      </Stack>
    </Group>
    <Group position="right">
      <Indicator dot inline size={12} color="red" withBorder>
        <ActionIcon variant="filled">
          <BsFillBellFill />
        </ActionIcon>
      </Indicator>
    </Group>
  </Group>
)
}

export default Header