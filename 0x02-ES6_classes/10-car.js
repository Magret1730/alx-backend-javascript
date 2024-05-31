export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      return new TypeError('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      return new TypeError('Motor must be a string');
    }
    if (typeof color !== 'string') {
      return new TypeError('Color must be a string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    if (!(this instanceof Car)) {
      throw new TypeError('cloneCar can only be called on instances of Car');
    }
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
