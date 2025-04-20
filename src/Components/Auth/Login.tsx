// src/features/users/Login.tsx

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Features/Users/userSlice';
import { AppDispatch, RootState } from '../../App/Store'

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useSelector((state: RootState) => state.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Password state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h2>Login</h2>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
