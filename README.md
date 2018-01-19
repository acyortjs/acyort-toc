# acyort-toc

Toc Helper for [AcyOrt](https://github.com/acyortjs/acyort)

[![Build Status](https://travis-ci.org/acyortjs/acyort-toc.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-toc)
[![codecov](https://codecov.io/gh/acyortjs/acyort-toc/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-toc)

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
{{ _toc(page) }}
</div>
```


