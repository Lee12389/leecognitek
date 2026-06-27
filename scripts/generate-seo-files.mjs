import fs from "fs";
import path from "path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const siteUrl = String(process.env.VITE_SITE_URL || process.env.SITE_URL || "https://leecognitek.com").replace(
  /\/$/,
  "",
);

const routes = ["/", "/vulnitek", "/mantrika", "/lstat"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

if (!fs.existsSync(distDir)) {
  console.error("dist directory not found; run vite build first.");
  process.exit(1);
}

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(distDir, "robots.txt"), robots, "utf8");
console.log(`Generated SEO files for ${siteUrl}`);
