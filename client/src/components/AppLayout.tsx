import React from 'react';
import { Box, Collapsible } from 'grommet';
import { AppBar } from '../features/AppBar/AppBar';
import { Navigation } from './Navigation';
import { Notification } from './Notification';
import { useNotificationContext } from '../context/useNotification';

export const AppLayout: React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const { isVisible, message } = useNotificationContext();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <AppBar onSidebarOpen={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div style={{ width: '100%', position: 'absolute', zIndex: 2 }}>
        <Collapsible direction="vertical" open={isSidebarOpen}>
          <Box
            flex
            basis="full"
            background="brand"
            align="center"
            justify="center"
          >
            <Navigation onSelect={toggleSidebar} />
          </Box>
        </Collapsible>
      </div>
      {children}

      {isVisible && <Notification message={message} />}
    </>
  );
};
