/**
 * Authentication Utilities - Unified
 * All authentication functions in one place
 */

// ========================================
// TOKEN MANAGEMENT
// ========================================

/**
 * Gets authentication token from localStorage
 * @returns {string|null} The token or null if not found
 */
export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

/**
 * Saves authentication token to localStorage
 * @param {string} token - JWT token to save
 */
export function saveToken(token) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('auth_token', token);
}

/**
 * Removes authentication token from localStorage
 */
export function removeToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
}

/**
 * Decodes a JWT token
 * @param {string} token - JWT token to decode
 * @returns {Object|null} Decoded token payload or null if invalid
 */
export function decodeToken(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}

// ========================================
// AUTHENTICATION CHECKS
// ========================================

/**
 * Checks if user is authenticated
 * @returns {boolean} True if user has valid token
 */
export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;

  const decoded = decodeToken(token);
  if (!decoded) return false;

  // Check if token is expired (if exp field exists)
  if (decoded.exp) {
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      removeToken();
      return false;
    }
  }

  return true;
}

// ========================================
// LOGIN / LOGOUT
// ========================================

/**
 * Login function - calls API
 * @param {Object} credentials - User credentials
 * @returns {Promise<Object>} Login response
 */
export async function login(credentials) {
  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error en el inicio de sesión');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Logs out user by removing token and redirecting to login
 */
export function logout() {
  removeToken();
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

// ========================================
// USER DATA
// ========================================

/**
 * Get current user data from localStorage
 * @returns {Object|null} User object or null if not found
 */
export function getCurrentUser() {
  if (typeof window === 'undefined') return null;

  const userStr = localStorage.getItem('user');
  try {
    return userStr ? JSON.parse(userStr) : null;
  } catch {
    return null;
  }
}

// ========================================
// TOKEN GENERATION (MOCK - for development)
// ========================================

/**
 * Generate mock JWT token (will be replaced with real implementation)
 * @param {string} userId - User ID
 * @returns {string} Mock token
 */
export function generateToken(userId) {
  return `mock-jwt-token-${userId}-${Date.now()}`;
}

/**
 * Verify mock token (will be replaced with real implementation)
 * @param {string} token - Token to verify
 * @returns {Object} Decoded user data
 */
export function verifyToken(token) {
  if (!token.startsWith('mock-jwt-token-')) {
    throw new Error('Invalid token');
  }

  const userId = token.split('-')[2];
  return { userId };
}

// ========================================
// PASSWORD UTILITIES (MOCK - for development)
// ========================================

/**
 * Hash password (will be replaced with bcrypt)
 * @param {string} password - Plain password
 * @returns {Promise<string>} Hashed password
 */
export async function hashPassword(password) {
  // In production, this will use bcrypt
  return `hashed_${password}`;
}

/**
 * Compare passwords (will be replaced with bcrypt.compare)
 * @param {string} password - Plain password
 * @param {string} hashedPassword - Hashed password
 * @returns {Promise<boolean>} True if passwords match
 */
export async function comparePasswords(password, hashedPassword) {
  // In production, this will use bcrypt.compare
  return hashedPassword === `hashed_${password}`;
}

// ========================================
// VALIDATION UTILITIES
// ========================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {boolean} True if valid
 */
export function validatePassword(password) {
  return password.length >= 6;
}

/**
 * Validate username format
 * @param {string} username - Username to validate
 * @returns {boolean} True if valid
 */
export function validateUsername(username) {
  return username.length >= 3;
}