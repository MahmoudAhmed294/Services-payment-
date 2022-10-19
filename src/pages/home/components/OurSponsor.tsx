import React from "react";
import sp1 from "../../../assets/Sp1.png";
import sp2 from "../../../assets/Sp2.png";
import sp3 from "../../../assets/Sp3.png";
import sp4 from "../../../assets/Sp4.png";

import { Box, Group, Image } from "@mantine/core";

type Props = {};

const OurSponsor = (props: Props) => {
  return (
    <Box
      sx={{
        overflowY: "hidden",
        overflowX: "auto",
        height: 130,
        backgroundColor: "#323232",
        display: "flex",
        alignItems: "center",
      }}
      px={24}
      mt={32}
      mb={70}
    >
      <Group
        spacing={16}
        align="center"
        position={"left"}
        sx={{
          width: "200vw",
          flexWrap: "nowrap",
        }}
      >
        {[sp1, sp2, sp3, sp4].map((value, index) => (
          <Image
            src={value}
            alt="sponsor"
            fit="contain"
            width={100}
            height={70}
          />
        ))}
      </Group>
    </Box>
  );
};

export default OurSponsor;
