import fs from "node:fs";
import path from "node:path";
import express from "express"; // Note: Use express directly
import { app } from "./app"; // Import the exported app instance

// 1. Keep the function that sets up static serving
async function serveStatic(appInstance, _server) {
  const distPath = path.resolve(__dirname, "public"); // Use __dirname for compiled paths
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  appInstance.use(express.static(distPath));
  appInstance.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

// 2. We need a function to fully configure the app *before* the first request.
// This is typically done outside the handler to ensure it only runs once.
let configuredAppPromise: Promise<express.Express>;

async function setupApp() {
    // Assuming registerRoutes also adds routes to 'app'
    const server = await registerRoutes(app); 
    // Add your static file serving setup here
    await serveStatic(app, server);
    
    // Add error handling middleware (if you removed it from runApp)
    app.use((err, _req, res, _next) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
        // Do not throw here in serverless context
    });
    
    return app;
}

// Ensure setup runs once, and store the promise
if (!configuredAppPromise) {
    configuredAppPromise = setupApp();
}

// 3. EXPORT A HANDLER FUNCTION for Vercel
export default async function handler(req, res) {
    const configuredApp = await configuredAppPromise;
    configuredApp(req, res); // This delegates the request to the Express app
}