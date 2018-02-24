const tocFn = require('markdown-toc')

function toc({ raw }) {
  const { marker } = this
  const { content } = tocFn(raw)
  const { headingIdFormater } = marker

  let html = marker.parse(content)

  const hrefs = html.match(/href="([^"]*")/g) || []
  const hrefsifies = hrefs.map((href) => {
    let s = href.split('href="')[1]
    s = s.substring(0, s.length - 1)
    s = headingIdFormater(s)
    return `href="${s}"`
  })

  hrefs.forEach((href, i) => {
    html = html.replace(href, hrefsifies[i])
  })

  return html
}

module.exports = toc
