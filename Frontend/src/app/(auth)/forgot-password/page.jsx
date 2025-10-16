'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/modules/forgot-password.module.css';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = [];

    // Reset states
    setErrors([]);
    setSuccessMessage('');
    
    // Email validation
    if (email.trim() === '') {
      validationErrors.push('Please enter your Email.');
    } else if (!emailRegex.test(email.toLowerCase())) {
      validationErrors.push('Please enter a valid email address.');
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // This will be implemented when the API is ready
      const response = await axios.post('/api/auth/forgot-password', {
        email: email.toLowerCase()
      });

      setSuccessMessage(
        'If an account exists with this email, you will receive password reset instructions shortly.'
      );
      setEmail(''); // Clear the form
    } catch (error) {
      // We don't want to reveal if the email exists or not for security
      setSuccessMessage(
        'If an account exists with this email, you will receive password reset instructions shortly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Forgot your password?</h2>
      <p className={styles.description}>
        Enter your email address below and we&apos;ll send you a link to reset your password.
      </p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <button 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send reset link'}
          </button>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className={styles.success}>
            {successMessage}
          </div>
        )}

        {/* Error Messages */}
        <div className={styles.errors}>
          {errors.map((error, index) => (
            <div key={index} className={styles.error}>
              {error}
            </div>
          ))}
        </div>

        {/* Back to login link */}
        <div className={styles.loginLink}>
          Remember your password? <Link href="/login">Back to login</Link>
        </div>
      </form>
    </div>
  );
}