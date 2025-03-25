import { NextResponse, NextRequest } from 'next/server';

// Define required environment variables
const requiredEnvVars = [
  'FAPSHI_BASE_URL',
  'FAPSHI_API_USER',
  'FAPSHI_API_KEY',
] as const;

interface EnvCheckResult {
  isValid: boolean;
  missing?: string[];
}

// Function to check environment variables
function checkEnvVariables(): EnvCheckResult {
  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    return {
      isValid: false,
      missing: missingVars,
    };
  }

  // Log all environment variables (excluding sensitive data)
  console.log('Environment Variables Status:', {
    FAPSHI_BASE_URL: process.env.FAPSHI_BASE_URL,
    FAPSHI_API_USER: process.env.FAPSHI_API_USER ? '***' : undefined,
    FAPSHI_API_KEY: process.env.FAPSHI_API_KEY ? '***' : undefined,
  });

  return { isValid: true };
}

export function middleware(request: NextRequest) {
  // Only handle API routes
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Check environment variables
  const envCheck = checkEnvVariables();
  if (!envCheck.isValid && envCheck.missing) {
    return NextResponse.json(
      {
        error: 'Environment configuration error',
        message: `Missing required environment variables: ${envCheck.missing.join(', ')}`,
      },
      { status: 500 }
    );
  }

  // Log API request details
  console.log('API Request:', {
    path: request.nextUrl.pathname,
    method: request.method,
    timestamp: new Date().toISOString(),
  });

  // Clone the request to modify headers
  const requestHeaders = new Headers(request.headers);
  
  // Add security headers
  requestHeaders.set('X-Content-Type-Options', 'nosniff');
  requestHeaders.set('X-Frame-Options', 'DENY');
  requestHeaders.set('X-XSS-Protection', '1; mode=block');

  // Create a new request with modified headers
  const modifiedRequest = new Request(request.url, {
    method: request.method,
    headers: requestHeaders,
    body: request.body,
  });

  // Create response with modified request
  const response = NextResponse.next({
    request: modifiedRequest,
  });

  // Add response headers
  response.headers.set('X-API-Route', 'true');
  response.headers.set('X-Response-Time', Date.now().toString());

  return response;
}

// Configure middleware to only run on API routes
export const config = {
  matcher: '/api/:path*',
}; 