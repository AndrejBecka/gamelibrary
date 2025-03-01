/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      "api.deepai.org",
      "static1.srcdn.com",
      "static1.thegamerimages.com",
      "encrypted-tbn0.gstatic.com",
      "cdn.mos.cms.futurecdn.net",
      "miro.medium.com",
      "image.api.playstation.com",
      "shared.cloudflare.steamstatic.com",
      "images.steamusercontent.com",
      "pcoutlet.com"
    ],
  },
};

export default config;
