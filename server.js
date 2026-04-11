import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3000);
const distDir = path.join(__dirname, "dist");

app.disable("x-powered-by");
app.use(express.static(distDir, { maxAge: "1h" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "leecognitek-web" });
});

// SPA fallback so React routes work in production.
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Web server running on port ${port}`);
});
