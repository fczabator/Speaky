import React from 'react';
import { Layer, Box, Collapsible } from 'grommet';
import { AppBar } from './AppBar';
import { Navigation } from './Navigation';

export const AppLayout: React.FC = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!isOpen);

  return (
    <>
      <AppBar onSidebarOpen={handleOpen} isOpen={isOpen} />
      <div style={{ position: 'absolute', zIndex: 2 }}>
        <Collapsible direction="vertical" open={isOpen}>
          <Box
            flex
            fill="vertical"
            width="medium"
            background="brand"
            align="center"
            justify="center"
          >
            <Navigation />
          </Box>
        </Collapsible>
      </div>
      {children}
    </>
  );
};
