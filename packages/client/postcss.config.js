const path = require("path");

module.exports = {
  plugins: [
    require("tailwindcss")(path.join(__dirname, "tailwind.config.js")),
    require("vue-cli-plugin-tailwind/purgecss"),
    require("autoprefixer"),
  ],
};
