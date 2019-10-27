import React from 'react';
import get from 'lodash/get';
import { TextInput, Button } from 'grommet';
import { RouteComponentProps, useHistory } from 'react-router';
import { Screen } from '../components/Screen';
import { useCreateChatMutation } from '../types/apolloTypes';
import { useAppBarContext } from '../context/appBarContext';

export const CreateChat: React.FC<RouteComponentProps> = () => {
  const [name, setName] = React.useState('');
  const [createChat] = useCreateChatMutation();
  const { selected, clearAll } = useAppBarContext();
  const history = useHistory();

  const handleAddChat = async () => {
    const result = await createChat({ variables: { name, wordIds: selected } });
    const _id = get(result.data, 'createChat._id');
    if (_id) {
      history.push(`/chat/${_id}`);
      clearAll();
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
