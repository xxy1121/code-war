/**
 * answer：解题
 * chore：日常
 * config：配置，架构
 */
const types = [
    "answer",
    "chore",
    "config",
  ];
  
  typeEnum = {
    rules: {
      "type-enum": [2, "always", types],
    },
    value: () => types,
  };
  
  module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-case": [0],
      "type-empty": [0],
      "scope-empty": [0],
      "scope-case": [0],
      "subject-full-stop": [0, "never"],
      "subject-case": [0, "never"],
      "header-max-length": [0, "always", 72],
      "type-enum": typeEnum.rules["type-enum"],
    },
  };
  