import "dotenv/config";
import express from "express";
import authRouter from "./routes/auth.js";
import familiesRouter from "./routes/families.js";
import platformRouter from "./routes/platform/index.js";
import { env } from "./config/env.js";
import { requireApiAuth } from "./security/auth.js";
import { strictCors, strictRateLimit, strictSecurityHeaders } from "./security/hardening.js";

const app = express();
const port = env.port;

app.disable("x-powered-by");

app.use(strictSecurityHeaders);
app.use(strictCors);
app.use(strictRateLimit);
app.use(express.json({ limit: "256kb" }));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "kutumbsy-api-node" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", requireApiAuth);
app.use("/api/v1", familiesRouter);
app.use("/api/v1/platform", platformRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("unhandled error", err);
  res.status(500).json({ error: "internal server error" });
});

app.listen(port, () => {
  console.log(`kutumbsy api node listening on :${port}`);
});
