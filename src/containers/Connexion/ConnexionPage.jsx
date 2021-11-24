import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Login/Inscription';
import './Apps.css';
import PageLayout from '../../components/PageLayout';

const ConnexionPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const showLoginBox = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const showRegisterBox = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  return (
    <PageLayout>
      <div className="root-container m-10">
        <div className="box-controller">
          <div
            className={
              'controller ' + (isLoginOpen ? 'selected-controller' : '')
            }
            onClick={() => {
              showLoginBox();
            }}
          >
            Login
          </div>
          <div
            className={
              'controller ' + (isRegisterOpen ? 'selected-controller' : '')
            }
            onClick={() => {
              showRegisterBox();
            }}
          >
            Register
          </div>
        </div>
        <div className="box-container">
          {isLoginOpen && <Login />}
          {isRegisterOpen && <Register />}
        </div>
      </div>
    </PageLayout>
  );
};

export default ConnexionPage;
