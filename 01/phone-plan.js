class PhonePlan {
  constructor(numberOfPhones, price, type) {
    this.numberOfPhones = numberOfPhones;
    this.price = price;
    this.type = type;
  }

  cost() {
    if (this.type === 'individual') {
      return this.numberOfPhones * this.price;
    } else if (this.type === 'family') {
      let numberOfExtraPhones = this.numberOfPhones - 1;
      let costPerExtraPhone = 10;

      return this.price + (numberOfExtraPhones * costPerExtraPhone);
    } else if (this.type === 'business') {
      let subtotal = this.numberOfPhones * this.price;

      if (this.numberOfPhones < 50) {
        return subtotal * 0.75;
      } else {
        return subtotal * 0.50;
      }
    }
  }
}

module.exports = PhonePlan;
