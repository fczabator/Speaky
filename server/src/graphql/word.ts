import gql from 'graphql-tag';
import { Resolvers } from '../types/apolloTypes';

export const typeDef = gql`
  extend type Query {
    words: [Word!]!
  }
  type Mutation {
    createWord(word: String!, translate: String!): Word
  }
  type Word {
    word: String!
    translate: String!
  }
`;

export const resolvers: Resolvers = {
    Query: {
        words: (root, input, context) => {
            return context.DB.collection('words')
                .find()
                .toArray();
        }
    },
    Mutation: {
        createWord: async (root, input, context) => {
            const result = await context.DB.collection('words').insertOne({
                ...input
            });

            return result.ops[0];
        }
    }
};
