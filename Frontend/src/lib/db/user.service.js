// Mock database service - Replace this with real database implementation later
//this is for auth service
const mockUsers = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: 'hashed_admin123', // Mock hashed password for development
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export class UserService {
  static async findByEmail(email) {
    return mockUsers.find(user => user.email === email);
  }

  static async findByUsername(username) {
    return mockUsers.find(user => user.username === username);
  }

  static async findByEmailOrUsername(login) {
    return mockUsers.find(user => 
      user.email === login || user.username === login
    );
  }

  static async createUser({ username, email, password }) {
    const newUser = {
      id: mockUsers.length + 1,
      username,
      email,
      password, // Will be hashed in production
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockUsers.push(newUser);
    return newUser;
  }

  // Add more methods as needed
}