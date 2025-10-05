/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hatrabbits.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'http',
        hostname: 'www.taskperfect.somee.com',
      },
      {
        protocol: 'http',
        hostname: '3.27.120.54',
      },
    ],
  },
};

export default nextConfig;
