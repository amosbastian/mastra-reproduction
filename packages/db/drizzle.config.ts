import type { Config } from "drizzle-kit";

console.log("Using database URL:", process.env["DATABASE_URL"]);

export default {
  dbCredentials: {
    url: process.env["DATABASE_URL"] as string,
  },
  dialect: "postgresql",
  out: "./src/migrations",
  schema: "./dist/schema/**/*.js",
  strict: true,
} satisfies Config;
