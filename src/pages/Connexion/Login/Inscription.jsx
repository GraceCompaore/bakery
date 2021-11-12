import { useState } from 'react';
import SignUpApi from '../../../core/api/signup.api';

const Register = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitRegister = (event) => {
    event.preventDefault();

    SignUpApi.signup({ login, password, email }).then((responseData) => {
      console.log(responseData);
    });
  };

  return (
    <div className="inner-container">
      <div className="header">Register</div>
      <form className="box">
        <div className="input-group">
          <label htmlFor="login">Nom</label>
          <input
            type="text"
            name="login"
            className="login-input"
            placeholder="Login"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="button" className="login-btn" onClick={submitRegister}>
          Inscription
        </button>
      </form>
    </div>
  );
};
export default Register;
