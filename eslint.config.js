import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules: {
      "no-unused-vars": "warn",
      "no-use-before-define": "error",
      "vue/multi-word-component-names": "off",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      curly: ["error", "all"],
      "default-case": "warn",
      "default-case-last": "error",
      "default-param-last": "error",
      eqeqeq: ["error", "always"],
      "no-bitwise": "error"
    }
  },
  eslintConfigPrettier
];
