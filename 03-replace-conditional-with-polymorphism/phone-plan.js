class PhonePlan {
  constructor(phoneCount, price, type) {
    this.phoneCount = phoneCount;
    this.price = price;
    this.type = type;
  }

  cost() {
    if (this.type === 'individual') {
      return this.phoneCount * this.price;
    } else if (this.type === 'family') {
      let numberOfExtraPhones = this.phoneCount - 1;
      let costPerExtraPhone = 10;

      return this.price + (numberOfExtraPhones * costPerExtraPhone);
    } else if (this.type === 'business') {
      let subtotal = this.phoneCount * this.price;

      if (this.phoneCount < 50) {
        return subtotal * 0.75;
      } else {
        return subtotal * 0.50;
      }
    }
  }
}

module.exports = PhonePlan;
