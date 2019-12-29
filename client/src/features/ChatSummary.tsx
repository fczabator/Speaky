import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery } from '../types/apolloTypes';
import { Heading, Text, Box } from 'grommet';
import { Screen } from '../components/Screen';
import { WordList } from '../components/WordList';

interface Params {
  _id: string;
}

export const ChatSummary: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data, loading } = useChatQuery({
    variables: { _id }
  });

  if (loading || !data || !data.chat) {
    return null;
  }

  return (
    <Screen>
      <Box align="center" justify="center">
        <Heading>Congrats!</Heading>
        <Text>You did it!</Text>
        <Text>Learned words:</Text>
        <WordList words={data.chat.words} />
      </Box>
    </Screen>
  );
};
