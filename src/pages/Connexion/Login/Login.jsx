function Login() {
  function submitLogin(event) {
    event.preventDefault();
  }

  return (
    <div className="inner-container">
      <div className="header">Login</div>
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
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password"
          />
        </div>

        <button type="button" className="login-btn" onClick={submitLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
