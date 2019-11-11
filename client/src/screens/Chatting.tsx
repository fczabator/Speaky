import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useChatQuery } from '../types/apolloTypes';
import { FullScreenLoader } from '../components/FullScreenLoader';

interface Params {
  _id: string;
}

const isWaiting = chat => chat.started.length !== chat.userIds.length;

export const Chatting: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data, loading } = useChatQuery({ variables: { _id } });

  if (loading || !data) return null;
  if (isWaiting(data.chat)) return <FullScreenLoader />;

  return <div>game</div>;
};
