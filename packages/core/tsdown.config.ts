import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    dts: true,
    format: ["esm", "cjs"],
    outDir: "dist",
  },
  {
    entry: ["src/index.ts"],
    dts: true,
    format: ["esm", "cjs"],
    outDir: "dist/mini",
    minify: true,
  },
]);
