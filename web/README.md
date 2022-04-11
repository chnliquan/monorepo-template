# <%= locals.name %>

<%= locals.description %>

# Getting Started

```bash

```

# Development

1. Download

```bash
$ git clone <%= locals.gitUrl %>
```

2. Install dependencies
   
```bash
$ pnpm i
```

3. Create sub package（optional）

```bash
$ mkdir package name
$ pnpm run boot
```

4. Commit with scope semantically

https://www.conventionalcommits.org/en/v1.0.0/#summary

5. Publish

```bash
$ pnpm run release
```

# LICENSE

[MIT](<%= locals.gitHref %>/blob/master/LICENSE)
