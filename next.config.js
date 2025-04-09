/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV = 'production');

const config = {
  basePath: isProd ? '/react-dashboard' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = config;
