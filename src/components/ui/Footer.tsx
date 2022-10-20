import { ActionIcon, Affix, Box, Group, Indicator } from "@mantine/core";
import React from "react";
import { HiChartPie, MdPerson, RiHome7Fill } from "react-icons/all";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const navigate = useNavigate();
  const currentLocation = useLocation().pathname;
  const stylesIcon = {
    svg: {
      color: "#F1BF75",
    },
    ".mantine-Indicator-indicator": {
      backgroundImage: "linear-gradient( #AD712F, #F1BF75)",
    },
  };

  return (
    <Affix position={{ left: 0, right: 0, bottom: -8 }}>
      <Group position="center" align={"flex-start"} sx={{ width: "100%" }}>
        <Group
          position="apart"
          align="center"
          sx={{
            width: "90%",
            backgroundColor: "#222222",
            padding: "12px 32px 16px",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <ActionIcon onClick={() => navigate("/home")}>
            <Indicator
              position="bottom-center"
              sx={
                currentLocation === "/home"
                  ? stylesIcon
                  : {
                      ".mantine-Indicator-indicator": {
                        visibility: "hidden",
                      },
                    }
              }
              size={8}
            >
              <RiHome7Fill size={25} />
            </Indicator>
          </ActionIcon>
          <Indicator
            position="bottom-center"
            sx={
              currentLocation === "/paymentHistory"
                ? stylesIcon
                : {
                    ".mantine-Indicator-indicator": {
                      visibility: "hidden",
                    },
                  }
            }
            size={8}
          >
            <ActionIcon onClick={() => navigate("/paymentHistory")}>
              <HiChartPie size={25} />
            </ActionIcon>
          </Indicator>
          <Indicator
            position="bottom-center"
            sx={
              currentLocation === "/profile"
                ? stylesIcon
                : {
                    ".mantine-Indicator-indicator": {
                      visibility: "hidden",
                    },
                  }
            }
            size={8}
          >
            <ActionIcon onClick={() => navigate("/profile")}>
              <MdPerson size={25} />
            </ActionIcon>
          </Indicator>
        </Group>
      </Group>
    </Affix>
  );
};

export default Footer;
