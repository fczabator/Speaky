import React from 'react';
import { Add } from 'grommet-icons';
import { Button, Box } from 'grommet';
import { useHistory } from 'react-router-dom';

export const TopicsActions: React.FC = () => {
  const history = useHistory();

  const handleAddTopic = () => {
    history.push('/create-topic');
  };

  return (
    <Box align="center" direction="row">
      <Button icon={<Add />} onClick={handleAddTopic} />
    </Box>
  );
};
