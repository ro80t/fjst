import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    workspace: true,
  },
  fmt: {
    semi: true,
    singleQuote: false,
    useTabs: false,
    tabWidth: 4,
    sortImports: {},
  },
});
