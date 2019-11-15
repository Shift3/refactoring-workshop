const assert = require('assert');

const IndividualPlan = require('./individual-plan');
const FamilyPlan = require('./family-plan');
const BusinessPlan = require('./business-plan');

describe('Individual Plan', () => {
  it('should calculate individual plan cost correctly.', () => {
    let individual_plan = new IndividualPlan(4, 3.50,);
    assert.equal(individual_plan.cost(), 14.00);
  });
});

describe('Family Plan', () => {
  it('should calculate family plan cost with extra phones correctly.', () => {
    let family_plan = new FamilyPlan(2, 1.50);
    assert.equal(family_plan.cost(), 11.50);
  });
});

describe('Business Plan', () => {
  it('should calculate business plan with less than 50 phones at 75% discount', () => {
    let business_plan = new BusinessPlan(5, 2.00);
    assert.equal(business_plan.cost(), 7.50);
  });

  it('should calculate business plan with more than 50 phones at 50% discount', () => {
    let business_plan = new BusinessPlan(100, 1.00);
    assert.equal(business_plan.cost(), 50.00);
  });
});
