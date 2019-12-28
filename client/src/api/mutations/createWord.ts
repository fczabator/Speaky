import gql from 'graphql-tag';

export default gql`
  mutation createWord($phrase: String!, $translate: String) {
    createWord(phrase: $phrase, translate: $translate) {
      _id
      translate
      phrase
    }
  }
`;
