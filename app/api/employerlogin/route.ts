import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password, role } = await req.json();

  if (!email || !password || !role) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 200 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 202 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 202 });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return NextResponse.json({ message: 'Server configuration error' }, { status: 205 });
    }

    const token = jwt.sign({ userId: user.id }, secret, {
      expiresIn: '1h',
    });

    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error }, { status: 206 });
  }
}
