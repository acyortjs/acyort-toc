const transform = require('doctoc/lib/transform')
const slugify = require('./slugify')

module.exports = (acyort) => {
  const hrefRegex = /href="(.*?)"/g
  const aRegex = /<a href=".*?">(.*?)<\/a>/

  acyort.helper.register('_toc', (raw) => {
    const { toc: content } = transform(raw, undefined, undefined, undefined, true)

    if (!content) {
      return ''
    }

    let html = acyort.renderer.render('markdown', content)

    const hrefs = html.match(hrefRegex)

    html.match(new RegExp(aRegex, 'g'))
      .map(a => slugify(aRegex.exec(a)[1]))
      .forEach((t, i) => {
        const withHref = `href="#${t}"`
        html = html.replace(hrefs[i], withHref)
      })

    return html
  })
}

module.exports.slugify = slugify
