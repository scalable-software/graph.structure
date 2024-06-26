import { Utilities, UUID } from "./Utilities/Utilities.js";

export const NodeType = {
  START: "start",
  WORKFLOW: "workflow",
  DELAY: "delay",
  END: "end",
  DECISION: "decision",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

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

export const NodeMetadataType = {
  ARRIVAL: "arrival",
  DURATION: "duration",
  PREVALENCE: "prevalence",
} as const;
export type NodeMetadataType =
  (typeof NodeMetadataType)[keyof typeof NodeMetadataType];

export type NodeMetadata = {
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
  metadata?: NodeMetadata[];
};
export type Nodes = Node[];

export type NodeDetails = {
  name: string;
  type: NodeType;
  coordinates: Coordinates;
  icon?: Icon;
};

export type Connection = {
  id: UUID;
  name: string;
  source: UUID;
  target: UUID;
  coordinates: {
    start: Coordinates;
    end: Coordinates;
  };
};

export type Connections = Connection[];

export type ConnectionDetails = {
  name: string;
  source: UUID;
  target: UUID;
  coordinates: {
    start: Coordinates;
    end: Coordinates;
  };
};

export const GraphType = {
  PIPELINE: "pipeline",
  PATHWAY: "pathway",
  WORKFLOW: "workflow",
} as const;
export type GraphType = (typeof GraphType)[keyof typeof GraphType];

export type GraphMetadata = {
  id: UUID;
  name: string;
  type: GraphType;
};

export type GraphDetails = {
  name: string;
  type: GraphType;
};

// Operations on Graph takes nodes as first argument to enable performance testing
// Once performance testing is done, we can refactor to use a class instance
// Also operations can return this to enable fluent interface
export class Graph {
  public static createNode = ({
    name,
    type,
    coordinates,
    icon,
  }: NodeDetails): Node => ({
    id: Utilities.uuid,
    name,
    type,
    coordinates,
    icon,
  });

  public static createConnection = ({
    name,
    source,
    target,
    coordinates,
  }: ConnectionDetails): Connection => ({
    id: Utilities.uuid,
    name,
    source,
    target,
    coordinates,
  });

  public static addNodeMetadata = (
    node: Node,
    metadata: NodeMetadata
  ): Node => ({
    ...node,
    metadata: node.metadata ? [...node.metadata, metadata] : [metadata],
  });

  // Potential refactor to retain the same Id
  public static updateNode = (node: Node, update: Node): Node => update;

  // Potential refactor to retain the same Id
  public static updateConnection = (
    connection: Connection,
    update: Connection
  ): Connection => update;

  public static updateNodeMetadata = (
    node: Node,
    metadata: NodeMetadata
  ): Node => {
    let key = Object.keys(metadata)[0];
    node.metadata = node.metadata.map((node) => (node[key] ? metadata : node));
    return node;
  };

  public static updateNodeIcon = (node: Node, icon: Icon): Node => ({
    ...node,
    icon,
  });

  public static updateNodeCoordinates = (
    node: Node,
    coordinates: Coordinates
  ): Node => ({
    ...node,
    coordinates,
  });

  public static updateConnectionCoordinates = (
    connection: Connection,
    coordinates: {
      start: Coordinates;
      end: Coordinates;
    }
  ): Connection => ({
    ...connection,
    coordinates,
  });

  public static translateNode = (node: Node, offset: any) => {
    node.coordinates = {
      x: node.coordinates.x + offset.x,
      y: node.coordinates.y + offset.y,
    };
    return node;
  };

  public static translateConnection = (connection: Connection, offset: any) => {
    connection.coordinates = {
      start: {
        x: connection.coordinates.start.x + offset.x,
        y: connection.coordinates.start.y + offset.y,
      },
      end: {
        x: connection.coordinates.end.x + offset.x,
        y: connection.coordinates.end.y + offset.y,
      },
    };
    return connection;
  };

  public static removeNodeMetadata = (
    node: Node,
    type: NodeMetadataType
  ): Node => {
    node.metadata = node.metadata.filter(
      (metadata) => metadata[type] === undefined
    );
    return node;
  };

  public metadata: GraphMetadata;
  public nodes: Nodes = [];
  public connections: Connections = [];
  constructor(metadata: GraphDetails) {
    this.metadata = {
      id: Utilities.uuid,
      name: metadata.name,
      type: metadata.type,
    };
  }

  public createNodes = (qty: number, details): Nodes =>
    Array.from({ length: qty }, () => Graph.createNode(details));

  public createConnections = (qty: number, details): Connections =>
    Array.from({ length: qty }, () => Graph.createConnection(details));

  public addNode = (details): Nodes =>
    (this.nodes = [...this.nodes, Graph.createNode(details)]);

  public addConnection = (details): Connections =>
    (this.connections = [...this.connections, Graph.createConnection(details)]);

  public addNodes = (newNodes: Nodes): Nodes =>
    (this.nodes = [...this.nodes, ...newNodes]);

  public addConnections = (newConnections: Connections): Connections =>
    (this.connections = [...this.connections, ...newConnections]);

  public addNodeMetadata = (id: string, metadata: NodeMetadata): Nodes =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.addNodeMetadata(node, metadata) : node
    ));

  public updateNodeMetadata = (id: string, metadata: NodeMetadata): Nodes =>
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
        ? Graph.updateConnectionCoordinates(connection, coordinates)
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
        ? Graph.updateConnection(connection, update)
        : connection
    ));

  public findNodeById = (id: string): Node =>
    this.nodes.find((node: Node) => node.id === id);

  public findConnectionById = (id: string): Connection =>
    this.connections.find((connection: Connection) => connection.id === id);

  public findNodesByType = (type: NodeType): Nodes =>
    this.nodes.filter((node: Node) => node.type === type);

  public findNodeByCoordinates = ({ x, y }): Node =>
    this.nodes.find(
      ({ coordinates }: Node) => coordinates.x === x && coordinates.y === y
    );

  public translateNode = (id: string, offset) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.translateNode(node, offset) : node
    ));

  public translateConnection = (id: string, offset) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? Graph.translateConnection(connection, offset)
        : connection
    ));

  public removeNodeMetadata = (id: string, type: NodeMetadataType) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.removeNodeMetadata(node, type) : node
    ));

  public removeNodeById = (id: string): Nodes =>
    (this.nodes = this.nodes.filter((node: Node) => node.id !== id));

  public removeConnectionById = (id: string): Connections =>
    (this.connections = this.connections.filter(
      (connection: Connection) => connection.id !== id
    ));
}
