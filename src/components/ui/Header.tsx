import React, { useLayoutEffect } from "react";
import {
  ActionIcon,
  Box,
  Group,
  Indicator,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { BsFillBellFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

type Props = {
  headerTitle?: string;
};

const Header = ({ headerTitle }: Props) => {
  const IsHome = useLocation().pathname === "/home";
  const pageName = useLocation()
    .pathname.split("/")[1]
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLowerCase();

  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.title = headerTitle ? headerTitle : pageName;
  }, [pageName]);

  return (
    <Group position="apart" align="center" p={0}>
      {IsHome ? (
        <Stack spacing={0}>
          <Text color="dark.2">Welcome,</Text>
          <Text>Mahmoud Ahmed</Text>
        </Stack>
      ) : (
        <ActionIcon
          variant="filled"
          color="dark.4"
          onClick={() => navigate(-1)}
        >
          <MdKeyboardArrowLeft size={24} />
        </ActionIcon>
      )}
      {!IsHome && <Title order={5}>{headerTitle ? headerTitle : pageName}</Title>}
      <Group position="right">
        <Indicator dot inline size={12} color="red" withBorder>
          <ActionIcon variant="filled">
            <BsFillBellFill />
          </ActionIcon>
        </Indicator>
      </Group>
    </Group>
  );
};

export default Header;
