import React from 'react';
import { Box } from 'grommet';
import { Loader } from './Loader';

export const FullScreenLoader: React.FC = () => {
  return (
    <Box align="center" justify="center">
      <Loader />
    </Box>
  );
};
