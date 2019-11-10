import React, { useState } from 'react';
import chatsQuery from '../api/queries/chats';
import get from 'lodash/get';
import { Screen } from '../components/Screen';
import { TextInput, Button } from 'grommet';
import { useHistory } from 'react-router';
import { useJoinChatMutation } from '../types/apolloTypes';
import { useNotificationContext } from '../context/useNotification';

export const ChatJoin: React.FC = () => {
  const [code, setCode] = useState('');
  const [joinChat] = useJoinChatMutation({
    refetchQueries: [{ query: chatsQuery }]
  });
  const { showNotification } = useNotificationContext();
  const history = useHistory();

  const handleJoinChat = async () => {
    try {
      const result = await joinChat({ variables: { inviteCode: code } });
      const _id = get(result.data, 'joinChat._id');
      history.push(`/chat/${_id}`);
    } catch (err) {
      showNotification('Wrong invitation code!');
    }
  };

  return (
    <Screen>
      <TextInput
        placeholder="Invitation code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <Button label="Join" onClick={handleJoinChat} />
    </Screen>
  );
};
