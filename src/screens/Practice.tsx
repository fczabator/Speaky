import * as React from 'react';
import {Screen} from '../components/Screen';
import {Card, Text} from 'rebass';
import {Timer} from '../components/Timer';

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
`;

export const Practice = () => (
  <Screen
    flex={1}
    pt={10}
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
  >
    <Card variant="primary" m={10} p={10}>
      <Text fontFamily="kalam" fontSize={2}>
        {loremIpsum}
      </Text>
    </Card>
    <Timer />
  </Screen>
);
