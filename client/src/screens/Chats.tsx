import React from 'react';
import { ChatBox } from '../components/ChatBox';
import { InfiniteScroll } from 'grommet';
import { RouteComponentProps, useHistory } from 'react-router';
import { Screen } from '../components/Screen';
import { useChatsQuery, Chat } from '../types/apolloTypes';

export const Chats: React.FC<RouteComponentProps> = () => {
  const { data, loading } = useChatsQuery();
  const history = useHistory();
  if (loading || !data) {
    return null;
  }

  return (
    <Screen>
      <InfiniteScroll items={data.chats}>
        {(chat: Chat) => (
          <ChatBox
            chat={chat}
            key={chat._id}
            onClick={() => history.push(`/chat/${chat._id}`)}
          />
        )}
      </InfiniteScroll>
    </Screen>
  );
};
