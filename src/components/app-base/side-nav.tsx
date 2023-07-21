import { useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title, rem ,NavLink} from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,IconChevronRight,IconActivity
} from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: rem(60),
    paddingTop: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Notification' },
  { icon: IconGauge, label: 'NPS' },
  { icon: IconDeviceDesktopAnalytics, label: 'Inbox' },
  { icon: IconCalendarStats, label: 'Feedback' },
  { icon: IconUser, label: 'Users' },
  { icon: IconFingerprint, label: 'Analytics' },
  { icon: IconSettings, label: 'Settings' }, 
];


const datas ={

  Notification :[
    { label: 'All',link:"/" },
    { label: 'Published',link:"/" },
    { label: 'Draft',link:"/" },
    { label: 'Expried',link:"/" },
    { label: 'Archived',link:"/" },
    { label: 'Standalone page',link:"/"},
  ],
  NPS :[
    { label: 'Ram',link:"/" },
    { label: 'Published',link:"/" },
    { label: 'Draft',link:"/" },
    { label: 'Expried',link:"/" },
    { label: 'Archived',link:"/" },
    { label: 'Standalone page',link:"/"},
  ]
}


export function SideNav() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Notification');
  const [activeLink, setActiveLink] = useState('All');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
      >
        <link.icon size="1.4rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const items = (data) =>
    data?.map((item, index) => (
      <NavLink
        key={item.label}
        label={item.label}
        component='a'
        onClick={() => setActiveLink(item.label)}
        className={cx(classes.link, { [classes.linkActive]: activeLink === item.label })}
      />
    ))
   ;


  return (
    <Navbar height={"100%"} width={{ sm: 300 }}>
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <IconActivity></IconActivity>
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {items(datas[active])}
        </div>
      </Navbar.Section>
    </Navbar>
  );
}