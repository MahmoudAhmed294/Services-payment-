import React from "react";
import BoxWithIcon from "./BoxWithIcon";
import { Box, Group, Title, Text, Button } from "@mantine/core";

type Props = {
  data: {
    icon: any;
    text: string;
    link: string;
  }[];
  title: string;
};

const BoxesContainer = ({ data, title }: Props) => {
  return (
    <Box mt={24} sx={{ width: "100%" }}>
      <Group position="apart" align="baseline">
        <Title order={5} mb={16}>
          {title}
        </Title>
        {data.length > 3 && (
          <Button variant="subtle" color="dark.0" size="sm" fullWidth={false}>
            See all
          </Button>
        )}
      </Group>
      <Box
        sx={{
          overflowY: "hidden",
          overflowX: "auto",
        }}
      >
        <Group
          spacing={16}
          align="center"
          position={data.length > 3 ? "left" : "apart"}
          sx={{
            width:data.length > 3 ? "200vw" : "100%",
            flexWrap: "nowrap",
          }}
        >
          {data.map(({ text, icon, link }, i) => (
            <BoxWithIcon key={i} icon={icon} text={text} link={link} />
          ))}
        </Group>
      </Box>
    </Box>
  );
};

export default BoxesContainer;
