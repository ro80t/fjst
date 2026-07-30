# fjst

A small toolkit for transforming built JavaScript output — obfuscation and
minification — plus a SvelteKit adapter wrapper that applies them
automatically during the build.

## Packages

- [`@fjst/core`](packages/core) — `jsObf` (obfuscation via
  [`javascript-obfuscator`](https://github.com/javascript-obfuscator/javascript-obfuscator))
  and `jsMinify` (minification via [`oxc-minify`](https://oxc.rs/docs/guide/usage/minifier))
- [`@fjst/sveltekit`](packages/sveltekit) — wraps any SvelteKit adapter to run
  transpilers over the built client `.js` files

See each package's README for install instructions and API details.

## Development

This is a [Bun](https://bun.sh) workspace monorepo, with tasks orchestrated by
[Turborepo](https://turbo.build).

```sh
bun install
bun run build
bun run test
bun run lint
bun run format
```

## Releases

Versioning and npm publishing are managed with
[Changesets](https://github.com/changesets/changesets). Run `bunx changeset`
to record a change; CI opens a version pull request and publishes to npm via
Trusted Publishing once it's merged.

## License

MIT
