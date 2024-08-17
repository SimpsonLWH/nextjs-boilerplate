// src/app/api/auth/providers/route.ts
import { NextResponse } from 'next/server';
import { getProviders } from 'next-auth/react';

export async function GET() {
  const providers = await getProviders();
  return NextResponse.json({ providers });
}