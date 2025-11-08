// app/api/login/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the JSON body from the incoming request (from the login form)
    const body = await request.json();

    // Forward the request to your NestJS backend for authentication
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',                          // Use HTTP POST
      headers: { 'Content-Type': 'application/json' }, // Specify JSON body
      body: JSON.stringify(body),              // Send login data (email/password)
    });

    // Parse the JSON response returned by the backend (token, user info, etc.)
    const data = await res.json();

    // Return the backend’s response to the frontend, preserving the same HTTP status
    return NextResponse.json(data, { status: res.status });

  } catch (error) {
    // If anything fails (network, parsing, etc.), log the error
    console.error('Error in login proxy:', error);

    // Send a 500 Internal Server Error response to the client
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}