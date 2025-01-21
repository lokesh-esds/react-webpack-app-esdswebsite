const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Output bundle file
  },
  mode: 'development', // Set mode to 'development' or 'production'
  devServer: {
    static: path.resolve(__dirname, 'dist'), // Serve files from 'dist'
    port: 3000, // Port for the development server
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transform JS and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template file for HTML
      filename: 'index.html',
    }),
  ],
};
