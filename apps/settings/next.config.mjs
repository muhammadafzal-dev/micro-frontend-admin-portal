import { withMicrofrontends } from "@vercel/microfrontends/next/config";

// Child microfrontend serving everything under /settings.
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/settings",
  reactStrictMode: true,
  transpilePackages: ["@portal/ui", "@portal/types", "@portal/config"],
};

export default withMicrofrontends(nextConfig);
