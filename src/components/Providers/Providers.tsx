import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

type PropsT = {
  children: React.ReactNode;
};

export const Providers = ({ children }: PropsT): React.ReactElement => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ primaryColor: "cyan", colorScheme }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
