import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Mock register
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
      />
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
      <button onClick={handleRegister} style={{ width: '100%', padding: '10px' }}>Register</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;