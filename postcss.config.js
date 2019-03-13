const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: 'postcss-scss',
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss"
    }),
    require("autoprefixer")({
      browsers: ["last 2 versions"],
      cascade: false
    }),
    require("postcss-advanced-variables")({
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      )
    }),
    require('postcss-rem')({
      baseline: 16,     // Default to 16
      // convert: 'px', // Default to rem
      // fallback: true    // Default to false
      // precision: 6      // Default to 5
    }),
    require("postcss-nested"),
    require("postcss-rgb"),
    require('postcss-assets')({
       loadPaths: ['**'],
       cachebuster: true
    }),
    require("postcss-inline-svg")({
      removeFill: true,
      path: "./src/images/icons"
    }),
    require("cssnano"),
    // require("postcss-pxtorem")({
    //   rootValue: 16,
    //   propList: ["*", "!*border*"],
    //   selectorBlackList: [/^html$/]
    // })
  ]
};
