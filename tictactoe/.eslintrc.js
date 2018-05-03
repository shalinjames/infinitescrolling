module.exports = {
  extends: ["eslint:recommended", "airbnb", "plugin:react/recommended"],
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": ["error", "unix"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never"
      }
    ]
  }
  // env: {
  //   browser: true,
  //   commonjs: true,
  //   es6: true
  // },

  // parserOptions: {
  //   ecmaFeatures: {
  //     experimentalObjectRestSpread: true,
  //     jsx: true
  //   },
  //   sourceType: "module"
  // },
  // plugins: ["react"],
  // rules: {
  //   indent: ["error", 4],
  //   "linebreak-style": ["error", "windows"],
  //   quotes: ["error", "double"],
  //   semi: ["error", "always"]
  // }
};
