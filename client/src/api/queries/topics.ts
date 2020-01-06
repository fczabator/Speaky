import gql from 'graphql-tag';

export default gql`
  query topics {
    topics {
      _id
      name
      description
      userId
    }
  }
`;
