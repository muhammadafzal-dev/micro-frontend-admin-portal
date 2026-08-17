import { withMicrofrontends } from "@vercel/microfrontends/next/config";

// Child microfrontend. basePath makes this app serve everything under /auth
// (matching its routing paths in microfrontends.json). withMicrofrontends adds
// the unique asset prefix so static assets never collide with other zones.
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/auth",
  reactStrictMode: true,
  transpilePackages: ["@portal/ui", "@portal/types", "@portal/config"],
};

export default withMicrofrontends(nextConfig);
