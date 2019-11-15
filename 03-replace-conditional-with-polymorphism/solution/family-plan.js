const PhonePlan = require('./phone-plan');

class FamilyPlan extends PhonePlan {
  get COST_PER_EXTRA_PHONE() { return 10.00; }

  cost() {
    return this.price + this.numberOfExtraPhones * this.COST_PER_EXTRA_PHONE;
  }

  get numberOfExtraPhones() {
    return this.phoneCount - 1;
  }
}

module.exports = FamilyPlan;
