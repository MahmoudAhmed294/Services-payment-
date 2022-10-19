import React from "react";
import { Box, Center, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

type Props = {
  icon: any;
  link: string;
  text: string;
};

const BoxWithIcon = ({ icon, text, link }: Props) => {
  return (
    <Center
      component={Link}
      to={link}
      sx={{
        borderRadius: 8,
        padding: 8,
        backgroundColor: "#363636",
        width: 94,
        height: 103,
        color:"#F3F3F3",
        textDecoration: "none",
      }}
      
    >
      <Stack justify="center" align={"center"} sx={{
        textAlign: "center",
        svg:{
            fontSize:30,
        }
      }}>
        {icon}
        <Text size="xs">{text}</Text>
      </Stack>
    </Center>
  );
};

export default BoxWithIcon;
