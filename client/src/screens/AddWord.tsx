import React from 'react';
import { TextInput, Button } from 'grommet';
import { Screen } from '../components/Screen';
import wordsQuery from '../api/queries/words';
import { useCreateWordMutation } from '../types/apolloTypes';
import { useNotificationContext } from '../context/useNotification';

export const AddWord: React.FC = () => {
  const [word, setWord] = React.useState('');
  const [translation, setTranslation] = React.useState('');
  const [createWord] = useCreateWordMutation({
    refetchQueries: [{ query: wordsQuery }]
  });
  const { showNotification } = useNotificationContext();

  const handleAddWord = () => {
    createWord({ variables: { word, translate: translation } });
    showNotification(`${word} has been added!`);
    setWord('');
    setTranslation('');
  };

  return (
    <Screen>
      <TextInput
        placeholder="Word"
        value={word}
        onChange={e => setWord(e.target.value)}
      />
      <TextInput
        placeholder="Translation"
        value={translation}
        onChange={e => setTranslation(e.target.value)}
      />
      <Button label="Add new word!" onClick={handleAddWord} />
    </Screen>
  );
};
