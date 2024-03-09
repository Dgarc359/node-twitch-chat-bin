const { build } = require("esbuild");
const { dependencies } = require("./package.json");

const sharedConfig = {
  entryPoints: ["index.ts"],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies),
};

build({
  ...sharedConfig,
  platform: "node", // for CJS
  outfile: "out/index.js",
  bundle: true,
});

build({
  ...sharedConfig,
  outfile: "out/index.esm.js",
  platform: "neutral", // for ESM
  format: "esm",
});
