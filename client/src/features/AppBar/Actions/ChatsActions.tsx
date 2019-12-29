import React from 'react';
import { Add } from 'grommet-icons';
import { Button, Box } from 'grommet';
import { useHistory } from 'react-router-dom';

export const ChatsActions: React.FC = () => {
  const history = useHistory();

  const handleAddChat = () => {
    history.push('/select-words');
  };

  const handleJoinChat = () => {
    history.push('/join-chat');
  };

  return (
    <Box align="center" direction="row">
      <Button onClick={handleJoinChat}>join</Button>
      <Button icon={<Add />} onClick={handleAddChat} />
    </Box>
  );
};
