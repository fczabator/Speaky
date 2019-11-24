import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery, Chat } from '../types/apolloTypes';
import { FullScreenLoader } from '../components/FullScreenLoader';
import { Screen } from '../components/Screen';
import { useAuth0 } from '../lib/auth';
import { WordBox } from '../components/WordBox';

interface Params {
  _id: string;
}

const isWaiting = (chat: Chat) =>
  !chat.started || chat.started.length !== chat.userIds.length;

export const Chatting: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data, loading, stopPolling } = useChatQuery({
    variables: { _id },
    pollInterval: 2000
  });

  const { user } = useAuth0();
  console.log('user', user);

  if (loading || !data || !data.chat || !user || !data.chat.started)
    return null;
  if (isWaiting(data.chat)) return <FullScreenLoader />;

  stopPolling();

  const mySet = data.chat.started.find(gameSet => gameSet.userId === user.sub);

  const otherPlayerSet = data.chat.started.find(
    gameSet => gameSet.userId !== user.sub
  );

  if (!mySet || !otherPlayerSet) {
    return null;
  }

  return (
    <Screen>
      <span>My words</span>
      {mySet.words.map(word => (
        <WordBox word={word} />
      ))}
      <span>Other player words</span>
      {otherPlayerSet.words.map(word => (
        <WordBox word={word} />
      ))}
    </Screen>
  );
};
