import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  useChatQuery,
  Chat,
  useCompleteChatWordMutation
} from '../types/apolloTypes';
import chatQuery from '../api/queries/chat';
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
  const { data, loading } = useChatQuery({
    variables: { _id },
    pollInterval: 2000
  });
  const { user } = useAuth0();
  const [completeWord] = useCompleteChatWordMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id } }]
  });

  if (loading || !data || !data.chat || !user || !data.chat.started) {
    return null;
  }

  const { chat } = data;

  if (isWaiting(chat)) return <FullScreenLoader />;

  const mySet = chat.started.find(gameSet => gameSet.userId === user.sub);

  const otherPlayerSet = chat.started.find(
    gameSet => gameSet.userId !== user.sub
  );

  if (!mySet || !otherPlayerSet) {
    return null;
  }

  return (
    <Screen>
      <span>My words</span>
      {mySet.words.map(word => (
        <WordBox
          key={word._id}
          word={word}
          isSelected={chat.completedWordIds.includes(word._id)}
          onClick={() =>
            completeWord({ variables: { _id: chat._id, wordId: word._id } })
          }
        />
      ))}
      <span>Other player words</span>
      {otherPlayerSet.words.map(word => (
        <WordBox
          key={word._id}
          word={word}
          isSelected={chat.completedWordIds.includes(word._id)}
        />
      ))}
    </Screen>
  );
};
