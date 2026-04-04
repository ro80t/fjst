import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

import { jsObf } from "@fjst/core";
import type { Adapter, Builder } from "@sveltejs/kit";

export type Options = {
  obf?: (src: string) => string;
};

export default function (adapter: Adapter, options?: Options): Adapter {
  const obf = options?.obf ?? jsObf;
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
              writeFileSync(filePath, obf(unfixedContent));
            }
          }
          return files;
        },
      };

      await adapter.adapt(customizedBuilder);
    },
  };
}
