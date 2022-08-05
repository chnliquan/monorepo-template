# <%= locals.name %>

<%= locals.description %>

<% if (locals.github) { %>
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
$ cd packages
$ mkdir <sub-package-name>
$ pnpm run boot
```

4. [Commit semantically with scope](https://www.conventionalcommits.org/en/v1.0.0/#summary)

```bash
// good
$ git commit -m 'feat(<sub-package-name>): add some feature'
$ git commit -m 'fix(<sub-package-name>): fix some bug'
$ git commit -m 'docs: update readme'

// bad
$ git commit -m 'add some feature'
$ git commit -m 'fix some bug'

// bad
$ git commit -m 'feat: add some feature'
$ git commit -m 'fix: fix some bug'
```

5. Publish

```bash
$ pnpm run release
```

<% } else { %>
# 开发

1. 克隆仓库

```bash
$ git clone <%= locals.gitUrl %>
```

2. 安装依赖

```bash
$ pnpm i
```

3. 创建子包（可选）

```bash
$ cd packages
$ mkdir <sub-package-name>
$ pnpm run boot
```

4. [语义化提交Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary)

```bash
// good
$ git commit -m 'feat(<sub-package-name>): add some feature'
$ git commit -m 'fix(<sub-package-name>): fix some bug'
$ git commit -m 'docs: update readme'

// bad
$ git commit -m 'add some feature'
$ git commit -m 'fix some bug'

// bad
$ git commit -m 'feat: add some feature'
$ git commit -m 'fix: fix some bug'
```

5. 发布

```bash
$ pnpm run release
```
<% } %>

# LICENSE

[MIT](<%= locals.gitHref %>/blob/master/LICENSE)
