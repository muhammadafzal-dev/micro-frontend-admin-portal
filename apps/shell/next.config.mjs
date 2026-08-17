// The shell is the HOST zone. It owns "/" and "stitches" the other zones into
// one origin via rewrites (Next.js Multi-Zones). The browser only ever sees the
// shell's origin; requests to /auth|/dashboard|/settings are proxied to each
// zone's own deployment. This is what makes four independent apps behave as one
// site on a single domain (e.g. abc.com/auth, abc.com/dashboard).
const AUTH = process.env.AUTH_ZONE_URL ?? "http://localhost:3001";
const DASHBOARD = process.env.DASHBOARD_ZONE_URL ?? "http://localhost:3002";
const SETTINGS = process.env.SETTINGS_ZONE_URL ?? "http://localhost:3003";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@portal/ui", "@portal/types", "@portal/config"],
  async rewrites() {
    return [
      // Each zone is mounted at its basePath. We forward both the bare prefix
      // and everything under it (pages AND /_next static assets).
      { source: "/auth", destination: `${AUTH}/auth` },
      { source: "/auth/:path*", destination: `${AUTH}/auth/:path*` },
      { source: "/dashboard", destination: `${DASHBOARD}/dashboard` },
      { source: "/dashboard/:path*", destination: `${DASHBOARD}/dashboard/:path*` },
      { source: "/settings", destination: `${SETTINGS}/settings` },
      { source: "/settings/:path*", destination: `${SETTINGS}/settings/:path*` },
    ];
  },
};

export default nextConfig;
