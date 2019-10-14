import React from 'react';
import { Box, Collapsible } from 'grommet';
import { AppBar } from './AppBar';

export const AppLayout: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!isOpen);

  return (
    <>
      <AppBar onSidebarOpen={handleOpen} isOpen={isOpen} />
      <Collapsible direction="horizontal" open={isOpen}>
        <Box
          flex
          fill="vertical"
          width="medium"
          background="brand"
          align="center"
          justify="center"
        >
          sidebar
        </Box>
      </Collapsible>
    </>
  );
};
