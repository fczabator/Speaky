import React, { useEffect } from 'react';
import { Text, Box } from 'grommet';
import { useChatQuery } from '../types/apolloTypes';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { WordBox } from '../components/WordBox';
import { BottomPanel } from '../components/BottomPanel';
import { useAppBarContext } from '../context/appBarContext';

type Params = {
  _id: string;
};

export const ChatView: React.FC<RouteComponentProps<Params>> = ({
  match: {
    params: { _id }
  }
}) => {
  const { data } = useChatQuery({ variables: { _id } });
  const { selected, setEntity, setMode, toggleSelected } = useAppBarContext();

  useEffect(() => {
    setEntity(_id);
    setMode('chatView');
  }, []);

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
        <Box background="brand" justify="center" align="center" fill>
          Start
        </Box>
      </BottomPanel>
    </Screen>
  );
};
