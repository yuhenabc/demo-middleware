const base = {
  mode: 'development',
  devtool: false,
  target: 'node',
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
};

export default {
  ...base,
  name: 'test',
  entry: './test.mjs',
  output: {
    filename: 'test.bundle.js',
  },
};
