import { AppShell, Header } from "@mantine/core";

import { Providers } from "../Providers/Providers";
import { UserForm } from "../UserForm/UserForm";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

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
        <UserForm />
      </AppShell>
    </Providers>
  );
};
