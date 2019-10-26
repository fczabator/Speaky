import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { TextInput, Button } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import wordsQuery from '../api/queries/words';
import createWordMutation from '../api/mutations/createWord';

export const AddWord: React.FC = () => {
  const [word, setWord] = React.useState('');
  const [translation, setTranslation] = React.useState('');
  const [createWord] = useMutation(createWordMutation, {
    refetchQueries: [{ query: wordsQuery }]
  });

  const handleAddWord = () => {
    createWord({ variables: { word, translate: translation } });
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
