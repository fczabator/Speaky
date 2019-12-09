import React, { useState, useEffect, useContext, useCallback } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import { Auth0UserProfile } from 'auth0-js';
export interface AppState {
  targetUrl: string;
}
interface AuthContextInterface {
  isAuthenticated: boolean;
  user: Auth0UserProfile | null;
  loading: boolean;
  popupOpen: boolean;
  loginWithPopup: () => void;
  handleRedirectCallback: () => void;
  getIdTokenClaims: () => void;
  loginWithRedirect: (a: object) => void;
  getTokenSilently: () => void;
  getTokenWithPopup: () => void;
  logout: () => void;
}

const defaultValue = {
  isAuthenticated: false,
  user: null,
  loading: false,
  popupOpen: false,
  loginWithPopup: () => {},
  handleRedirectCallback: () => {},
  getIdTokenClaims: () => {},
  loginWithRedirect: () => {},
  getTokenSilently: () => {},
  getTokenWithPopup: () => {},
  logout: () => {}
};

type Auth0ProviderArgs = {
  onRedirectCallback: (state: AppState) => void;
  domain: string;
  client_id: string;
  redirect_uri: string;
  audience?: string;
};

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext<AuthContextInterface>(
  defaultValue
);

export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider: React.FC<Auth0ProviderArgs> = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const token = await auth0Client.getTokenSilently();
    const user = await auth0Client.getUser();
    localStorage.setItem('token', token);
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
