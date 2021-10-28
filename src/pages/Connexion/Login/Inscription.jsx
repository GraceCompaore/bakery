function Register() {
  function submitRegister(event) {
    event.preventDefault();
  }

  return (
    <div className="inner-container">
      <div className="header">Register</div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Nom</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="login-input"
            placeholder="Email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
          />
        </div>
        <button type="button" className="login-btn" onClick={submitRegister}>
          Inscription
        </button>
      </div>
    </div>
  );
}
export default Register;

/*import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PageLayout from '../../components/PageLayout';
import './Inscription.css';

function Inscription() {
  return (
    <PageLayout>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom </Form.Label>
          <Form.Control type="text" placeholder="Normal text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          S'inscrire
        </Button>
      </Form>
    </PageLayout>
  );
}

export default Inscription;
*/
