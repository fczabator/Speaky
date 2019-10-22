import React from 'react';
import { InfiniteScroll } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { useWordsQuery } from '../types/apolloTypes';

export const Words: React.FC<RouteComponentProps> = () => {
  const { data, loading } = useWordsQuery();

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Screen>
      <InfiniteScroll items={data.words}>
        {word => <WordBox {...word} key={word._id} />}
      </InfiniteScroll>
    </Screen>
  );
};
