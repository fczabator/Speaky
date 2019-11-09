import { Context } from '../context';
import { AuthenticationError } from 'apollo-server-core';

export const checkIfUserIsLoggedIn = (context: Context) => {
  if (!context.userId) {
    throw new AuthenticationError(
      'User must be logged in to perform operation'
    );
  }
};
