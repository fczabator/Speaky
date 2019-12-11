import ApolloClient from 'apollo-boost';
import config from '../config';

export const client = new ApolloClient({
  uri: config.backendEndpoint,
  request: operation => {
    const token = localStorage.getItem('token');
    if (token) {
      operation.setContext(() => ({
        headers: {
          Authorization: `Bearer ${token}`
        }
      }));
    }
  }
});
