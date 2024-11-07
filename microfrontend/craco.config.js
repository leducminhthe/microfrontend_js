const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: 'http://localhost:8080/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      };

      webpackConfig.devServer = {
        port: 8080,
      };

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin({
          name: 'container',
          remotes: {
            microfrontend1: 'microfrontend1@http://localhost:8081/remoteEntry.js',
          },
          shared: {
            react: { singleton: true, eager: true, strictVersion: true, requiredVersion: "^18.3.1" },
            "react-dom": { singleton: true, eager: true, strictVersion: true, requiredVersion: "^18.3.1" },
            antd: { singleton: true, strictVersion: true, eager: true },
          },
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ];

      return webpackConfig;
    },
  },
};
