const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/common/components/"),
      "@assets": path.resolve(__dirname, "src/common/assets/"),
      "@hooks": path.resolve(__dirname, "src/common/hooks/"),
      "@hocs": path.resolve(__dirname, "src/common/hocs/"),
      "@utils": path.resolve(__dirname, "src/common/utils/")
    },
  },
};
