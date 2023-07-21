import { Center, Navbar, Stack, Tooltip, UnstyledButton, createStyles, rem } from "@mantine/core";
import { IconCalendarStats, IconDeviceDesktopAnalytics, IconGauge, IconLogout, IconSettings, IconSwitchHorizontal, IconUser } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} withArrow={true} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconGauge, label: "Notifications" ,link:"/notifications" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" ,link:"/analytics"},
  { icon: IconCalendarStats, label: "NPS",link:"/" },
  { icon: IconUser, label: "Users" ,link:"/users"},
  { icon: IconSettings, label: "Settings",link:"/settings" },
];

export function SideNavbar() {
  const [active, setActive] = useState("Notifications");
  
  const links = mockdata.map((link, index) => <NavbarLink {...link} key={link.label} active={link.label === active} onClick={() => setActive(link.label)} />);

  return (
    <Navbar height={"100%"} width={{ base: 80 }} p="md">
      <Center>
        <IconUser type="mark" size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
