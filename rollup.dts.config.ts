import dts from 'rollup-plugin-dts';
import fs from 'fs';

const pkg = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url)).toString(),
)

export default {
  input: './temp/types/index.d.ts',
  output: {
    file: './dist/index.d.ts',
    format: 'es',
  },
  external: [
    /^node:*/,
    ...Object.keys(pkg.devDependencies),
  ],
  plugins: [dts({ respectExternal: true })],
};
