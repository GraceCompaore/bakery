import React from 'react';
import Login from './Login/Login';
import Register from './Login/Inscription';
import './Apps.css';

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
    };
  }
  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }
  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              'controller ' +
              (this.state.isLoginOpen ? 'selected-controller' : '')
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              'controller ' +
              (this.state.isRegisterOpen ? 'selected-controller' : '')
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>
        <div className="box-container">
          {this.state.isLoginOpen && <Login />}
          {this.state.isRegisterOpen && <Register />}
        </div>
      </div>
    );
  }
}
export default Apps;

/*import { useState } from 'react';

function Apps() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(true);

  return (
    <div className="box-container">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsLoginOpen(false)}
      >
        Connexion
      </button>
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsRegisterOpen(false)}
      >
        Inscription
      </button>
    </div>
  );
}
export default Apps;
*/
