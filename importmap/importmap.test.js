/**
 * Browser do not support external import maps yet.
 * The inject function is a synchronous function that will be used to inject the import map into the html file used for testing.
 * The references used in the importmap maybe a local file, a NPM package path or a CDN path.
 */
inject(
  {
    imports: {
      "@scalable-software/graph.structure": "./src/Index.js",
      "@scalable-software/graph.structure/Nodes": "./src/Nodes.js",
      "@scalable-software/graph.structure/Connections": "./src/Connections.js",
    },
  },
  "importmap"
);
