import express, { type Express } from "express";
import fs from "fs";
import path from "path";

const VALID_CLIENT_ROUTES = new Set([
  "/",
  "/story",
  "/products",
  "/training",
  "/subscription",
  "/gallery",
  "/featured",
  "/contact"
]);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (req, res) => {
    let pathName = req.originalUrl.split('?')[0];
    if (pathName.length > 1 && pathName.endsWith("/")) {
      pathName = pathName.slice(0, -1);
    }
    const isErrorPage = !VALID_CLIENT_ROUTES.has(pathName);
    if (isErrorPage) {
      res.status(404);
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
