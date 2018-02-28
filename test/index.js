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

describe('toc', () => {
  it('get toc', async function () {
    this.timeout(5000)

    const acyort = new Acyort(config)
    await acyort.build()

    assert($('/about/index.html').html() === `<html><head></head><body><ul>
<li><a href="#about">ABOUT</a></li><li><a href="#skills">SKILLS</a></li><li><a href="#contact">CONTACT</a></li></ul>

</body></html>`)

    assert($('/time/index.html').html() === `<html><head></head><body></body></html>`)
  })

  it('reset', async function () {
    this.timeout(5000)

    const acyort = new Acyort(config)
    await acyort.start(2222)
    await acyort.build()

    assert(typeof acyort.helper.methods._toc === 'function')

    acyort.server.close()
  })
})
