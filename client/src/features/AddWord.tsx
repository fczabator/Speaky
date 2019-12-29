import React, { KeyboardEvent, useRef, Component } from 'react';
import { TextInput, Button, FormField, TextInputProps } from 'grommet';
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
  const phraseInputRef = useRef<any>(null);

  const handleAddWord = () => {
    if (phrase === '' || translation === '') {
      showNotification('Please fill the form');
      return;
    }
    createWord({ variables: { phrase, translate: translation } });
    showNotification(`${phrase} has been added!`);
    setPhrase('');
    setTranslation('');

    phraseInputRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddWord();
    }
  };

  return (
    <Screen>
      <FormField label="Phrase">
        <TextInput
          ref={phraseInputRef}
          value={phrase}
          onChange={e => setPhrase(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </FormField>
      <FormField label="Translation">
        <TextInput
          value={translation}
          onChange={e => setTranslation(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </FormField>
      <Button color="brand" label="Add new word!" onClick={handleAddWord} />
    </Screen>
  );
};
