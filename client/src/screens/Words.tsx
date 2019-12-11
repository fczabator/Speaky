import React from 'react';
import { InfiniteScroll, Tabs, Tab } from 'grommet';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { useWordsQuery, Word } from '../types/apolloTypes';

export const Words = () => {
  const { data, loading } = useWordsQuery();
  if (loading || !data) {
    return <div />;
  }

  const newWords = data.words.filter(word => !word.learned);
  const learnedWords = data.words.filter(word => word.learned);

  return (
    <Screen>
      <Tabs>
        <Tab title="New">
          <InfiniteScroll items={newWords}>
            {(word: Word) => <WordBox word={word} key={word._id} />}
          </InfiniteScroll>
        </Tab>
        <Tab title="Learned">
          <InfiniteScroll items={learnedWords}>
            {(word: Word) => <WordBox word={word} key={word._id} />}
          </InfiniteScroll>
        </Tab>
      </Tabs>
    </Screen>
  );
};
