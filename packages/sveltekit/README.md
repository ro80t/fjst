# @fjst/sveltekit

Wraps any SvelteKit adapter and runs your own transpilers over the built
client `.js` files before the adapter finishes adapting.

## Install

```sh
npm install @fjst/sveltekit
bun add @fjst/sveltekit
```

## Usage

```js
// svelte.config.js
import { jsObf } from "@fjst/core";
import sveltekitFjst from "@fjst/sveltekit";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: { adapter: sveltekitFjst(adapter(), [jsObf]) },
};

export default config;
```

`sveltekitFjst` takes the adapter you'd normally pass to `kit.adapter`, plus a
list of transpilers, and returns a wrapped adapter. Every built client `.js`
file is passed through each transpiler, in order, before being written to
disk.

## API

### `sveltekitFjst(adapter: Adapter, transpilers: Transpiler[]): Adapter`

### `Transpiler`

```ts
type Transpiler = (src: string, filepath: string) => string;
```

`src` is the file's contents and `filepath` is the absolute path it will be
written to. The return value replaces the file's contents.

[`@fjst/core`](https://www.npmjs.com/package/@fjst/core) ships `jsObf` and
`jsMinify`, both usable as-is.
