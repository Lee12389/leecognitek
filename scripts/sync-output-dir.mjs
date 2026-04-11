import fs from "fs";
import path from "path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const buildDir = path.join(root, "build");

if (!fs.existsSync(distDir)) {
  console.error("dist directory not found after vite build");
  process.exit(1);
}

fs.rmSync(buildDir, { recursive: true, force: true });
fs.cpSync(distDir, buildDir, { recursive: true });

console.log("Synced dist -> build for hosting output compatibility.");
