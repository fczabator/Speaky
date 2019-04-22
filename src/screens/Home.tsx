import * as React from 'react';
import {RoundButton} from '../components/RoundButton';
import {Screen} from '../components/Screen';
import {Text} from 'rebass';

export const Home = () => (
  <Screen
    flex={1}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <RoundButton fontSize={3} variant="primary" width={200}>
      <Text fontFamily="kalam">Start</Text>
    </RoundButton>
  </Screen>
);
