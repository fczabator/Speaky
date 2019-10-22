import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { TextInput, Button } from 'grommet';
import { gql } from 'apollo-boost';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';

const ADD_WORD = gql`
  mutation createWord($word: String!, $translate: String!) {
    createWord(word: $word, translate: $translate) {
      _id
      translate
      word
    }
  }
`;

export const AddWord: React.FC<RouteComponentProps> = props => {
  const [word, setWord] = React.useState('');
  const [translation, setTranslation] = React.useState('');
  const [createWord] = useMutation(ADD_WORD);

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
