import React from 'react';
import { Text, Box } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { useChatQuery } from '../types/apolloTypes';

interface Params {
  _id: string;
}

export const ChatInvite: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id } });

  if (!data || !data.chat) {
    return null;
  }
  const { name, inviteCode } = data.chat;

  return (
    <Screen>
      <Box justify="center" align="center">
        <Text size="xlarge">{name}</Text>
        <Text size="large">Invitation code:</Text>
        <Text size="large">{inviteCode}</Text>
      </Box>
    </Screen>
  );
};
