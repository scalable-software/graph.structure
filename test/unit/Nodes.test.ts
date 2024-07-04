import { Nodes } from "@scalable-software/graph.structure/Nodes";

// Static Members Availability
describe("Given Nodes imported", () => {
  it("then Nodes exist", () => {
    expect(Nodes).toBeDefined();
  });
  it("then Nodes.init exists", () => {
    expect(Nodes.init).toBeDefined();
  });
});

// Static Methods Behavior
describe("Given Nodes.init() static method exist", () => {
  describe("when nodes = Nodes.init()", () => {
    let nodes;
    beforeEach(() => {
      nodes = Nodes.init();
    });
    it("then nodes is an instance of Nodes", () => {
      expect(nodes instanceof Nodes).toBe(true);
    });
  });
});

// Instance Properties Availability
describe("Given nodes instance", () => {
  let nodes;
  beforeEach(() => {
    nodes = Nodes.init();
  });
  it("then nodes._proxy private property exists", () => {
    expect(nodes["_proxy"]).toBeDefined();
  });
});

// Instance Properties Value
describe("Given nodes instance", () => {
  let nodes;
  let array = [];
  beforeEach(() => {
    nodes = Nodes.init(array);
  });
  it("then nodes._proxy is an empty array", () => {
    expect(nodes["_proxy"]).toEqual(array);
  });
});

// Instance Methods Availability
describe("Given nodes instance", () => {
  let nodes;
  beforeEach(() => {
    nodes = Nodes.init();
  });
  it("then nodes._get exists", () => {
    expect(nodes["_get"]).toBeDefined();
  });
  it("then nodes._set exists", () => {
    expect(nodes["_set"]).toBeDefined();
  });
  it("then nodes._createProxy exists", () => {
    expect(nodes["_createProxy"]).toBeDefined();
  });
});

// Instance Methods Behavior
describe("Given nodes instance", () => {
  let nodes;
  beforeEach(() => {
    nodes = Nodes.init();
  });
  describe("when proxy = nodes._createProxy(array)", () => {
    let proxy;
    let array = [];
    beforeEach(() => {
      proxy = nodes["_createProxy"](array);
    });
    it("then proxy is equal to an empty array", () => {
      expect(proxy).toEqual(array);
    });
  });
});