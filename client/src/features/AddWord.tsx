import React from 'react';
import { TextInput, Button, FormField } from 'grommet';
import wordsQuery from '../api/queries/words';
import { Screen } from '../components/Screen';
import { useCreateWordMutation } from '../types/apolloTypes';
import { useNotificationContext } from '../context/useNotification';

// @TODO add formik or any other form package
export const AddWord: React.FC = () => {
  const [phrase, setPhrase] = React.useState('');
  const [translation, setTranslation] = React.useState('');
  const [createWord] = useCreateWordMutation({
    refetchQueries: [{ query: wordsQuery }]
  });
  const { showNotification } = useNotificationContext();

  const handleAddWord = () => {
    if (phrase === '' || translation === '') {
      showNotification('Please fill the form');
      return;
    }

    createWord({ variables: { phrase, translate: translation } });
    showNotification(`${phrase} has been added!`);
    setPhrase('');
    setTranslation('');
  };

  return (
    <Screen>
      <FormField label="Word">
        <TextInput value={phrase} onChange={e => setPhrase(e.target.value)} />
      </FormField>
      <FormField label="Translation">
        <TextInput
          value={translation}
          onChange={e => setTranslation(e.target.value)}
        />
      </FormField>
      <Button color="brand" label="Add new word!" onClick={handleAddWord} />
    </Screen>
  );
};
