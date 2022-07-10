module.exports = {
  plugins: [
    require('postcss-rem-to-responsive-pixel')({
      rootValue: 8,
      propList: ['*'],
      transformUnit: 'rpx'
    })
  ]
}
