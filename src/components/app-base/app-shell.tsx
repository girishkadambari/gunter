import { AppShell,MantineProvider } from '@mantine/core';
import { NavbarMinimal} from './side-nav';

export function Shell() {

  return (
    <AppShell
      padding="md"
      navbar={<NavbarMinimal/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >

      {/* Your application here */}

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