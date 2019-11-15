const PhonePlan = require('./phone-plan');

class BusinessPlan extends PhonePlan {
  cost() {
    if (this.phoneCount < 50) {
      return this.subtotal * 0.75;
    } else {
      return this.subtotal * 0.50;
    }
  }

  get subtotal() {
    return this.phoneCount * this.price;
  }
}

module.exports = BusinessPlan;
