import {createStyles, rem} from "@mantine/core";


export const sideNavStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.15
      ),
    },
  },
  sideNavContiner: {
    width:250,
    height:"100%",
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },
  sideNavHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    padding: theme.spacing.md,
    paddingTop: rem(18),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
  },
  title:{
    fontWeight: 'bold',
    fontSize: "18px"
  },
  description: {
    fontSize: "12px",
  }
}));