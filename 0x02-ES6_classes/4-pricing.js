import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of  Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for length
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  // Getter for amount
  get currency() {
    return this._currency;
  }

  // Setter for length
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a number');
    }
    this._currency = currency;
  }

  // Methods
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
