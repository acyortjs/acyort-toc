const slugify = require('@sindresorhus/slugify')

const chinese = /[\u4E00-\u9FA5]/g
const space = /\s+/g
const punctuation = /["`~!@#$^&*()=|{}':;',[\].<>/?~！&*（）——|{}【】「」¥‘；：”“'。，、？]/g

module.exports = (s) => {
  if (chinese.test(s)) {
    return s.trim()
      .replace(space, '')
      .replace(punctuation, '-')
  }
  return slugify(s)
}
