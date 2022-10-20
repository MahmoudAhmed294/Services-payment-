import React from "react";
import { Box, Text } from "@mantine/core";

type Props = {
  fromCustomerService?: boolean;
  text: string;
};

const Message = ({ fromCustomerService, text }: Props) => {
  return (
    <div>
      <Box
        p={16}
        sx={{
          borderRadius: 8,
          border: fromCustomerService ? "unset" : "1px solid #C4C4C4",
          backgroundColor: fromCustomerService ? "#363636" : "transparent",
          maxWidth: "70%",
          width: "fit-content",
          marginLeft: fromCustomerService ? "unset" : "auto",
        }}
      >
        <Text size="xs" color="dark.1">
          {text}
        </Text>
      </Box>
      {fromCustomerService && (
        <Text size="xs" color="dark.1">
          4 minutes ago
        </Text>
      )}
    </div>
  );
};

export default Message;
