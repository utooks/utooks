import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'http://localhost:3000',
    'localhost',
    'http://utook.iptime.org', 
    'http://utook.iptime.org:3000',
    '192.168.0.204',
    'http://192.168.0.204',
    'http://192.168.0.204:3000',
    'utook.iptime.org',
    '*.iptime.org',
  ],
};

export default nextConfig;
