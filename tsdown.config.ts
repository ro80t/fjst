import pkgJson from "./package.json";
import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: pkgJson.workspaces,
});
