import React from 'react';
import { Box } from 'grommet';
import { BottomPanel } from './BottomPanel';

interface Props {
  message: string;
}

export const Notification: React.FC<Props> = ({ message }) => {
  return (
    <BottomPanel>
      <Box
        fill
        background="brand"
        animation={['slideUp', 'fadeIn']}
        align="center"
        justify="center"
      >
        {message}
      </Box>
    </BottomPanel>
  );
};
