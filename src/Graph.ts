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

export type Offset = {
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

export type Connection = {
  id?: UUID;
  name: string;
  source: UUID;
  target: UUID;
  coordinates: {
    start: Coordinates;
    end: Coordinates;
  };
};

export type Connections = Connection[];

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

export class Graph {
  public static createNode = (details: Omit<Node, "id">): Node => ({
    id: Utilities.uuid,
    name: details.name,
    type: details.type,
    coordinates: details.coordinates,
    icon: details.icon,
  });

  public static createConnection = (
    details: Omit<Connection, "id">
  ): Connection => ({
    id: Utilities.uuid,
    name: details.name,
    source: details.source,
    target: details.target,
    coordinates: details.coordinates,
  });

  public static addNodeMetadata = (
    node: Node,
    metadata: NodeMetadata
  ): Node => ({
    ...node,
    metadata: node.metadata ? [...node.metadata, metadata] : [metadata],
  });

  public static updateNode = (node: Node, update: Node): Node => ({
    ...update,
    id: node.id,
  });

  public static updateConnection = (
    connection: Connection,
    update: Connection
  ): Connection => ({
    ...update,
    id: connection.id,
  });

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

  public static translateConnection = (
    connection: Connection,
    offset: Offset
  ) => {
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

  public createNodes = (qty: number, details: Omit<Node, "id">): Nodes =>
    Array.from({ length: qty }, () => Graph.createNode(details));

  public createConnections = (
    qty: number,
    details: Omit<Connection, "id">
  ): Connections =>
    Array.from({ length: qty }, () => Graph.createConnection(details));

  public addNode = (details: Omit<Node, "id">): Nodes =>
    (this.nodes = [...this.nodes, Graph.createNode(details)]);

  public addConnection = (details: Omit<Connection, "id">): Connections =>
    (this.connections = [...this.connections, Graph.createConnection(details)]);

  public addNodes = (nodes: Nodes): Nodes =>
    (this.nodes = [...this.nodes, ...nodes]);

  public addConnections = (connections: Connections): Connections =>
    (this.connections = [...this.connections, ...connections]);

  public addNodeMetadata = (id: UUID, metadata: NodeMetadata): Nodes =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.addNodeMetadata(node, metadata) : node
    ));

  public updateNodeMetadata = (id: UUID, metadata: NodeMetadata): Nodes =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNodeMetadata(node, metadata) : node
    ));

  public updateNodeCoordinates = (id: UUID, coordinates: Coordinates) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNodeCoordinates(node, coordinates) : node
    ));

  public updateConnectionCoordinates = (
    id: UUID,
    coordinates: { start: Coordinates; end: Coordinates }
  ) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? Graph.updateConnectionCoordinates(connection, coordinates)
        : connection
    ));

  public updateNodeIcon = (id: UUID, icon: Icon) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNodeIcon(node, icon) : node
    ));

  public updateNode = (id: UUID, update: Node) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.updateNode(node, update) : node
    ));

  public updateConnection = (id: UUID, update: Connection) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? Graph.updateConnection(connection, update)
        : connection
    ));

  public findNodeById = (id: UUID): Node =>
    this.nodes.find((node: Node) => node.id === id);

  public findConnectionById = (id: UUID): Connection =>
    this.connections.find((connection: Connection) => connection.id === id);

  public findNodesByType = (type: NodeType): Nodes =>
    this.nodes.filter((node: Node) => node.type === type);

  public findNodeByCoordinates = (coordinates: Coordinates): Node =>
    this.nodes.find(
      (node: Node) =>
        node.coordinates.x === coordinates.x &&
        node.coordinates.y === coordinates.y
    );

  public translateNode = (id: UUID, offset: Offset) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.translateNode(node, offset) : node
    ));

  public translateConnection = (id: UUID, offset: Offset) =>
    (this.connections = this.connections.map((connection: Connection) =>
      connection.id === id
        ? Graph.translateConnection(connection, offset)
        : connection
    ));

  public removeNodeMetadata = (id: UUID, type: NodeMetadataType) =>
    (this.nodes = this.nodes.map((node: Node) =>
      node.id === id ? Graph.removeNodeMetadata(node, type) : node
    ));

  public removeNodeById = (id: UUID): Nodes =>
    (this.nodes = this.nodes.filter((node: Node) => node.id !== id));

  public removeConnectionById = (id: UUID): Connections =>
    (this.connections = this.connections.filter(
      (connection: Connection) => connection.id !== id
    ));
}
