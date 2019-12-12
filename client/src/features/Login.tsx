import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { useAuth0 } from '../lib/auth';
import { Button, Box, Heading } from 'grommet';
import { Screen } from '../components/Screen';

export const Login: React.FC<RouteComponentProps> = props => {
  const { isAuthenticated, loginWithPopup, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/words" />;
  }

  return (
    <Screen>
      <Box justify="center" align="center">
        <Heading>Welcome to Speaky!</Heading>
        <Box pad="medium" align="center" justify="center" fill="horizontal">
          <Button
            primary
            color="brand"
            label="Login"
            onClick={loginWithRedirect}
            fill="horizontal"
          />
        </Box>
      </Box>
    </Screen>
  );
};
