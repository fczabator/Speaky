import React from 'react';
import { Box } from 'grommet';
import { Loader } from './Loader';

interface Props {
  color?: string;
  size?: number;
}

export const FullScreenLoader: React.FC<Props> = props => {
  return (
    <Box align="center" justify="center" fill="vertical">
      <Loader {...props} />
    </Box>
  );
};
