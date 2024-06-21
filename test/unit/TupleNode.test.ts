import { Utilities } from "../../src/Utilities/Utilities.js";
import { NodeTypes, NodeType, Metadata } from "../../src/Node.js";
import { TupleNodeType, TupleCoordinates } from "../../src/TupleNode.meta.js";
import { TupleNode } from "../../src/TupleNode.js";

describe("Given TupleType imported", () => {
  it("then TupleType is defined", () => {
    expect(TupleNode).toBeDefined();
  });
  it("then TupleType.structure static property is defined", () => {
    expect(TupleNode.structure).toBeDefined();
  });
  it("then TupleType.create static method is defined", () => {
    expect(TupleNode.create).toBeDefined();
  });
  it("then TupleType.getStartNode static method is defined", () => {
    expect(TupleNode.getStartNode).toBeDefined();
  });
  it("then TupleType.addMetadata static method is defined", () => {
    expect(TupleNode.addMetadata).toBeDefined();
  });
  it("then TupleType.updateMetadata static method is defined", () => {
    expect(TupleNode.addMetadata).toBeDefined();
  });
  it("then TupleType.updateIcon static method is defined", () => {
    expect(TupleNode.updateIcon).toBeDefined();
  });
  it("then TupleType.update static method is defined", () => {
    expect(TupleNode.update).toBeDefined();
  });
  it("then TupleType.updateCoordinates static method is defined", () => {
    expect(TupleNode.updateCoordinates).toBeDefined();
  });
  it("then TupleType.removeMetadata static method is defined", () => {
    expect(TupleNode.removeMetadata).toBeDefined();
  });
  it("then TupleType.translate static method is defined", () => {
    expect(TupleNode.translate).toBeDefined();
  });
});

describe("Given TupleType.structure static property exist", () => {
  it("then TupleType.structure equals tuple", () => {
    expect(TupleNode.structure).toEqual("tuple");
  });
});

describe("Given TupleType.create static method exist", () => {
  describe("when node = TupleType.create(details)", () => {
    let details;
    let node: TupleNodeType;
    beforeEach(() => {
      details = {
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      };
      node = TupleNode.create(details);
    });
    it("then node is exist", () => {
      expect(node).toBeDefined();
    });
    it("then node[0] exist", () => {
      expect(node[0]).toBeDefined();
    });
    it("then node[1] exist", () => {
      expect(node[1]).toBeDefined();
    });
    it("then node[2] exist", () => {
      expect(node[2]).toBeDefined();
    });
    it("then node[3] exist", () => {
      expect(node[3]).toBeDefined();
    });
    it("then node[4] exist", () => {
      expect(node[4]).toBeDefined();
    });
    it("then node[1] equals details.name", () => {
      expect(node[1]).toBe(details.name);
    });
    it("then node[2] equals details.type", () => {
      expect(node[2]).toEqual(details.type);
    });
    it("then node[3] equals details.coordinates", () => {
      let coordinates: TupleCoordinates = [
        details.coordinates.x,
        details.coordinates.y,
      ];
      expect(node[3]).toEqual(coordinates);
    });
    it("then node[4] equals details.icon", () => {
      expect(node[4]).toEqual(details.icon);
    });
  });
});

