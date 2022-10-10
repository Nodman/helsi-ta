import { AppShell, Header } from "@mantine/core";
// import "normalize.css";

import { Providers } from "../Providers";
import { Form } from "../Form";
import { ColorSchemeToggle } from "../ColorSchemeToggle";

export const Root = (): React.ReactElement => {
  return (
    <Providers>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <ColorSchemeToggle />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Form />
      </AppShell>
    </Providers>
  );
};
