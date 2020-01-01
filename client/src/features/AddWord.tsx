import React, { KeyboardEvent, useRef, Component } from 'react';
import { Formik } from 'formik';
import { TextInput, Button, FormField, TextInputProps } from 'grommet';
import wordsQuery from '../api/queries/words';
import { Screen } from '../components/Screen';
import { Form } from '../components/Form';
import { useCreateWordMutation } from '../types/apolloTypes';
import { useNotificationContext } from '../context/useNotification';

export const AddWord: React.FC = () => {
  const [createWord] = useCreateWordMutation({
    refetchQueries: [{ query: wordsQuery }]
  });
  const { showNotification } = useNotificationContext();
  const phraseInputRef = useRef<any>(null);

  return (
    <Screen>
      <Formik
        initialValues={{ phrase: '', translation: '' }}
        onSubmit={async (values, { resetForm }) => {
          const { phrase, translation } = values;
          if (phrase === '' || translation === '') {
            showNotification('Please fill the form');
            return;
          }
          try {
            await createWord({ variables: { phrase, translate: translation } });
            showNotification(`${phrase} has been added!`);
            resetForm();
            phraseInputRef.current.focus();
          } catch (error) {
            showNotification(error.message);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormField label="Phrase">
              <TextInput
                ref={phraseInputRef}
                value={values.phrase}
                name="phrase"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Translation">
              <TextInput
                value={values.translation}
                onChange={handleChange}
                name="translation"
              />
            </FormField>
            <Button type="submit" color="brand" label="Add new word!" />
          </Form>
        )}
      </Formik>
    </Screen>
  );
};