describe("Given TupleType.addMetadata static method exist", () => {
  describe("when extendedNode = TupleType.addMetadata(node, metadata)", () => {
    let node: TupleNodeType;
    let metadata: Metadata;
    let extendedNode: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      metadata = {
        arrival: {
          distribution: "exponential",
          parameters: [{ rate: 1 }],
        },
      };
      extendedNode = TupleNode.addMetadata(node, metadata);
    });
    it("then extendedNode exist", () => {
      expect(extendedNode).toBeDefined();
    });
    it("then extendedNode[0] exist", () => {
      expect(extendedNode[0]).toBeDefined();
    });
    it("then extendedNode[1] exist", () => {
      expect(extendedNode[1]).toBeDefined();
    });
    it("then extendedNode[2] exist", () => {
      expect(extendedNode[2]).toBeDefined();
    });
    it("then extendedNode[3] exist", () => {
      expect(extendedNode[3]).toBeDefined();
    });
    it("then extendedNode[4] exist", () => {
      expect(extendedNode[4]).toBeDefined();
    });
    it("then extendedNode[5] exist", () => {
      expect(extendedNode[5]).toBeDefined();
    });
    it("then extendedNode[0] equals node.id", () => {
      expect(extendedNode[0]).toEqual(node[0]);
    });
    it("then extendedNode[1] equals node[1]", () => {
      expect(extendedNode[1]).toEqual(node[1]);
    });
    it("then extendedNode[2] equals node[2]", () => {
      expect(extendedNode[2]).toEqual(node[2]);
    });
    it("then extendedNode[3] equals node[3]", () => {
      expect(extendedNode[3]).toEqual(node[3]);
    });
    it("then extendedNode[4] equals node[4]", () => {
      expect(extendedNode[4]).toEqual(node[4]);
    });
    it("then result[5][0] equals metadata", () => {
      expect(extendedNode[5][0]).toEqual(metadata);
    });
  });
});

describe("Given TupleType.updateMetadata static method exist", () => {
  describe("and node with metadata exist", () => {
    let node: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      let metadata = {
        arrival: {
          distribution: "exponential",
          parameters: [{ rate: 1 }],
        },
      };
      node = TupleNode.addMetadata(node, metadata);
    });
    describe("when updatedNode = TupleType.updateMetadata(node, metadata)", () => {
      let metadata: Metadata;
      let updatedNode: TupleNodeType;
      beforeEach(() => {
        metadata = {
          arrival: {
            distribution: "exponential",
            parameters: [{ rate: 10 }],
          },
        };
        updatedNode = TupleNode.updateMetadata(node, metadata);
      });
      it("then updatedNode exist", () => {
        expect(updatedNode).toBeDefined();
      });
      it("then updatedNode[0] exist", () => {
        expect(updatedNode[0]).toBeDefined();
      });
      it("then updatedNode[1] exist", () => {
        expect(updatedNode[1]).toBeDefined();
      });
      it("then updatedNode[2] exist", () => {
        expect(updatedNode[2]).toBeDefined();
      });
      it("then updatedNode[3] exist", () => {
        expect(updatedNode[3]).toBeDefined();
      });
      it("then updatedNode[4] exist", () => {
        expect(updatedNode[4]).toBeDefined();
      });
      it("then updatedNode[5] exist", () => {
        expect(updatedNode[5]).toBeDefined();
      });
      it("then updatedNode[0] equals node.id", () => {
        expect(updatedNode[0]).toEqual(node[0]);
      });
      it("then updatedNode[1] equals node[1]", () => {
        expect(updatedNode[1]).toEqual(node[1]);
      });
      it("then updatedNode[2] equals node[2]", () => {
        expect(updatedNode[2]).toEqual(node[2]);
      });
      it("then updatedNode[3] equals node[3]", () => {
        expect(updatedNode[3]).toEqual(node[3]);
      });
      it("then updatedNode[4] equals node[4]", () => {
        expect(updatedNode[4]).toEqual(node[4]);
      });
      it("then result[5][0] equals metadata", () => {
        expect(updatedNode[5][0]).toEqual(metadata);
      });
    });
  });
});

