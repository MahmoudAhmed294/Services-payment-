import React, { useState } from "react";
import { Affix, Box, ActionIcon, Menu, createStyles } from "@mantine/core";
import { MdMessage, BsPencilSquare, RiDeleteBack2Fill } from "react-icons/all";

type Props = {};

const useStyles = createStyles((theme) => ({
  dropdown: {},
  item: {
    backgroundImage: "linear-gradient( #AD712F, #F1BF75)",
    marginBottom: 8,
    borderRadius: "50%",
    padding: 10,
    width: 44,
    height: 44,
    color: theme.white,
  },
  itemIcon: {
    marginRight: 0,
  },
}));

const Messages = (props: Props) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <Affix position={{ bottom: 100, right: 20 }}>
      <Menu
        shadow="md"
        width={50}
        position="top"
        classNames={classes}
        opened={opened}
        onChange={setOpened}
      >
        <Menu.Target>
          <ActionIcon
            variant="filled"
            size="xl"
            radius="xl"
            sx={{
              backgroundImage: "linear-gradient( #AD712F, #F1BF75)",
              height: "100%",
            }}
          >
            <MdMessage size={25} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown
          sx={{
            backgroundColor: "transparent",
            border: 0,
          }}
        >
          <Menu.Item icon={<MdMessage size={24} />}></Menu.Item>
          <Menu.Item icon={<BsPencilSquare size={24} />}></Menu.Item>
          <Menu.Item
            onClick={() => setOpened(false)}
            icon={<RiDeleteBack2Fill size={24} />}
          ></Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Affix>
  );
};

export default Messages;
