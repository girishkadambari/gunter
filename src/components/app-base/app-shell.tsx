import { AppShell,MantineProvider } from '@mantine/core';
import {SideNavBar} from '../side-nav/side-nav';
import SideNavContainer from "../side-nav/side-nav-container";
import {Navigation} from "../notifications";

export function Shell() {

  return (
    <AppShell
      navbar={<SideNavBar/>}
      padding={0}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
        <Navigation/>
    </AppShell>
  );
}

// Custom theme is applied to all components in App
export function AppBase() {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
        primaryColor: "dark",
        focusRing:"never",
    }}>

        <Shell/>
    </MantineProvider>
  );
}