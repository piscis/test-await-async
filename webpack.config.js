import webpack from 'webpack';
import path from 'path';

const environment = process.env.NODE_ENV || 'development';

const webpackConfig = {
  context: __dirname,
  debug: true,
  devtool: 'inline-source-map',
  entry: {
    main: [
      './src/helpers/async-await.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.sass', '.scss', '.css', '.jsx'],
    root: __dirname
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx|es6)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-async-to-generator']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
};

export default webpackConfig;
