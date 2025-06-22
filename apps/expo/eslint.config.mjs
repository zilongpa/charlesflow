import baseConfig from "@charlesflow/eslint-config/base";
import reactConfig from "@charlesflow/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
