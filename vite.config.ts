import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {},
  lint: {
    ignorePatterns: ["dist/**", "node_modules/**"],
    categories: {
      correctness: "error",
    },
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  test: {
    include: ["packages/*/src/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/.git/**"],
    coverage: {
      provider: "v8",
      include: ["packages/*/src/**/*.ts"],
      exclude: ["packages/*/src/**/*.test.ts"],
      reporter: ["text"],
    },
  },
  staged: {
    "*.{js,ts,tsx,vue}": "vp check --fix",
  },
  run: {
    cache: true,
  },
});
