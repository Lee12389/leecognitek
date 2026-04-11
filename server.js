import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3000);
const distDir = path.join(__dirname, "dist");

app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distDir, { maxAge: "1h" }));

function ensureLeadStore() {
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  return path.join(dataDir, "contact_leads.jsonl");
}

async function sendLeadMail(lead) {
  const host = process.env.SMTP_HOST || "";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const from = process.env.CONTACT_FROM_EMAIL || user;
  const to = process.env.CONTACT_TO_EMAIL || "info@leecognitek.com";

  if (!host || !user || !pass || !from || !to) {
    return { mailed: false, reason: "SMTP not configured" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    "New lead from leecognitek.com",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "-"}`,
    `Company: ${lead.company || "-"}`,
    `Interest: ${lead.interest || "-"}`,
    "",
    lead.message || "",
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    subject: `New website lead: ${lead.name}`,
    text,
  });
  return { mailed: true };
}

app.post("/api/contact", async (req, res) => {
  try {
    const body = req.body && typeof req.body === "object" ? req.body : {};
    const lead = {
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      company: String(body.company || "").trim(),
      interest: String(body.interest || "").trim(),
      message: String(body.message || "").trim(),
      source: "website",
      received_at: new Date().toISOString(),
    };

    if (!lead.name || !lead.email || !lead.message) {
      return res.status(400).json({ ok: false, error: "Name, email, and message are required." });
    }

    const leadFile = ensureLeadStore();
    fs.appendFileSync(leadFile, `${JSON.stringify(lead)}\n`, "utf8");
    const mail = await sendLeadMail(lead);
    return res.json({ ok: true, ...mail });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ ok: false, error: message });
  }
});

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
