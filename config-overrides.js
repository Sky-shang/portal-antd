const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const Jarvis = require('webpack-jarvis')
// addWebpackPlugin(
//   new Jarvis({
//     port: 1337,
//   })
// )
let plugins = [
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackPlugin(new CleanWebpackPlugin()),
]

// if (process.env.NODE_ENV === 'production') {
//   plugins.push(
//     addWebpackPlugin(
//       new BundleAnalyzerPlugin({
//         analyzerMode: 'static',
//         reportFilename: 'report.html',
//         openAnalyzer: false,
//         generateStatsFile: true,
//       })
//     )
//   )
// }

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  process.env.NODE_ENV === 'production' &&
    addWebpackPlugin(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        openAnalyzer: false,
        generateStatsFile: true,
      })
    ),
  ...plugins
)
