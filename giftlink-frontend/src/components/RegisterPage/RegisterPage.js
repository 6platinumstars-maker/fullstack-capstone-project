import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
  // useState hooks for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle register (for now, just log)
  const handleRegister = async () => {
    console.log('Register invoked');
    console.log({ firstName, lastName, email, password });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="register-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Register</h2>

            {/* firstName */}
            <div className="mb-4">
              <label htmlFor="firstName" className="form-label">FirstName</label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="Enter your firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* lastName */}
            <div className="mb-4">
              <label htmlFor="lastName" className="form-label">LastName</label>
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Enter your lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* email */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* password */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* register button */}
            <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>
              Register
            </button>

            <p className="mt-4 text-center">
              Already a member? <a href="/app/login" className="text-primary">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  ); // end of return
}

export default RegisterPage;
