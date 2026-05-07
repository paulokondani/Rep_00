import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
      <button onClick={handleLogin} style={{ width: '100%', padding: '10px' }}>Login</button>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;