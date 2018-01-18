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

new Acyort(config).build()
