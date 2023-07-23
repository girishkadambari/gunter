import React from 'react';
import { Paper, useMantineTheme } from '@mantine/core';
import {sideNavStyles} from "./styles/side-nav-styles";

const SideNavContainer = ({ children }) => {
  const { classes, cx } = sideNavStyles();
  return (
    <Paper
      shadow="xs"
      className={classes.sideNavContiner}
    >
      {children}
    </Paper>
  );
};
export default SideNavContainer;
