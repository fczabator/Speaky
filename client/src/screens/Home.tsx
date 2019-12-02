import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { useAuth0 } from '../lib/auth';
import { Button, Box } from 'grommet';
import { Screen } from '../components/Screen';

export const Home: React.FC<RouteComponentProps> = props => {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/words" />;
  }

  return (
    <Screen>
      <Box pad="medium" align="center" justify="center">
        <Button
          primary
          color="brand"
          label="Add new word!"
          onClick={loginWithPopup}
        />
      </Box>
    </Screen>
  );
};
