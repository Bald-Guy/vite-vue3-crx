const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  ignores: [
    'node_modules',
    'dist',
    'public',
  ],
})
