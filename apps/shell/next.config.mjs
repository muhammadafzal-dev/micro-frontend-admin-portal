import { withMicrofrontends } from "@vercel/microfrontends/next/config";

// The shell is the DEFAULT app of the microfrontends group. Routing to the
// other zones is now handled by Vercel's network (driven by microfrontends.json)
// and, locally, by the @vercel/microfrontends dev proxy — so we no longer hand-
// roll rewrites here. `withMicrofrontends` wires up the asset prefix + proxy.
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@portal/ui", "@portal/types", "@portal/config"],
};

export default withMicrofrontends(nextConfig);
