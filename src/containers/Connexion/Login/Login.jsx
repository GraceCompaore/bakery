import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../../core/context/AuthContext';

const Login = () => {
  const history = useHistory();
  const { login: logUser, isLogged } = useContext(AuthContext);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const submitLogin = (event) => {
    event.preventDefault();

    logUser({ login, password }).then((data) => {
      if (data) {
        history.push('/cart');
      } else {
        setLoginError(true);
      }
    });
  };

  return (
    <div className="login-container">
      <div className="header">Login</div>
      <div className="box">
        {loginError && (
          <div className="login-error p-2 bg-red-600 my-2 text-white  ">
            Login et/ou mot de passe érroné(s)
          </div>
        )}
        <div className="input-group">
          <label htmlFor="login">Nom</label>
          <input
            type="text"
            name="login"
            id="login"
            className="login-input"
            placeholder="Login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="button" className="login-btn" onClick={submitLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
