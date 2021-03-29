const withImages = require('next-images')
module.exports = withImages()

const webpack = require('webpack');
require('dotenv').config();


module.exports = {
    webpack: (config, options) => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
          acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
          return acc;
        }, {})
        config.plugins.push(new webpack.DefinePlugin(env))

        config.module.rules.push({
          rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: 'images/',
                      name: '[name][hash].[ext]',
                    },
                  },
                ],
              },
              {
                test: /\.(svg)$/,
                exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      noquotes: true,
                    },
                  },
                ],
              },
          ]
        })
    
        return config
    }
  }