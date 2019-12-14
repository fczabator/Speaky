import React from 'react';
import { Redirect } from 'react-router';
import { useAuth0 } from '../lib/auth';
import { Button, Box, Heading } from 'grommet';
import { Screen } from '../components/Screen';
import { FullScreenLoader } from '../components/FullScreenLoader';

export const Login: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/words" />;
  }

  if (loading) {
    return <FullScreenLoader color="white" />;
  }

  return (
    <Screen>
      <Box justify="center" align="center">
        <Heading color="white">Welcome!</Heading>
        <Box pad="medium" align="center" justify="center" fill="horizontal">
          <Button
            primary
            color="white"
            label="Login"
            onClick={loginWithRedirect}
            fill="horizontal"
          />
        </Box>
      </Box>
    </Screen>
  );
};
