const path = require('path');

module.exports = {
  entry: './assets/js/index.js',
  mode: "production"

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader',
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins() {
                // post css plugins, can be exported to postcss.config.js
                return [
                  /* eslint-disable */
                  require('precss'),
                  require('autoprefixer'),
                  /* eslint-enable */
                ];
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ['file-loader'],
      },
    ],
  },
};
