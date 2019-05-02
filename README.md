# acyort-toc

Toc Helper for [AcyOrt](https://github.com/acyortjs/acyort)

## Install

```bash
$ npm i acyort-toc -S
```

## Usage

```yml
# config.yml
# ...
plugins:
  - acyort-toc
# ...
```

```html
<!-- post.html -->
<div class="toc">
{{ _toc(page.raw) }}
</div>
```

Text slugify API

```js
const { slugify } = require('acyort-toc')

slugify('I ♥ Dogs') // i-love-dogs
slugify('这是@一#段$；¥中#文「【') // 这是-一-段-中-文
```

## Test

```bash
$ npm i acyort -g

$ npm t
```
