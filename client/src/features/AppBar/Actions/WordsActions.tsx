import React from 'react';
import { Add } from 'grommet-icons';
import { Button, Box } from 'grommet';
import { useHistory } from 'react-router-dom';

export const WordsActions: React.FC = () => {
  const history = useHistory();

  const handleAddWord = () => {
    history.push('/add-word');
  };

  return (
    <Box align="center" direction="row">
      <Button icon={<Add />} onClick={handleAddWord} />
    </Box>
  );
};
