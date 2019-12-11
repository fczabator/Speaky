import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Menu, FormClose } from 'grommet-icons';
import { Actions } from './Actions';

type Props = {
  onSidebarOpen: () => void;
  isSidebarOpen: boolean;
};

export const AppBar: React.FC<Props> = ({ onSidebarOpen, isSidebarOpen }) => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation="medium"
      style={{ zIndex: 1 }}
    >
      <Box justify="start" direction="row" align="center">
        <Button
          icon={
            isSidebarOpen ? (
              <FormClose color="#000000" />
            ) : (
              <Menu color="#000000" />
            )
          }
          onClick={() => onSidebarOpen()}
        />
        <Heading level="3" margin="none">
          Speaky
        </Heading>
      </Box>
      <Actions />
    </Box>
  );
};
