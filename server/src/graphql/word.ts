import gql from 'graphql-tag';
import { QueryResolvers, Resolvers } from '../types/apolloTypes';

export const typeDef = gql`
  extend type Query {
    words: [Word!]!
  }
  type Word {
    word: String!
    translate: String!
  }
`;

export const resolvers: Resolvers = {
    Query: {
        words: (root, input, context) => {
            console.log('context', context);
            context.DB.collection('words').insert({
                word: 'abc',
                translate: 'cba'
            });

            return context.DB.collection('words')
                .find()
                .toArray();
        }
    }
};
