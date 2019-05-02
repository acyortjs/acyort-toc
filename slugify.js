const slugify = require('@sindresorhus/slugify')

module.exports = (s) => {
  const chinese = /[\u4E00-\u9FA5]/g
  const space = /\s+/g
  const punctuation = /["`~!@#$^&*()=|{}':;',[\].<>/?~！&*（）——|{}【】「」¥‘；：”“'。，、？]/g

  if (chinese.test(s)) {
    return s.trim()
      .split(space)
      .join('')
      .split(punctuation)
      .join('-')
      .split('-')
      .filter(t => t)
      .join('-')
  }
  return slugify(s)
}
