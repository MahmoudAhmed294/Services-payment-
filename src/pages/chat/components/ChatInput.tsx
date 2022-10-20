import React, { useState } from "react";
import { ActionIcon, Affix, Box, TextInput } from "@mantine/core";
import { BiSend, MdOutlineMood } from "react-icons/all";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";

type Props = {
  selectedEmoji?: any;
};

const ChatInput = ({ selectedEmoji }: Props) => {
  return (
    <>
      <Affix position={{ bottom: 32, right: 16, left: 16 }}>
        <TextInput
          placeholder="Type a message"
          size="xl"
          radius="lg"
          value={selectedEmoji}
          icon={
            <ActionIcon>
              <MdOutlineMood size={25} />
            </ActionIcon>
          }
          rightSection={
            <ActionIcon mr={16} color="brand">
              <BiSend size={25} />
            </ActionIcon>
          }
        />
      </Affix>
    </>
  );
};

export default ChatInput;
