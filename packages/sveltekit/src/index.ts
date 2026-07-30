import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import type { Adapter, Builder } from "@sveltejs/kit";

export type Transpiler = (src: string, filepath: string) => string;

export default function (adapter: Adapter, transpilers: Transpiler[]): Adapter {
  return {
    ...adapter,
    async adapt(builder) {
      builder.log.info(`${adapter.name} is wrapped by @fjst/sveltekit`);

      const customizedBuilder: Builder = {
        ...builder,
        writeClient(dest) {
          const files = builder.writeClient(dest);
          for (const file of files) {
            const filePath = join(dest, file);
            const unfixedContent = readFileSync(filePath, "utf-8");
            if (filePath.endsWith(".js")) {
              let fixedContent = unfixedContent;

              for (const transpiler of transpilers) {
                fixedContent = transpiler(fixedContent, filePath);
              }

              writeFileSync(filePath, fixedContent);
            }
          }
          return files;
        },
      };

      await adapter.adapt(customizedBuilder);
    },
  };
}
