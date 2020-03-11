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
    this.output_header();
    this.output_separator();
    this.output_items();
    this.output_separator();
    this.output_subtotals();
    this.output_separator();
    this.output_total();
  }

  output_header() {
    this.output.log('ORDER SUMMARY');
  }

  output_items() {
    this.items.forEach(item => {
      this.output_with_label(item, this.ITEM_COST[item]);
    });
  }

  output_separator() {
    this.output.log('-'.repeat(14));
  }

  output_subtotals() {
    this.output_with_label('Subtotal', this.subtotal);
    this.output_with_label('Tax', this.subtotal * this.TAX);
  }

  output_total() {
    this.output_with_label('Total', this.subtotal + (this.subtotal * this.TAX));
  }

  output_with_label(label, cost) {
    this.output.log(`${label}: ${cost.toFixed(2)}`);
  }

  get subtotal() {
    delete this.subtotal;
    return this.items.reduce((sum, item) => {
      return sum + this.ITEM_COST[item];
    }, 0);
  }
}

module.exports = OrderPrinter;
