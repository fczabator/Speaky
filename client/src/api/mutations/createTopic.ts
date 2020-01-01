import gql from 'graphql-tag';

export default gql`
  mutation createTopic($name: String!, $description: String) {
    createTopic(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;
