import { Utilities, UUID } from "./Utilities/Utilities.js";
import {
  ConnectionFactory,
  Connection,
  Connections,
} from "./ConnectionFactory.js";

export const NodeTypes = [
  "start",
  "workflow",
  "delay",
  "end",
  "decision",
] as const;
export type NodeType = (typeof NodeTypes)[number];

export type Icon = string;

export type Arrival = {
  distribution: string;
  parameters: { rate: number }[];
};
export type Duration = {
  distribution: string;
  parameters: { meanlog: number; sdlog?: number }[];
};
export type Prevalence = { target: string; probability: number }[];

export type Metadata = {
  arrival?: Arrival;
  duration?: Duration;
  prevalence?: Prevalence;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type Node = {
  id: UUID;
  name: string;
  type: NodeType;
  coordinates: Coordinates;
  icon?: Icon;
  metadata?: Metadata[];
};
export type Nodes = Node[];

// Operations on Graph takes nodes as first argument to enable performance testing
// Once performance testing is done, we can refactor to use a class instance
// Also operations can return this to enable fluent interface
export class Graph {
  public static createNode = ({ name, type, coordinates, icon }): Node => ({
    id: Utilities.uuid,
    name,
    type,
    coordinates,
    icon,
  });

  public static addNodeMetadata = (node: Node, metadata: Metadata): Node => ({
    ...node,
    metadata: node.metadata ? [...node.metadata, metadata] : [metadata],
  });

  public static updateNode = (node: Node, update: Node): Node => update;

  public static updateNodeMetadata = (node: Node, metadata: Metadata): Node => {
    let key = Object.keys(metadata)[0];
    node.metadata = node.metadata.map((node) => (node[key] ? metadata : node));
    return node;
  };

  public static updateNodeIcon = (node: Node, icon: Icon): Node => ({
    ...node,
    icon,
  });

  public static removeNodeMetadata = (node: Node, type: string): Node => {
    node.metadata = node.metadata.filter(
      (metadata) => metadata[type] === undefined
    );
    return node;
  };

  public static updateNodeCoordinates = (
    node: Node,
    coordinates: Coordinates
  ): Node => ({
    ...node,
    coordinates,
  });

  public static translate = (node: Node, offset: any) => {
    node.coordinates = {
      x: node.coordinates.x + offset.x,
      y: node.coordinates.y + offset.y,
    };
    return node;
  };

  public nodes: Nodes = [];
  public connections: Connections = [];
  constructor() {}

  public createNodes = (qty: number, details): Nodes =>
    Array.from({ length: qty }, () => Graph.createNode(details));

  public createConnections = (qty: number, details): Connections =>
    Array.from({ length: qty }, () => ConnectionFactory.create(details));

  public addNode = (details): Nodes =>
    (this.nodes = [...this.nodes, Graph.createNode(details)]);

  public addConnection = (details): Connections =>
    (this.connections = [
      ...this.connections,
      ConnectionFactory.create(details),
    ]);

  public addNodes = (newNodes: Nodes): Nodes =>
    (this.nodes = [...this.nodes, ...newNodes]);

  public addConnections = (newConnections: Connections): Connections =>
    (this.connections = [...this.connections, ...newConnections]);

  public addNodeMetadata = (id: string, metadata: Metadata): Nodes =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.addNodeMetadata(node, metadata) : node
    ));

  public updateNodeMetadata = (id: string, metadata: Metadata): Nodes =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNodeMetadata(node, metadata) : node
    ));

  public updateNodeCoordinates = (id: string, coordinates) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNodeCoordinates(node, coordinates) : node
    ));

  public updateConnectionCoordinates = (id: string, coordinates) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? ConnectionFactory.updateCoordinates(connection, coordinates)
        : connection
    ));

  public updateNodeIcon = (id: string, icon) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNodeIcon(node, icon) : node
    ));

  public updateNode = (id: string, update) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNode(node, update) : node
    ));

  public updateConnection = (id: string, update) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? ConnectionFactory.update(connection, update)
        : connection
    ));

  public findNodeById = (id: string): Node =>
    this.nodes.find((node: Node) => node.id === id);

  public findConnectionById = (id: string): ConnectionFactory =>
    this.connections.find((connection: Connection) => connection.id === id);

  public findNodesByType = (type: string): Nodes =>
    this.nodes.filter((node: Node) => node.type === type);

  public findNodeByCoordinates = (coordinates): Node =>
    this.nodes.find(
      (node: Node) =>
        node.coordinates.x === coordinates.x &&
        node.coordinates.y === coordinates.y
    );

  public removeNodeMetadata = (id: string, type: string) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.removeNodeMetadata(node, type) : node
    ));

  public removeNodeById = (id: string): Nodes =>
    (this.nodes = this.nodes.filter((node: Node) => node.id !== id));

  public removeConnectionById = (id: string): Connections =>
    (this.connections = this.connections.filter(
      (connection: Connection) => connection.id !== id
    ));

  public translateNode = (id: string, offset) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.translate(node, offset) : node
    ));

  public translateConnection = (id: string, offset) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? ConnectionFactory.translate(connection, offset)
        : connection
    ));
}
