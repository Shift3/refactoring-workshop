class PhonePlan {
  constructor(phoneCount, price) {
    this.phoneCount = phoneCount;
    this.price = price;
  }

  cost() {
    return this.phoneCount * this.price;
  }
}

module.exports = PhonePlan;
