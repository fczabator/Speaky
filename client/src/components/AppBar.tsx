import * as React from 'react';
import { Box } from 'grommet';

type Props = {};

export const AppBar: React.FC<Props> = () => (
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
    Speaky
  </Box>
);
