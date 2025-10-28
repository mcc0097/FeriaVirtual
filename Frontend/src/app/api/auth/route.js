//login route for user authentication
import { NextResponse } from 'next/server';
import { UserService } from '@/lib/db/user.service';
import { 
  generateToken, 
  comparePasswords, 
  validateEmail 
} from '@/lib/utils/auth.dashboard-admin';

export async function POST(request) {
  try {
    const body = await request.json();
    const { login, password } = body;

    // Validate input
    if (!login || !password) {
      return NextResponse.json(
        { message: 'Login and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await UserService.findByEmailOrUsername(login);

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // In production, this will use real password comparison
    const isValidPassword = await comparePasswords(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate authentication token
    const token = generateToken(user.id);

    return NextResponse.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}