import React from 'react';
import { Text, Box } from 'grommet';
import { useChatQuery } from '../types/apolloTypes';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';

type Params = {
  _id: string;
};

export const ChatView: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id } });

  if (!data || !data.chat) {
    return null;
  }

  const { name, words } = data.chat;

  return (
    <Screen>
      <Box justify="center" align="center">
        <Text size="xlarge">{name}</Text>
      </Box>
      {words.map(word => (
        <WordBox key={word._id} word={word} />
      ))}
    </Screen>
  );
};
