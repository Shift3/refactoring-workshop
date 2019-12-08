const assert = require('chai').assert;
const sinon = require('sinon');
const OrderPrinter = require('./order-printer');

describe('Order Printer', () => {
  it('calculates and prints the expected order', () => {
    let fake_output = sinon.spy({log(message) {}});
    let order_printer = new OrderPrinter(['ThinkPad', 'Macbook Pro'], fake_output);

    order_printer.print();

    let output = fake_output.log.getCalls().map(call => call.args[0]).join("\n");
    let expected_output = `ORDER SUMMARY
--------------
ThinkPad: 150.00
Macbook Pro: 2000.00
--------------
Subtotal: 2150.00
Tax: 204.25
--------------
Total: 2354.25`;
    assert.equal(output, expected_output);
  });
});
