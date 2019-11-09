import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { useAuth0 } from '../lib/auth';
import { Button } from 'grommet';

export const Home: React.FC<RouteComponentProps> = props => {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to="/words" />;
  }

  return (
    <div>
      <Button onClick={() => loginWithPopup()}>Login</Button>
    </div>
  );
};
