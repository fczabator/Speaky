import React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';

export const NoMatch: React.FC<RouteComponentProps> = ({ location }) => {
  console.log('location', location);
  if (location.pathname === '/index.html') {
    return <Redirect to="/" />;
  }
  return <div>NoMatch</div>;
};
