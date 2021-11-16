import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import AuthApi from '../api/auth.api';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    readTokenFromLocalStorage();
  }, []);

  const login = ({ login, password }) => {
    return AuthApi.login({ login, password }).then(() => {
      return readTokenFromLocalStorage();
    });
  };

  const logout = () => {
    localStorage.removeItem('Token');
    setIsLogged(false);
    setUsername('');
  };

  const readTokenFromLocalStorage = () => {
    const token = localStorage.getItem('Token');
    setIsLogged(!!token);
    if (token) {
      const tokenParsed = jwtDecode(token);
      setUsername(tokenParsed.sub);
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
