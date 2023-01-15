import { type ReactNode, useEffect, useState } from 'react';
import {
  AppShell as MantineAppShell,
  TypographyStylesProvider,
  createStyles,
} from '@mantine/core';

import NavDropdown from '../Navigation/NavDropdown';
import Navbar from '../Navigation/Navbar';

const useStyles = createStyles(() => ({
  provider: {
    height: '100%',
  },
}));

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

  // global event - close nav dropdown on ESC keypress
  useEffect(() => {
    const handleKeyDownEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpened(false);
    };

    document.addEventListener('keydown', handleKeyDownEsc);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, []);

  return (
    <MantineAppShell
      padding={0}
      fixed
      header={<Navbar opened={opened} setOpened={setOpened} />}
      navbar={<NavDropdown opened={opened} setOpened={setOpened} />}
    >
      <TypographyStylesProvider className={classes.provider}>
        {children}
      </TypographyStylesProvider>
    </MantineAppShell>
  );
};

export default AppShell;
