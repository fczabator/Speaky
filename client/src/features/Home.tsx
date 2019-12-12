import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Heading } from 'grommet';
import { Screen } from '../components/Screen';

export const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Screen>
      <Heading>Dashboard</Heading>
    </Screen>
  );
};
