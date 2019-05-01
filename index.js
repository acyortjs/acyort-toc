const transform = require('doctoc/lib/transform')

module.exports = (acyort) => {
  acyort.helper.register('_toc', (raw) => {
    const { toc: content } = transform(raw, undefined, undefined, undefined, true)
    return acyort.renderer.render('markdown', content)
  })
}
