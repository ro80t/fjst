import { renameSync } from "node:fs";
import { join } from "node:path";

const proc = Bun.spawnSync(["bun", "pm", "pack", "--destination", ".", "--quiet"], {
  stdout: "pipe",
  stderr: "inherit",
});

if (proc.exitCode !== 0) {
  process.exit(proc.exitCode ?? 1);
}

const tarballPath = proc.stdout.toString().trim();
renameSync(tarballPath, join(process.cwd(), "package.tgz"));
