import React from "react";
import {
  MantineProvider,
  createEmotionCache,
  MantineThemeOverride,
  DefaultMantineColor,
} from "@mantine/core";
import { GlobalStyle } from "./GlobalStyle";
import { NotificationsProvider } from "@mantine/notifications";
import { Components } from "./components";

const myCache = createEmotionCache({ key: "mantine" });

const myTheme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    dark: [
      "#F3F3F3",
      "#C4C4C4",
      "#707070",
      "#343434",
      "#2B2B2B",
      "#242424",
      "#2E2E2E",
      "#1E1E1E",
      "#131313",
      "#0F0F0F",
    ],
    brand: [
      "#FFF9ED",
      "#FFD692",
      "#F2B567",
      "#CE9751",
      "#CE9751",
      "#CE9751",
      "#CE9751",
      "#CE9751",
      "#CE9751",
      "#CE9751",
    ],
  },

  primaryColor: "brand",
  defaultGradient:{deg:45 , from:"#AD712F" , to:"#F1BF75"},
  radius: {
    xs: 8,
    sm: 12,
    md: 16,
  },
  defaultRadius: "xs",

  fontSizes: {
    xs: 12,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24,
  },
  loader: "bars",

  fontFamily: "Roboto",
  headings: {
    fontFamily: "Roboto",
    sizes: {
      h1: { fontWeight: 600, fontSize: "1.688rem", lineHeight: 1.4 },
      h2: { fontWeight: 600, fontSize: "1.375rem", lineHeight: 1.4 },
      h3: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.4 },
      h4: { fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.4 },
      h5: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 },
      h6: { fontWeight: 600, fontSize: "0.875rem", lineHeight: 1.4 },
    },
  },

  black: "#1E1E1E",
  white: "#F3F3F3",
  components: Components,
};

type props = {
  children: React.ReactNode;
};
export function Theme({ children }: props) {
  return (
    <>
      <GlobalStyle />
      <MantineProvider
        emotionCache={myCache}
        withNormalizeCSS
        withGlobalStyles
        theme={myTheme}
      >
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </>
  );
}
