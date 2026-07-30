# @fjst/core

fjst's core. A small collection of source transforms for JavaScript output.

## Install

```sh
npm install @fjst/core
bun add @fjst/core
```

## API

### `jsObf(src: string): string`

Obfuscates JavaScript source code. A thin wrapper around
[`javascript-obfuscator`](https://github.com/javascript-obfuscator/javascript-obfuscator).

```ts
import { jsObf } from "@fjst/core";

const obfuscated = jsObf("const answer = 42;");
```

### `jsMinify(src: string, filepath: string): string`

Minifies JavaScript source code. A thin wrapper around
[`oxc-minify`](https://oxc.rs/docs/guide/usage/minifier). `filepath` is passed
through to `oxc-minify` and is used to determine how the source should be
parsed.

```ts
import { jsMinify } from "@fjst/core";

const minified = jsMinify("const answer = 42;", "answer.js");
```

### `jsTranspile(target: string | string[]): (src: string, filepath: string) => string`

Downlevels JavaScript to a given ECMAScript target. A thin wrapper around
[`oxc-transform`](https://oxc.rs/docs/guide/usage/transformer). Unlike `jsObf`
and `jsMinify`, this is a factory: call it with a target to get back a
transpiler.

```ts
import { jsTranspile } from "@fjst/core";

const transpiler = jsTranspile("es2015");
const transpiled = transpiler("const add = (a, b) => a + b;", "add.js");
```

Targeting older environments may emit `require("@oxc-project/runtime/...")`
helper calls (e.g. for private class fields); install
[`@oxc-project/runtime`](https://www.npmjs.com/package/@oxc-project/runtime)
if you use those features.

All three functions match the `Transpiler` shape expected by
[`@fjst/sveltekit`](https://www.npmjs.com/package/@fjst/sveltekit) and can be
passed directly into it (`jsTranspile` once called with a target).
