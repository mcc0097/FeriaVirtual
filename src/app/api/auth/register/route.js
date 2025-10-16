//this is the registration endpoint
import { NextResponse } from 'next/server';
import { UserService } from '@/lib/db/user.service';
import { 
  validateEmail, 
  validatePassword, 
  validateUsername,
  hashPassword,
  generateToken 
} from '@/lib/utils/auth.utils';

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!validateUsername(username)) {
      return NextResponse.json(
        { message: 'Username must be at least 3 characters long' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!validatePassword(password)) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await UserService.findByEmailOrUsername(email) 
      || await UserService.findByEmailOrUsername(username);

    if (existingUser) {
      return NextResponse.json(
        { message: 'Username or email already exists' },
        { status: 409 }
      );
    }

    // Hash password (mock for now)
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await UserService.createUser({
      username,
      email,
      password: hashedPassword
    });

    // Generate token
    const token = generateToken(user.id);

    return NextResponse.json({
      message: 'Registration successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}