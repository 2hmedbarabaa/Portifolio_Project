// next.config.ts
const nextConfig = {
  output: 'export', // Remove this line if you're NOT doing a static export
  images: {
    unoptimized: true, // Required if using `output: 'export'`
  },
};

export default nextConfig;