import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-css-only";

export default {
  input: "main.js",
  output: {
    dir: "output",
    format: "iife",
    sourcemap: "inline",
    name: "MyBundle",
  },
  plugins: [
    css({
      output: "bundle.css",
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    // terser()
  ],
};
