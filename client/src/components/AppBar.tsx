import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Menu, FormClose, Checkmark } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { Actions } from './Actions';

type Props = {
  onSidebarOpen: () => void;
  isSidebarOpen: Boolean;
};

export const AppBar: React.FC<Props> = ({ onSidebarOpen, isSidebarOpen }) => {
  const history = useHistory();
  console.log('history', history);

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
          icon={isSidebarOpen ? <FormClose /> : <Menu />}
          onClick={() => onSidebarOpen()}
        ></Button>
        <Heading level="3" margin="none">
          Speaky
        </Heading>
      </Box>
      <Actions />
    </Box>
  );
};
