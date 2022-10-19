import { Global } from "@mantine/core";

import regular from "../assets/fonts/Roboto-Regular.ttf";
import font600 from "../assets/fonts/Roboto-Bold.ttf";

export function GlobalStyle() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        FontFamily: [
          {
            "@font-face": {
              fontFamily: "Roboto",
              src: `url('${regular}') format("trueType")`,
              fontWeight: 400,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "Roboto",
              src: `url('${font600}') format("trueType")`,
              fontWeight: 600,
              fontStyle: "normal",
            },
          },
        ],

        body: {
          ...theme.fn.fontStyles(),
          lineHeight: theme.lineHeight,
          fontWeight: 400,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },

        "::placeholder": {
          color: "#C4C4C4 !important",
          fontSize: "15px",
        },

        "#root": {
          width: "375px",
          height: "667px",
          paddingTop: 20,
          overflowY: "auto",
          overflowX: "hidden",
          position: "relative",
        },
        ".mantine-TextInput-label": {
          fontSize: 14,
        },
  
      })}
    />
  );
}
