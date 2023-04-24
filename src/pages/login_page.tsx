import React, { useState } from 'react';
import '../components/login/login.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // perform login action here
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="title">Login</h2>
        <div className="form-group">
          <label htmlFor="username" className="label">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
