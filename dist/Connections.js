import { Utilities } from "./Utilities/Utilities.js";
export class Connections extends Array {
    static create = (details) => ({
        ...details,
        id: Utilities.uuid,
    });
    static update = (connection, update) => ({
        ...update,
        id: connection.id,
    });
    static updateCoordinates = (connection, coordinates) => ({
        ...connection,
        coordinates,
    });
    static translate = (connection, offset) => {
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
    _getIndex = (id) => this.findIndex((connection) => connection.id === id);
    create = (details) => this.push(Connections.create(details)) && this;
    add = (connection) => Array.isArray(connection)
        ? this.push(...connection) && this
        : this.push(connection) && this;
    update = (id, update) => (this[this._getIndex(id)] = Connections.update(this[this._getIndex(id)], update)) && this;
    findById = (id) => this[this._getIndex(id)];
    translate = (id, offset) => (this[this._getIndex(id)] = Connections.translate(this[this._getIndex(id)], offset)) && this;
    remove = (id) => this.splice(this._getIndex(id), 1) && this;
}