describe("Given TupleType.updateCoordinates static method exist", () => {
  describe("when updateNode = TupleType.updateCoordinates(node, coordinates)", () => {
    let node: TupleNodeType;
    let coordinates;
    let updatedNode: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      coordinates = { x: 1, y: 1 };
      let input = structuredClone(node);
      updatedNode = TupleNode.updateCoordinates(input, coordinates);
    });
    it("then updatedNode exist", () => {
      expect(updatedNode).toBeDefined();
    });
    it("then updatedNode[0] exist", () => {
      expect(updatedNode[0]).toBeDefined();
    });
    it("then updatedNode[1] exist", () => {
      expect(updatedNode[1]).toBeDefined();
    });
    it("then updatedNode[2] exist", () => {
      expect(updatedNode[2]).toBeDefined();
    });
    it("then updatedNode[3] exist", () => {
      expect(updatedNode[3]).toBeDefined();
    });
    it("then updatedNode[4] exist", () => {
      expect(updatedNode[4]).toBeDefined();
    });
    it("then updatedNode[0] equals node[0]", () => {
      expect(updatedNode[0]).toEqual(node[0]);
    });
    it("then updatedNode[1] equals node[1]", () => {
      expect(updatedNode[1]).toEqual(node[1]);
    });
    it("then updatedNode[2] equals node[2]", () => {
      expect(updatedNode[2]).toEqual(node[2]);
    });
    it("then updatedNode[3] equals coordinates", () => {
      let updatedCoordinates: TupleCoordinates = [coordinates.x, coordinates.y];
      expect(updatedNode[3]).toEqual(updatedCoordinates);
    });
    it("then updatedNode[3] is not equal to node[3]", () => {
      expect(updatedNode[3]).not.toEqual(node[3]);
    });
    it("then updatedNode[4] equals node[4]", () => {
      expect(updatedNode[4]).toEqual(node[4]);
    });
  });
});

describe("Given TupleType.updateIcon static method exist", () => {
  describe("Given node exist", () => {
    let node: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
    });
    describe("When TupleType.updateIcon(node, icon)", () => {
      let icon;
      beforeEach(() => {
        icon = "./newIcon.svg";
        node = TupleNode.updateIcon(node, icon);
      });
      it("then node[4] equals icon", () => {
        expect(node[4]).toEqual(icon);
      });
    });
  });
});

describe("Given TupleType.update static method exist", () => {
  describe("Given node exist", () => {
    let node: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
    });
    describe("When TupleType.updateIcon(node, update)", () => {
      let details;
      beforeEach(() => {
        details = {
          id: "15b6679a-fd9d-4036-b1ab-af0b932fc903",
          name: "Triage",
          type: "workflow",
          coordinates: { x: 100, y: 400 },
          icon: "icon.svg",
          metadata: [
            {
              duration: {
                distribution: "log normal",
                parameters: [{ meanlog: 0.1640238 }, { sdlog: 0.4169375 }],
              },
            },
          ],
        };
        node = TupleNode.update(node, details);
      });
      it("then node[4] equals icon", () => {
        expect(node).toEqual(details);
      });
    });
  });
});

describe("Given TupleType.removeMetadata exist", () => {
  describe("Given node with metadata exist", () => {
    let node: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
      node = TupleNode.addMetadata(node, {
        arrival: {
          distribution: "exponential",
          parameters: [{ rate: 1 }],
        },
      });
    });
    describe("When ObjectType.removeMetadata(node, type)", () => {
      let type: string;
      beforeEach(() => {
        type = "arrival";
        node = TupleNode.removeMetadata(node, type);
      });
      it("then node does not contain metadata of type", () => {
        expect(node[5]).toEqual([]);
      });
    });
  });
});

describe("Given TupleType.translate static method exit", () => {
  describe("Given node exist", () => {
    let node: TupleNodeType;
    beforeEach(() => {
      node = TupleNode.create({
        name: "Node",
        type: Utilities.getRandomElement<NodeType>(NodeTypes),
        coordinates: { x: 0, y: 0 },
        icon: "./icon.svg",
      });
    });
    describe("When TupleType.translate(node, offset)", () => {
      let coordinates;
      let offset;
      beforeEach(() => {
        coordinates = node[3];
        offset = {
          x: 10,
          y: 10,
        };
        node = TupleNode.translate(node, offset);
      });
      it("then node[3] is original coordinates plus offset", () => {
        let newCoordinates = [
          coordinates[0] + offset.x,
          coordinates[1] + offset.y,
        ];
        expect(node[3]).toEqual(newCoordinates);
      });
    });
  });
});