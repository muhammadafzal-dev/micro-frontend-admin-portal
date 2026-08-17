import { withMicrofrontends } from "@vercel/microfrontends/next/config";

// Child microfrontend serving everything under /dashboard.
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/dashboard",
  reactStrictMode: true,
  transpilePackages: ["@portal/ui", "@portal/types", "@portal/config"],
};

export default withMicrofrontends(nextConfig);
