import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { useAuth0 } from '../lib/auth';
import { Button, Box, Heading } from 'grommet';
import { Screen } from '../components/Screen';
import { Loader } from '../components/Loader';

export const Login: React.FC<RouteComponentProps> = props => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/words" />;
  }

  if (loading) {
    return (
      <Box justify="center" align="center" fill="vertical">
        <Loader />
      </Box>
    );
  }

  return (
    <Screen>
      <Box justify="center" align="center">
        <Heading>Welcome!</Heading>
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
