const tocFn = require('markdown-toc')

function toc({ raw }) {
  const { markeder } = this
  const { content } = tocFn(raw)

  let html = markeder.mark(content)

  const hrefs = html.match(/href="([^"]*")/g) || []
  const hrefsifies = hrefs.map(href => decodeURIComponent(href.replace(/_|-/g, '')))

  hrefs.forEach((href, i) => {
    html = html.replace(href, hrefsifies[i])
  })

  return html
}

module.exports = toc
