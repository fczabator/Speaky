import React from 'react';
import { InfiniteScroll, Tabs, Tab } from 'grommet';
import { Screen } from '../components/Screen';
import { TopicBox } from '../components/TopicBox';
import { useTopicsQuery } from '../types/apolloTypes';
import { useAuth0 } from '../lib/auth';

export const Topics = () => {
  const { data, loading } = useTopicsQuery();
  const { user } = useAuth0();
  if (loading || !data) {
    return <div />;
  }

  const myTopics = data.topics.filter(topic => topic.userId === user?.sub);
  const sampleTopics = data.topics.filter(topic => !topic.userId);

  return (
    <Screen>
      <Tabs>
        <Tab title="My">
          <InfiniteScroll items={myTopics}>
            {topic => <TopicBox topic={topic} key={topic._id} />}
          </InfiniteScroll>
        </Tab>
        <Tab title="Ready to use">
          <InfiniteScroll items={sampleTopics}>
            {topic => <TopicBox topic={topic} key={topic._id} />}
          </InfiniteScroll>
        </Tab>
      </Tabs>
    </Screen>
  );
};
