import { type UUID, Utilities } from "./Utilities/Utilities.js";

export type Offset = {
  x: number;
  y: number;
};

export const NodeType = {
  START: "start",
  WORKFLOW: "workflow",
  DELAY: "delay",
  END: "end",
  DECISION: "decision",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

export type Coordinates = {
  x: number;
  y: number;
};

export type Icon = string;

export type Arrival = {
  distribution: string;
  parameters: { rate: number }[];
};

export type DurationParameters = { meanlog: number } | { sdlog: number };
export type Duration = {
  distribution: string;
  parameters: [DurationParameters, DurationParameters?];
};
export type Prevalence = { target: string; probability: number }[];

export type NodeMetadata = {
  arrival?: Arrival;
  duration?: Duration;
  prevalence?: Prevalence;
};

export type Node = {
  id: UUID;
  name: string;
  type: NodeType;
  coordinates: Coordinates;
  icon?: Icon;
  metadata?: NodeMetadata[];
};

export const NodeMetadataType = {
  ARRIVAL: "arrival",
  DURATION: "duration",
  PREVALENCE: "prevalence",
} as const;
export type NodeMetadataType =
  (typeof NodeMetadataType)[keyof typeof NodeMetadataType];

export class Nodes extends EventTarget {
  public static init = (nodes: Node[] = []): Node[] => new Nodes(nodes)._proxy;

  public static create = (details: Omit<Node, "id">): Node => ({
    id: Utilities.uuid,
    name: details.name,
    type: details.type,
    coordinates: details.coordinates,
    icon: details.icon,
  });

  public static getMetadataType = (metadata: NodeMetadata): NodeMetadataType =>
    Object.keys(metadata)[0] as NodeMetadataType;

  public static getMetadataTypes = (node: Node) =>
    node.metadata
      ? node.metadata.map((metadata) => Nodes.getMetadataType(metadata))
      : [];

  public static hasMetadataType = (node: Node, type: NodeMetadataType) => {};

  public static addMetadata = (node: Node, metadata: NodeMetadata): Node => ({
    ...node,
    metadata: node.metadata ? [...node.metadata, metadata] : [metadata],
  });

  public static update = (node: Node, update: Node): Node => ({
    ...update,
    id: node.id,
  });

  public static updateMetadata = (node: Node, metadata: NodeMetadata): Node => {
    let key = Nodes.getMetadataType(metadata);
    node.metadata = node.metadata.map((node) => (node[key] ? metadata : node));
    return node;
  };

  public static updateIcon = (node: Node, icon: Icon): Node => ({
    ...node,
    icon,
  });

  public static updateCoordinates = (
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

  public static removeMetadata = (node: Node, type: NodeMetadataType): Node => {
    node.metadata = node.metadata.filter(
      (metadata) => metadata[type] === undefined
    );
    return node;
  };

  private _proxy: Node[] = [];
  private _result: boolean = false;

  /**
   * The private constructor is used by the static init method: no direct instantiation is allowed.
   * This is done so that a different return value, other than an instance of the class can be returned.
   */
  constructor(private nodes: Node[] = []) {
    super();
    this._proxy = this._createProxy(nodes);
  }

  private get symbol() {
    return (target, property, receiver) =>
      Reflect.get(target, property, receiver);
  }
  private set symbol({ target, property, value, receiver }: any) {
    this._result = Reflect.set(target, property, value, receiver);
  }

  private get index() {
    return (target, property, receiver) =>
      Reflect.get(target, property, receiver);
  }
  private set index({ target, property, value, receiver }: any) {
    this._result = Reflect.set(target, property, value, receiver);
  }

  private get length() {
    return (target, property, receiver) =>
      Reflect.get(target, property, receiver);
  }
  private set length({ target, property, value, receiver }: any) {
    this._result = Reflect.set(target, property, value, receiver);
  }

  private get property() {
    return (target, property, receiver) =>
      property === "add"
        ? this.add
        : property === "addMetadata"
        ? this.addMetadata
        : property === "update"
        ? this.update
        : property === "updateMetadata"
        ? this.updateMetadata
        : property === "updateIcon"
        ? this.updateIcon
        : property === "updateCoordinates"
        ? this.updateCoordinates
        : property === "findById"
        ? this.findById
        : property === "findByType"
        ? this.findByType
        : property === "findByCoordinates"
        ? this.findByCoordinates
        : property === "translate"
        ? this.translate
        : property === "removeMetadata"
        ? this.removeMetadata
        : property === "remove"
        ? this.remove
        : Reflect.get(target, property, receiver);
  }
  private set property({ target, property, value, receiver }: any) {
    this._result = Reflect.set(target, property, value, receiver);
  }

  private get method() {
    return (target, property, receiver) =>
      Reflect.get(target, property, receiver);
  }
  private set method({ target, property, value, receiver }: any) {
    this._result = Reflect.set(target, property, value, receiver);
  }

  private get default() {
    return (target, property, receiver) =>
      Reflect.get(target, property, receiver);
  }
  private set default({ target, property, value, receiver }: any) {
    this._result = Reflect.set(target, property, value, receiver);
  }

  private _get = (target, property, receiver) =>
    this[this._getPropertyType(property, target)](target, property, receiver);

  private _set = (target, property, value, receiver) =>
    (this[this._getPropertyType(property, target)] = {
      target,
      property,
      value,
      receiver,
    }) && this._result;

  private _createProxy = (target: Node[]): Node[] =>
    new Proxy(target, { get: this._get, set: this._set });

  private _getPropertyType = (property, target) =>
    typeof property === "symbol"
      ? "symbol"
      : Number.isInteger(Number(property))
      ? "index"
      : property === "length"
      ? "length"
      : typeof target[property] === "function"
      ? "method"
      : typeof property === "string" &&
        !(typeof target[property] === "function")
      ? "property"
      : "default";

  private add = (details: Omit<Node, "id">) =>
    this.nodes.push(Nodes.create(details)) && this._proxy;

  private addMetadata = (id: UUID, metadata: NodeMetadata) => {};

  private update = (id, update) => {};

  private updateMetadata = (id, metadata) => {};

  private updateIcon = (id, icon) => {};

  private updateCoordinates = (id, coordinates) => {};

  private findById = (id) => {};

  private findByType = (type) => {};

  private findByCoordinates = (coordinates) => {};

  private translate = (id, offset) => {};

  private removeMetadata = (id, type) => {};

  private remove = (id) => {};
}
