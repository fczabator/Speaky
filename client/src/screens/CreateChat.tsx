import React from 'react';
import get from 'lodash/get';
import { TextInput, Button } from 'grommet';
import { RouteComponentProps, useHistory } from 'react-router';
import { Screen } from '../components/Screen';
import { useChatContext } from '../context/chatContext';
import { useCreateChatMutation } from '../types/apolloTypes';

export const CreateChat: React.FC<RouteComponentProps> = () => {
  const [name, setName] = React.useState('');
  const [createChat] = useCreateChatMutation();
  const { selected } = useChatContext();
  const history = useHistory();

  const handleAddChat = async () => {
    const result = await createChat({ variables: { name, wordIds: selected } });
    const _id = get(result.data, 'createChat._id');
    if (_id) {
      history.push(`/chat/${_id}`);
    }
  };

  return (
    <Screen>
      <TextInput
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button label="Create new chat!" onClick={handleAddChat} />
    </Screen>
  );
};
