import React, { useState } from 'react';
import { TextInput, Button } from 'grommet';
import chatsQuery from '../api/queries/chats';
import { Screen } from '../components/Screen';
import { useHistory } from 'react-router';
import { useJoinChatMutation } from '../types/apolloTypes';
import { useNotificationContext } from '../context/useNotification';

export const ChatJoin = () => {
  const [joinChat] = useJoinChatMutation({
    refetchQueries: [{ query: chatsQuery }]
  });
  const [code, setCode] = useState('');
  const { showNotification } = useNotificationContext();
  const history = useHistory();

  const handleJoinChat = async () => {
    try {
      const result = await joinChat({ variables: { inviteCode: code } });
      const _id = result?.data?.joinChat?._id;
      history.push(`/chat/${_id}`);
    } catch {
      showNotification('Wrong invitation code!');
    }
  };

  return (
    <Screen>
      <TextInput
        onChange={e => setCode(e.target.value)}
        placeholder="Invitation code"
        value={code}
      />
      <Button color="brand" label="Join" onClick={handleJoinChat} />
    </Screen>
  );
};
