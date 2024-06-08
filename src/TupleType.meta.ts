import { UUID } from "./Utilities/Utilities.js";
import { NodeType, Icon, Metadata } from "./Node.js";

export type TupleCoordinates = [number, number];
export type TupleNode = [
  UUID,
  string,
  NodeType,
  TupleCoordinates,
  Icon?,
  Metadata[]?
];
