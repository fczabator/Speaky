import React from 'react';
import styled from 'styled-components';
import { Box, Collapsible } from 'grommet';
import { AppBar } from '../features/AppBar/AppBar';
import { Navigation } from './Navigation';
import { Notification } from './Notification';
import { useAuth0 } from '../lib/auth';
import { useNotificationContext } from '../context/useNotification';

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
        isAuthenticated={isAuthenticated}
        isSidebarOpen={isSidebarOpen}
        onSidebarOpen={toggleSidebar}
      />
      {isAuthenticated && (
        <Menu>
          <Collapsible direction="vertical" open={isSidebarOpen}>
            <Box
              align="center"
              background="brand"
              basis="full"
              flex
              justify="center"
            >
              <Navigation onSelect={toggleSidebar} />
            </Box>
          </Collapsible>
        </Menu>
      )}
      <div
        style={{
          backgroundColor: isAuthenticated ? '#F8F8F8' : '#7d4cdb',
          transition: 'background-color 1s',
          flex: 1
        }}
      >
        {children}
      </div>
      {isVisible && <Notification message={message} />}
    </>
  );
};
