export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Overrides the default toString() method
  toString() {
    return `[object ${this.code}]`;
  }
}
