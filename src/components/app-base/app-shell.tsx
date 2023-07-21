import { AppShell,MantineProvider } from '@mantine/core';
import { SideNavbar} from './side-nav';

export function ApplicaitonBase() {

  return (
    <AppShell
      padding="md"
      navbar={<SideNavbar/>}
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
      <ApplicaitonBase/>
    </MantineProvider>
  );
}