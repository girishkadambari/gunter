
import {Box, Divider, NavLink} from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';
import SideNavContainer from "../side-nav/side-nav-container";
import {useState} from "react";
import {sideNavStyles} from "../side-nav/styles/side-nav-styles";

export  function  NavLinks(){

  const [active, setActive] = useState(0);
  const { classes, cx } = sideNavStyles();
  return (

    <Box w={240}>
      <SideNavHeaderContainer/>
      <NavLink
        label="Notifications"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="All" />
        <NavLink label="Published" />
        <NavLink label="Draft" />
        <NavLink label="Single-user" />
        <NavLink label="Expried" />
        <NavLink label="Archived" />
      </NavLink>
      <Divider my="sm" />
      <NavLink
        label="Preview"
        icon={<IconGauge size="1rem" stroke={1.5} />}
      />
      <NavLink
        label="Standalon Page"
        icon={<IconGauge size="1rem" stroke={1.5} />}
      />
      <NavLink
        label="Embeded Code"
        icon={<IconGauge size="1rem" stroke={1.5} />}
      />
    </Box>
  );

}


export function SideNavHeaderContainer(){

  const { classes, cx } = sideNavStyles();


  return(
    <div className={classes.sideNavHeaderContainer} >
          <span className={classes.title}>
           Notifications
          </span>
      <span className={classes.description}>
            ID:MDDsHoHE28303
          </span>
    </div>
    )

}