import * as React from 'react';
import {RoundButton} from '../components/RoundButton';
import {Screen} from '../components/Screen';
import {Text} from 'rebass';
import {RouteComponentProps} from 'react-router';

export const Home: React.FC<RouteComponentProps> = props => (
  <Screen
    flex={1}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <RoundButton
      onClick={() => props.history.push('practice')}
      fontSize={3}
      variant="primary"
      width={200}
    >
      <Text fontFamily="kalam">Start</Text>
    </RoundButton>
  </Screen>
);
