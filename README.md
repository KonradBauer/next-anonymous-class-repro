# Class names lost in a minified server build

A class that is referenced only by its own module's export becomes an anonymous
class in a `next build` server bundle, so `constructor.name` is `""`.

```bash
pnpm install
pnpm build
pnpm start
curl http://localhost:3210/api/error
```

Expected: `"forbidden"` is a non-empty name, as it is with `next build --no-mangling`:

```json
{"className":"APIError","errorName":"APIError","forbidden":"Forbidden"}
```

Actual, on 16.3.8, 16.4.0 and 16.5.0-canary.3:

```json
{"className":"r","errorName":"r","forbidden":""}
```

The emitted chunk registers the export with the class inlined into it:

```js
e.s(["f",0,class extends r{constructor(){super("forbidden")}}],53228)
```

`APIError` keeps a (mangled) name only because `Forbidden` refers to it locally.
