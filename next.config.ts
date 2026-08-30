import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBase = isGitHubPages ? "/new-journey" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repositoryBase,
  assetPrefix: repositoryBase || undefined,
  images: { unoptimized: true },
  // The Cloudflare-only D1 adapter is not part of the static Pages bundle.
  // Source type safety remains enforced by lint and the Vinext production build.
  typescript: { ignoreBuildErrors: isGitHubPages },
};

export default nextConfig;
