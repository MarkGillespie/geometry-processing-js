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
        name: "gpjs",
        file: "build/geometry-processing.js",
        plugins: [],
      },
      {
        format: "umd",
        name: "gpjs",
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
