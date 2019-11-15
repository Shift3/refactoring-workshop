var assert = require('assert');
var PhonePlan = require('./phone-plan');

describe('Phone Plan', () => {
  it('should calculate individual plan cost correctly.', () => {
    let individual_plan = new PhonePlan(4, 3.50, 'individual');
    assert.equal(individual_plan.cost(), 14.00);
  });

  it('should calculate family plan cost with extra phones correctly.', () => {
    let family_plan = new PhonePlan(2, 1.50, 'family');
    assert.equal(family_plan.cost(), 11.50);
  });

  it('should calculate business plan with less than 50 phones at 75% discount', () => {
    let business_plan = new PhonePlan(5, 2.00, 'business');
    assert.equal(business_plan.cost(), 7.50);
  });

  it('should calculate business plan with more than 50 phones at 50% discount', () => {
    let business_plan = new PhonePlan(100, 1.00, 'business');
    assert.equal(business_plan.cost(), 50.00);
  });
});

