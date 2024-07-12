export class Nodes<T> extends Array<T> {
  constructor(...items: T[]) {
    super(...items);
  }

  public add = (item: T) => {};

  public addMetadata = (item: T, metadata: any) => {};

  public update = (item: T, update: T) => {};
}
