/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — the site is hosted on Hostinger shared hosting, which
  // serves files over LiteSpeed/Apache and cannot run Node.
  output: "export",

  // Emits `about/index.html` instead of `about.html`, so Apache's DirectoryIndex
  // resolves `/about/` natively. Without this the export also writes an `about/`
  // directory (RSC payloads) that shadows `about.html`, and every internal link
  // 403s on Apache.
  trailingSlash: true,
};

export default nextConfig;
