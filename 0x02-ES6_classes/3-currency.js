export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // Method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
