module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
      publicPath: `/dist`
  },
  devserver:{
    contentBase: './dist'
  },
  module: {
         rules: [
             {
                 test: /\.scss$/,
                 use: [
                     'style-loader',
                     'css-loader',
                     'sass-loader'
                 ]
             }
         ]
 }
};
