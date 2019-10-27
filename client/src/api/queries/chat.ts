import gql from 'graphql-tag';

export default gql`
  query chat($_id: String!) {
    chat(_id: $_id) {
      _id
      name
      words {
        _id
        word
        translate
      }
      topics {
        _id
      }
    }
  }
`;
