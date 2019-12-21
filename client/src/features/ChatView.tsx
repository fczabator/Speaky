import React from 'react';
import { Text, Box } from 'grommet';
import { useChatQuery, useStartChatMutation } from '../types/apolloTypes';
import { RouteComponentProps, useHistory } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { BottomPanel } from '../components/BottomPanel';
import { useAppBarContext } from '../context/appBarContext';
import chatQuery from '../api/queries/chat';
import { useNotificationContext } from '../context/useNotification';

interface Params {
  _id: string;
}

export const ChatView: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id } });
  const [startChat] = useStartChatMutation({
    refetchQueries: [{ query: chatQuery, variables: { _id } }]
  });
  const { selected, toggleSelected } = useAppBarContext();
  const { showNotification } = useNotificationContext();
  const history = useHistory();

  const handleStart = async () => {
    try {
      await startChat({ variables: { _id } });
      history.push(`/chatting/${_id}`);
    } catch (error) {
      showNotification('Cannot start the chat');
    }
  };

  if (!data || !data.chat) {
    return null;
  }
  const { name, words } = data.chat;

  return (
    <Screen>
      <Box justify="center" align="center">
        <Text size="xlarge">{name}</Text>
      </Box>
      {words.map(word => (
        <WordBox
          key={word._id}
          word={word}
          onClick={toggleSelected}
          isSelected={selected.includes(word._id)}
        />
      ))}
      <BottomPanel>
        <Box
          background="brand"
          justify="center"
          align="center"
          fill
          onClick={handleStart}
        >
          Start
        </Box>
      </BottomPanel>
    </Screen>
  );
};
