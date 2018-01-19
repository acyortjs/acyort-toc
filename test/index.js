const fs = require('fs')
const path = require('path')
const cheerio = require('cheerio')
const assert = require('power-assert')
const Acyort = require('acyort')
const { defaults } = require('acyort-config')

const $ = file => cheerio.load(fs.readFileSync(path.join(__dirname, file)))
const config = defaults

config.base = __dirname
config.cache =  true
config.scripts = ['helper.js']
config.scripts_dir = '/'

const acyort = new Acyort(config)

describe('toc', () => {
  it('get toc', async function () {
    this.timeout(5000)
    await acyort.build()

    assert($('/posts/126817142.html').html() === `<html><head></head><body><ul>
<li><a href="#&#x9884;&#x89C8;&#x5730;&#x5740;">&#x9884;&#x89C8;&#x5730;&#x5740;</a></li><li><a href="#&#x9879;&#x76EE;&#x5730;&#x5740;">&#x9879;&#x76EE;&#x5730;&#x5740;</a></li><li><a href="#&#x5982;&#x4F55;&#x5B89;&#x88C5;">&#x5982;&#x4F55;&#x5B89;&#x88C5;</a></li><li><a href="#&#x4F7F;&#x7528;">&#x4F7F;&#x7528;</a><ul>
<li><a href="#&#x65B0;&#x5EFA;">&#x65B0;&#x5EFA;</a></li><li><a href="#&#x914D;&#x7F6E;&#x4F60;&#x7684;blog">&#x914D;&#x7F6E;&#x4F60;&#x7684; blog</a></li><li><a href="#&#x751F;&#x6210;&#x535A;&#x5BA2;">&#x751F;&#x6210;&#x535A;&#x5BA2;</a></li><li><a href="#&#x53D1;&#x5E03;&#x4F60;&#x7684;blog">&#x53D1;&#x5E03;&#x4F60;&#x7684; blog</a></li><li><a href="#&#x6700;&#x540E;">&#x6700;&#x540E;</a></li></ul>
</li><li><a href="#&#x53E6;&#x4E00;&#x79CD;&#x5B89;&#x88C5;&#x65B9;&#x5F0F;">&#x53E6;&#x4E00;&#x79CD;&#x5B89;&#x88C5;&#x65B9;&#x5F0F;</a></li><li><a href="#&#x540D;&#x5B57;&#x6765;&#x6E90;">&#x540D;&#x5B57;&#x6765;&#x6E90;</a></li></ul>

</body></html>`)

    assert($('/posts/244718742.html').html() === `<html><head></head><body></body></html>`)
  })
})
