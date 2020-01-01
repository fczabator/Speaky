import { Resolvers } from '../../types/apolloTypes';
import { mapToObjectId } from '../../util/helpers';
import * as queries from './queries';
import * as mutations from './mutations';

export const resolvers: Resolvers = {
  Query: {
    ...queries
  },
  Mutation: {
    ...mutations
  }
};
