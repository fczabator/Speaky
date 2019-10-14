import React from 'react';
import { useHistory } from 'react-router-dom';
import { Anchor, Box } from 'grommet';

export const Navigation = () => {
  const history = useHistory();
  return (
    <Box direction="column" justify="center" align="center">
      <Anchor
        margin="small"
        onClick={() => history.push('/add-word')}
        label="Add"
      />
    </Box>
  );
};
