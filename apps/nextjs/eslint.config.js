import baseConfig, { restrictEnvAccess } from "@charlesflow/eslint-config/base";
import nextjsConfig from "@charlesflow/eslint-config/nextjs";
import reactConfig from "@charlesflow/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
