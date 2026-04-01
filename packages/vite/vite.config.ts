import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/index.ts"],
    outDir: "dist",
    dts: true,
    format: ["esm", "cjs"],
  },
});
