module.exports = {
  extends: "./package.json",
  rules: {
    "lines-between-class-members": ["warn"],
    "newline-before-return": "warn",
    "max-lines": "warn",
    "newline-after-var": "warn",
    "padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["const", "let", "var"],
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "multiline-const",
      },
      {
        blankLine: "always",
        prev: "multiline-const",
        next: ["const", "let", "var"],
      },
    ],
  },
};
