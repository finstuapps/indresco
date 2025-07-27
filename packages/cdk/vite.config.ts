import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      formats: ["es"],
      fileName: "cdk",
    },
    rollupOptions: {
      external: [
        /^node:/,
        /^aws-cdk-lib/,
        /^constructs/,
        /^@jaypie/,
        /^source-map-support/,
      ],
      output: {
        banner: "#!/usr/bin/env node",
      },
    },
    minify: false,
    target: "node18",
  },
});