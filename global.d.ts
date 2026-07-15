// Allows TypeScript to resolve side-effect CSS imports (e.g. import "./globals.css")
// on a cold checkout before `next build` regenerates next-env.d.ts.
declare module "*.css";
