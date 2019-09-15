import gql from 'graphql-tag';

export const typeDef = gql`
  extend type Query {
    words: [Word!]!
  }
  type Word {
    word: String!
    translate: String!
  }
`;

export const resolvers = {
    Query: {
        words: () => {
            return [
                { word: 'hehe', translate: 'translate' },
                { word: 'hehe2', translate: 'translate2' }
            ];
        }
    }
};
