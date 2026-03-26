import { defineConfig } from "vite-plus";

const packageNames = ["core"];

export default defineConfig({
  pack: packageNames.map((name) => ({
    entry: [`./packages/${name}/src/index.ts`],
    outDir: `./packages/${name}/dist`,
    dts: true,
    format: ["esm", "cjs"],
  })),
  fmt: {
    semi: true,
    singleQuote: false,
    sortImports: {},
  },
});
