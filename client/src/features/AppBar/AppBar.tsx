import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Menu, FormClose } from 'grommet-icons';
import { Actions } from './Actions';

type Props = {
  onSidebarOpen: () => void;
  isSidebarOpen: boolean;
  isAuthenticated: boolean;
};

export const AppBar: React.FC<Props> = ({
  onSidebarOpen,
  isSidebarOpen,
  isAuthenticated
}) => {
  return (
    <Box
      style={{
        transition: 'background-color 1s, box-shadow 1s, color 1s',
        zIndex: 1,
        width: '100%',
        backgroundColor: isAuthenticated ? 'white' : '#7d4cdb',
        color: isAuthenticated ? 'black' : 'white'
      }}
      tag="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation={isAuthenticated ? 'medium' : undefined}
      height="4rem"
    >
      <Box justify="start" direction="row" align="center" fill="horizontal">
        {isAuthenticated && (
          <Box animation={['fadeIn']}>
            <Button
              icon={
                isSidebarOpen ? (
                  <FormClose color="#000000" />
                ) : (
                  <Menu color="#000000" />
                )
              }
              onClick={() => onSidebarOpen()}
            />
          </Box>
        )}
        <Heading
          level="3"
          margin="none"
          style={{
            marginLeft: isAuthenticated ? 0 : '40vw',
            transition: 'margin-left 1s',
            width: '100%'
          }}
        >
          Speaky
        </Heading>
      </Box>
      {isAuthenticated && <Actions />}
    </Box>
  );
};
