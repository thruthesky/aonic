module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  copyIndexContent: {
    src: ['{{SRC}}/index.html'],
    dest: '{{WWW}}'
  },
  copyPolyfills: {
    src: ['{{SRC}}/etc/hack/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  }
}