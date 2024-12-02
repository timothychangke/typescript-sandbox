// remember to remove all the .js extensions from your webpack file
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin')
 
module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    // using the in built path module from nodejs, you can get your absolute path
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    // rules are specified for files that match the regex
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // this tell webpack what files to bundle together
  resolve: {
    extensions: ['.ts', '.js'],
  },
  // this plugin clears the dist folder everytime there is a new build
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
