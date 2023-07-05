module.exports = {
  root: true,
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
  },
};
