import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Menu, FormClose } from 'grommet-icons';

type Props = {
  onSidebarOpen: () => void;
  isSidebarOpen: Boolean;
};

export const AppBar: React.FC<Props> = ({ onSidebarOpen, isSidebarOpen }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="start"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: 1 }}
  >
    <Button
      icon={isSidebarOpen ? <FormClose /> : <Menu />}
      onClick={() => onSidebarOpen()}
    ></Button>
    <Heading level="3" margin="none">
      Speaky
    </Heading>
  </Box>
);
