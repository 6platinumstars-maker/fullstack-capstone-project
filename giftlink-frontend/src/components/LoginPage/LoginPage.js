import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';
import { useAppContext } from '../../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
  // useState hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState('');

  const navigate = useNavigate();
  const { setIsLoggedIn, setUserName } = useAppContext();

  const bearerToken = sessionStorage.getItem('auth-token');

  useEffect(() => {
    if (bearerToken) {
      navigate('/app');
    }
  }, [bearerToken, navigate]);

  // handle login
  const handleLogin = async () => {
    try {
      setShowerr('');

      const response = await fetch(`${urlConfig.backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const json = await response.json();

      if (json.error) {
        setPassword('');
        setShowerr(json.error);
        return;
      }

      if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('name', json.userName);
        sessionStorage.setItem('email', json.userEmail);

        setIsLoggedIn(true);
        setUserName(json.userName);
        navigate('/app');
      }
    } catch (e) {
      console.log('Error fetching details: ' + e.message);
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="login-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Login</h2>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-danger">{showerr}</div>
            </div>

            {/* Login button */}
            <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
              Login
            </button>

            <p className="mt-4 text-center">
              New here? <a href="/app/register" className="text-primary">Register Here</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
