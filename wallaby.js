module.exports = function (wallaby) {
  return {
    files: [
      "importmap/inject.js",
      "importmap/importmap.test.js",
      "src/**/*.ts",
    ],
    tests: ["test/unit/**/*.ts"],
    trace: true,
    compilers: {
      "**/*.ts": wallaby.compilers.typeScript({
        module: "es2022",
        target: "es2022",
        sourceMap: true,
        inlineSources: true,
        baseUrl: "./",
        paths: {
          "@scalable-software/graph.structure": ["./src/Index.js"],
          "@scalable-software/graph.structure/Nodes": ["./src/Nodes.js"],
        },
      }),
    },
  };
};
