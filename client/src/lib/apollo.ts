import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
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
