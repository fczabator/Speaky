import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Menu, FormClose, Checkmark } from 'grommet-icons';
import { useChatContext } from '../context/chatContext';
import { useHistory } from 'react-router-dom';

type Props = {
  onSidebarOpen: () => void;
  isSidebarOpen: Boolean;
};

export const AppBar: React.FC<Props> = ({ onSidebarOpen, isSidebarOpen }) => {
  const { selected } = useChatContext();
  const history = useHistory();

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
      {selected.length ? (
        <Button
          icon={<Checkmark />}
          label={selected.length}
          onClick={() => history.push('/create-chat')}
        />
      ) : null}
    </Box>
  );
};
