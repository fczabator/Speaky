import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery } from '../types/apolloTypes';
import { WordBox } from '../components/WordBox';
import { Heading, Text, Box } from 'grommet';
import { Screen } from '../components/Screen';

interface Params {
  _id: string;
}

export const ChatSummary: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  console.log('asdoiasjd asoidsaoijd');
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
        {data.chat.words.map(word => (
          <WordBox key={word._id} word={word} />
        ))}
      </Box>
    </Screen>
  );
};
