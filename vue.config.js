// module.exports = {
//     configureWebpack: (config) => {
//         config.module.rules.push({
//             test: /\.md$/,
//             use: [{
//                 loader: 'html-loader'
//             },{
//                 loader: 'markdown-loader',
//                 options: {}
//             }]
//         })
//     }
//     // chainWebpack: config => {
//     //     config.module
//     //         .rule('.md')
//     //         .test(/\.md$/)
//     //             .use('html-loader')
//     //                 .loader('html-loader')
//     //                 .end()
//     //             .use('markdown-loader')
//     //                 .loader('markdown-loader')
//     //                 .end()
//     // }
// }

// // module.exports = {
// //     chainWebpack: config => {
// //       config.module.rule('md')
// //         .test(/\.md$/)
// //         .use('vue-loader')
// //         .loader('vue-loader')
// //         .end()
// //         .use('vue-markdown-loader')
// //         .loader('vue-markdown-loader/lib/markdown-compiler')
// //         .options({
// //           raw: true
// //         })
// //     }
// //   }

module.exports = {
    chainWebpack: config => {
      config.module
        .rule('md')
        .test(/\.md$/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          raw: true
        })
    }
}