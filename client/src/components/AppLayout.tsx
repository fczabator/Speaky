import React from 'react';
import { Box, Collapsible } from 'grommet';
import { AppBar } from './AppBar';
import { Navigation } from './Navigation';

export const AppLayout: React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <AppBar onSidebarOpen={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div style={{ position: 'absolute', zIndex: 2 }}>
        <Collapsible direction="vertical" open={isSidebarOpen}>
          <Box
            flex
            fill="vertical"
            width="medium"
            background="brand"
            align="center"
            justify="center"
          >
            <Navigation onSelect={toggleSidebar} />
          </Box>
        </Collapsible>
      </div>
      {children}
    </>
  );
};
