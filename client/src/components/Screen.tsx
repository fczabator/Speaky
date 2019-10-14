import React from 'react';
import { Box } from 'grommet';

export const Screen: React.FC = ({ children }) => (
  <Box pad="small" gap="small">
    {children}
  </Box>
);
