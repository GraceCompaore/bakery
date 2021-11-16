import { useState } from 'react';
import { useHistory } from 'react-router';
import SignUpApi from '../../../core/api/signup.api';

const Register = () => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const submitRegister = (event) => {
    event.preventDefault();

    SignUpApi.signup({ login, password, email }).then((responseData) => {
      if (responseData) {
        setSignUpSuccess(true);
        setSignUpError(false);
      } else {
        setSignUpSuccess(false);
        setSignUpError(true);
      }
    });
  };

  const goToLoginPage = (e) => {
    e.preventDefault();
    history.push('/connexion');
  };

  return (
    <div className="inner-container">
      <div className="header">Register</div>
      {signUpError && (
        <div className="login-error p-2 bg-red-600 my-2 text-white  ">
          Une erreur s'est produite. Veuillez essayer de nouveau !
        </div>
      )}
      {signUpSuccess && (
        <div className="login-error p-2 bg-green-600 my-2 text-white  ">
          Votre compte a été enregistré. Vous pouvez maintenant{' '}
          <a href="#" onClick={goToLoginPage}>
            vous connecter
          </a>
        </div>
      )}
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
