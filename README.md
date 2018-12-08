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
{{ _toc() }}
</div>
```

## Test

install AcyOrt

```bash
$ npm i acyort -g
```

then

```bash
$ cd test
$ acyort flow
```
