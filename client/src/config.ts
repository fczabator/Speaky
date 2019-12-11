import get from 'lodash/get';

const getEnv = (name = '', defaultValue: string) =>
  get(window, `_env.${name}`) || process.env[name] || defaultValue;

export default {
  domain: getEnv('REACT_APP_AUTH_DOMAIN', 'dev-0xvvzv6k.eu.auth0.com'),
  clientId: getEnv(
    'REACT_APP_AUTH_CLIENT_ID',
    'vO1tFp61lYvDf3t73yl0sPbpsPGp8FGP'
  ),
  audience: getEnv('REACT_APP_AUTH_AUDIENCE', 'http://localhost:3333')
};
