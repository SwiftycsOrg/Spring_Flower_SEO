/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const nextConfig = {};

export default nextConfig;
