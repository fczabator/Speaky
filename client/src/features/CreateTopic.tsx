import React, { useRef } from 'react';
import { Formik } from 'formik';
import { TextInput, Button, FormField } from 'grommet';
import { RouteComponentProps } from 'react-router';
import { Screen } from '../components/Screen';
import { Form } from '../components/Form';
import { useCreateTopicMutation } from '../types/apolloTypes';
import { useNotificationContext } from '../context/useNotification';

export const CreateTopic: React.FC<RouteComponentProps> = () => {
  const [createTopic] = useCreateTopicMutation();
  const { showNotification } = useNotificationContext();
  const nameInputRef = useRef<any>(null);

  return (
    <Screen>
      <Formik
        initialValues={{ name: '', description: '' }}
        validate={values => {
          if (!values.name) {
            return { name: 'Required' };
          }
        }}
        onSubmit={async (values, { resetForm }) => {
          const { name, description } = values;
          try {
            await createTopic({ variables: { name, description } });
            showNotification('New topic added');
            resetForm();
            nameInputRef.current.focus();
          } catch (error) {
            showNotification(error.message);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormField label="Name">
              <TextInput
                ref={nameInputRef}
                value={values.name}
                name="name"
                onChange={handleChange}
              />
            </FormField>
            <FormField label="Description">
              <TextInput
                value={values.description}
                name="description"
                onChange={handleChange}
              />
            </FormField>
            <Button color="brand" type="submit" label="Create new topic!" />
          </Form>
        )}
      </Formik>
    </Screen>
  );
};
