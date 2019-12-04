import React from 'react';
import { ChatBox } from '../components/ChatBox';
import { InfiniteScroll, Tabs, Tab } from 'grommet';
import { RouteComponentProps, useHistory } from 'react-router';
import { Screen } from '../components/Screen';
import { useChatsQuery, Chat } from '../types/apolloTypes';

export const Chats: React.FC<RouteComponentProps> = () => {
  const { data, loading } = useChatsQuery();
  const history = useHistory();
  if (loading || !data) {
    return null;
  }

  const newChats = data.chats.filter(chat => !chat.isCompleted);
  const pastChats = data.chats.filter(chat => chat.isCompleted);

  return (
    <Screen>
      <Tabs>
        <Tab title="New">
          <InfiniteScroll items={newChats}>
            {(chat: Chat) => (
              <ChatBox
                chat={chat}
                key={chat._id}
                onClick={() => history.push(`/chat/${chat._id}`)}
              />
            )}
          </InfiniteScroll>
        </Tab>
        <Tab title="Past">
          <InfiniteScroll items={pastChats}>
            {(chat: Chat) => (
              <ChatBox
                chat={chat}
                key={chat._id}
                onClick={() => history.push(`/summary/${chat._id}`)}
              />
            )}
          </InfiniteScroll>
        </Tab>
      </Tabs>
    </Screen>
  );
};
