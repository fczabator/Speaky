import React from 'react';
import { Box, Collapsible } from 'grommet';
import { AppBar } from '../features/AppBar/AppBar';
import { Navigation } from './Navigation';
import { Notification } from './Notification';
import { useNotificationContext } from '../context/useNotification';
import { useAuth0 } from '../lib/auth';
import styled from 'styled-components';

const Menu = styled.div`
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export const AppLayout: React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const { isVisible, message } = useNotificationContext();
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <AppBar
        onSidebarOpen={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        isAuthenticated={isAuthenticated}
      />
      {isAuthenticated && (
        <Menu>
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
        </Menu>
      )}
      {children}
      {isVisible && <Notification message={message} />}
    </>
  );
};
