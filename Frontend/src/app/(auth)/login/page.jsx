'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/modules/login.module.css';
import Link from 'next/link';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = [];

    // Validation for login (username/email)
    if (login.trim() === '') {
      validationErrors.push('Username or email is required');
    } else if (login.includes('@') && !regExpEmail.test(login)) {
      validationErrors.push('Invalid email format');
    } else if (login.length < 3) {
      validationErrors.push('Username must be at least 3 characters');
    }

    // Validation for password
    if (password.trim() === '') {
      validationErrors.push('Password is required');
    }

    // If there are errors, show them and stop submission
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // No errors, clear error messages and handle login
    setErrors([]);
    
    try {
      const response = await axios.post('/api/auth', {
        login,
        password
      });

      if (response.data) {
        // Store the authentication token and user data
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        // Redirect user to dashboard
        window.location.href = '/dashboard-company';
      }
    } catch (error) {
      setErrors([
        error.response?.data?.message || 'Login error occurred'
      ]);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="login">Username or Email</label>
          <input
            type="text"
            name="login"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formAux}>
          <Link href="/forgot-password">Forgot your password?</Link>
        </div>
        <div className={styles.formGroup}>
          <button type="submit">Log in</button>
        </div>
        <div className={styles.errors}>
          {errors.map((error, index) => (
            <div className={styles.error} key={index}>
              {error}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}