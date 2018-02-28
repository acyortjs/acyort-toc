const toc = require('../toc')

const { running } = acyort.server.status

if (!running) {
  acyort.helper.register('_toc', toc.bind(acyort))
}
