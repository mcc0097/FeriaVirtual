// this is the registration Page Component

'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/modules/register.module.css';
import Link from 'next/link';

export default function RegisterPage() {
  // State management for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState([]);

  // Regular expressions for validation
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const PASSWORD_REGEX = {
    minLength: /.{6,}/,
    hasLower: /[a-z]/,
    hasUpper: /[A-Z]/,
    hasNumber: /[0-9]/
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = [];

    // Username validation
    if (formData.username.length < 3) {
      validationErrors.push('Username must be longer than 2 characters');
    }

    // Email validation
    if (!EMAIL_REGEX.test(formData.email.toLowerCase())) {
      validationErrors.push('Invalid email format');
    }

    // Password validation
    if (!PASSWORD_REGEX.minLength.test(formData.password) ||
        !PASSWORD_REGEX.hasLower.test(formData.password) ||
        !PASSWORD_REGEX.hasUpper.test(formData.password) ||
        !PASSWORD_REGEX.hasNumber.test(formData.password)) {
      validationErrors.push(
        'Password must have at least 6 characters, 1 lowercase, 1 uppercase and 1 number'
      );
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      validationErrors.push('Passwords do not match');
    }

    // If there are validation errors, show them and stop submission
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors([]);

    try {
      // Attempt to register user
      const response = await axios.post('/api/auth/register', {
        username: formData.username,
        email: formData.email.toLowerCase(),
        password: formData.password
      });

      if (response.data) {
        // Store authentication data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
      }
    } catch (error) {
      // Handle registration errors
      setErrors([
        error.response?.data?.message || 'Registration failed. Please try again.'
      ]);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
          />
        </div>

        <div className={styles.formGroup}>
          <button type="submit">Register</button>
        </div>

        {/* Display validation errors */}
        <div className={styles.errors}>
          {errors.map((error, index) => (
            <div key={index} className={styles.error}>
              {error}
            </div>
          ))}
        </div>

        {/* Link to login page */}
        <div className={styles.loginLink}>
          Already have an account? <Link href="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
}