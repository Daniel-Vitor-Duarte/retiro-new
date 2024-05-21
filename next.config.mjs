/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    basePath: "/retirovtsd-b",
};

export default nextConfig;
