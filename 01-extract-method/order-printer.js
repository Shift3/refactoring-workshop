class OrderPrinter {
  get ITEM_COST() {
    return {
      'Macbook Pro': 2000,
      'ThinkPad': 150,
      'Monitor Stand': 999
    };
  }

  get TAX() { return 0.095; }

  constructor(items, output = console) {
    this.items = items;
    this.output = output;
  }

  print() {
    this.output.log('ORDER SUMMARY');
    this.output.log('--------------');

    let subtotal = this.items.reduce((sum, item) => {
      let cost = this.ITEM_COST[item];
      this.output.log(`${item}: ${cost.toFixed(2)}`);

      return sum + cost;
    }, 0);

    this.output.log('--------------');
    this.output.log(`Subtotal: ${subtotal.toFixed(2)}`);
    this.output.log(`Tax: ${(subtotal * this.TAX).toFixed(2)}`);
    this.output.log('--------------');
    this.output.log(`Total: ${(subtotal + (subtotal * this.TAX)).toFixed(2)}`);
  }
}

module.exports = OrderPrinter;
