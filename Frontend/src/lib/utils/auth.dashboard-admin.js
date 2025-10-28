/**
 * Authentication Utilities
 * Functions for handling JWT tokens and authentication
 */

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

/**
 * Logs out user by removing token and redirecting to login
 */
export function logout() {
    removeToken();
    if (typeof window !== 'undefined') {
        window.location.href = '/login';
    }
}