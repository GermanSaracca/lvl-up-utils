import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "gsar-lvl-up-utils",
      fileName: "gsar-lvl-up-utils",
    },
  },
  plugins: [dts({ outDir: "dist" })],
});
