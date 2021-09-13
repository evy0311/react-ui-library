const custom = require('./webpack.config.js');

module.exports = {
  stories: [
    '../src/**/stories.js', // The name should have a prefix for component name like `button.stories.js` instead of `stories.js` like you've done. As you renamed, you can remove this pattern
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        rules: custom.module.rules,
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      }
    };
  },
};

// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
// //   stories: ['../src/stories/**/*.stories.js'],
// stories: [
//         // '../src/**/stories.js', // The name should have a prefix for component name like `button.stories.js` instead of `stories.js` like you've done. As you renamed, you can remove this pattern
//         "../src/**/*.stories.@(js|jsx|ts|tsx)"
//       ],
//   addons: ['@storybook/addon-actions', '@storybook/addon-links'],

//   webpackFinal: async (config, { configType }) => {
//     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
//     // You can change the configuration based on that.
//     // 'PRODUCTION' is used when building the static version of storybook.

//     config.module.rules.map((rule) => {
//       if (rule.oneOf) {
//         rule.oneOf = rule.oneOf.slice().map((subRule) => {
//           if (subRule.test instanceof RegExp && subRule.test.test('.scss')) {
//             return {
//               ...subRule,
//               use: [
//                 ...subRule.use,
//                 {
//                   loader: require.resolve('sass-resources-loader'),
//                   options: {
//                     resources: [
//                       path.resolve(__dirname, '../src/lib/Button/styles.module.scss'),
//                       path.resolve(__dirname, '../src/styles/_helpers.scss')
//                     //   /home/emhorsley/IEL/react-ui-library/src/lib/Button/styles.module.scss
//                     ]
//                   }
//                 }
//               ],
//             }
//           }
//           return subRule;
//         });
//       }
//       return rule;
//     });
//     return config;
//   },
// };