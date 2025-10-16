// This will be replaced with real JWT implementation
export const generateToken = (userId) => {
  return `mock-jwt-token-${userId}-${Date.now()}`;
};

export const verifyToken = (token) => {
  if (!token.startsWith('mock-jwt-token-')) {
    throw new Error('Invalid token');
  }
  
  const userId = token.split('-')[2];
  return { userId };
};

// This will be replaced with real password hashing (bcrypt)
export const hashPassword = async (password) => {
  // In production, this will use bcrypt
  return `hashed_${password}`;
};

export const comparePasswords = async (password, hashedPassword) => {
  // In production, this will use bcrypt.compare
  return hashedPassword === `hashed_${password}`;
};

// Validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6; // Basic validation
};

export const validateUsername = (username) => {
  return username.length >= 3;
};