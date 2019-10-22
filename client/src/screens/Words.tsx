import React from 'react';
import { gql } from 'apollo-boost';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { Box } from 'grommet';
import { useWordsQuery } from '../types/apolloTypes';

const GET_WORDS = gql`
  query words {
    words {
      _id
      word
      translate
    }
  }
`;

export const Words: React.FC<RouteComponentProps> = props => {
  const { data, loading, error } = useWordsQuery();

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Screen>
      {data.words.map(({ word, translate }) => (
        <Box>{`${word} ${translate}`}</Box>
      ))}
    </Screen>
  );
};
