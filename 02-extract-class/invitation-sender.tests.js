const assert = require('chai').assert;
const sinon = require('sinon');
const {InvitationSender, Mailer} = require('./invitation-sender');

describe('Invitation Sender', () => {
  it('Validates, and sends invitations to mailer', () => {

    let csv = `email,name
cool_email@email.com  ,Bob the Massive
spool_thre@email.com,Jane the even Bigger`;

    let invitationSender = new InvitationSender(csv, "You're invited!");
    assert(invitationSender.isValid());

    let mailer = sinon.mock(Mailer);
    mailer
      .expects("sendInvitation")
      .withArgs("Bob the Massive", "cool_email@email.com", "You're invited!");

    mailer
      .expects("sendInvitation")
      .withArgs("Jane the even Bigger", "spool_thre@email.com", "You're invited!");

    invitationSender.sendEmails();
  });

  it ('is invalid when recipient list is empty', () => {
    let csv = 'email,name';

    let invitationSender = new InvitationSender(csv, "holla");
    assert(!invitationSender.isValid());
  });

  it ('is invalid with an empty message', () => {
    let csv = `email,name
cool_email@email.com,Bob the Massive
spool@email.com     ,Jane the even Bigger`;

    let invitationSender = new InvitationSender(csv, "");
    assert(!invitationSender.isValid());
  });
});
