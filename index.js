const tocFn = require('markdown-toc')

module.exports = (acyort) => {
  function toc() {
    const { raw } = this
    const { content } = tocFn(raw)

    let html = acyort.renderer.render('markdown', content)

    const hrefs = html.match(/href="([^"]*")/g) || []
    const hrefsifies = hrefs.map((href) => {
      let s = href.split('href="')[1]
      s = s.substring(0, s.length - 1)
      return `href="${s}"`
    })

    hrefs.forEach((href, i) => {
      html = html.replace(href, hrefsifies[i])
    })

    return html
  }

  acyort.helper.register('_toc', toc)
}
