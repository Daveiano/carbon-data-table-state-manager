import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    sass({ insert: true }),
    typescript({
      rollupCommonJSResolveHack: true,
      tsconfigOverride: {
        exclude: ["**/*.test.tsx"],
      },
    }),
  ],
};
