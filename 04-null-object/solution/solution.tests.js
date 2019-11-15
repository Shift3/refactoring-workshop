const sinon = require('sinon');
const assert = require('chai').assert

const FieldSite = require('./field-site');
const Contact = require('./contact');

describe('Field Site', () => {
  describe('#fullLocationName', () => {
    it('construct a full location name for a site with no contact', () => {
      let fieldSite = new FieldSite('New York', null);

      assert.equal(fieldSite.fullLocationName, 'New York (No Contact)')
    });

    it('construct a full location name for a site with a contact', () => {
      let bobby = new Contact('Bobby', '555-555-5555');
      let fieldSite = new FieldSite('New York', bobby);

      assert.equal(fieldSite.fullLocationName, 'New York (Bobby [555-555-5555])')
    });
  });

  describe('#contactPhoneString', () => {
    it('with a contact', () => {
      let bobby = new Contact('Bobby', '555-555-5555');
      let fieldSite = new FieldSite('New York', bobby);

      assert.equal(fieldSite.contactPhoneString, '555-555-5555');
    });

    it('without a contact', () => {
      let fieldSite = new FieldSite('New York', null);

      assert.equal(fieldSite.contactPhoneString, 'No Phone');
    });
  });

  describe('#emailContact', () => {
    it('will send an email if contact was passed in', () => {
      let bobby = new Contact('Bobby', '555-555-5555');
      let fieldSite = new FieldSite('New York', bobby);

      let contact = sinon.mock(bobby);
      contact
        .expects("sendEmail")
        .withArgs("Here is a message from me!");

      fieldSite.emailContact('Here is a message from me!');
    })

    it('will not fail when called without a contact', () => {
      let fieldSite = new FieldSite('New York', null);
      fieldSite.emailContact('Here is a message from me!');

    })
  });

});
