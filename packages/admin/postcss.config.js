/**
 * このファイルはPostCSSの設定ファイルです。
 * TailwindCSSとAutoprefixerを使用するための設定です。
 */

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'postcss-nested': {},
    'autoprefixer': {},
  },
}
