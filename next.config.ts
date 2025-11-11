const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/index",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
