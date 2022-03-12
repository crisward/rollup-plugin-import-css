/* imports */
import esbuild from "rollup-plugin-esbuild";
import { dependencies } from "./package.json";
import { builtinModules } from "module";

/* build config */
export default {
    input: "src/index.js",
    output: [
        { file: "dist/plugin.mjs", format: "esm" },
        { file: "dist/plugin.js", format: "cjs", exports: "default" },
    ],
    plugins: [
        esbuild({ target: "es2015", minify: true })
    ],
    external: builtinModules.concat(Object.keys(dependencies))
};