import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";

export default [
  {
    input: "build/build_helper.js",
    plugins: [nodePolyfills(), commonjs()],
    output: [
      {
        format: "umd",
        name: "window", // Add gpjs stuff to window so they're accessible as globals
        extend: "true", // Don't overwrite window!
        file: "build/geometry-processing.js",
        plugins: [],
      },
      {
        format: "umd",
        name: "window", // Add gpjs stuff to window so they're accessible as globals
        extend: "true", // Don't overwrite window!
        file: "build/geometry-processing.min.js",
        plugins: [terser()],
      },
      {
        format: "esm",
        file: "build/geometry-processing.module.js",
        plugins: [],
      },
      {
        format: "esm",
        file: "build/geometry-processing.module.min.js",
        plugins: [terser()],
      },
    ],
  },
];
