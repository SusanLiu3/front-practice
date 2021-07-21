const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~/src/style/index.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src/"),
        "@components": resolve("src/components"),
      },
    },
  },
};
