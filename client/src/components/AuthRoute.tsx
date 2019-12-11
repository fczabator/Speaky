import React from 'react';
import { useAuth0 } from '../lib/auth';
import { Login } from '../features/Login';
import { Route, RouteProps } from 'react-router';

export const AuthRoute: React.FC<RouteProps> = ({ component, ...options }) => {
  const { isAuthenticated } = useAuth0();
  const finalComponent = isAuthenticated ? component : Login;

  return <Route {...options} component={finalComponent} />;
};
