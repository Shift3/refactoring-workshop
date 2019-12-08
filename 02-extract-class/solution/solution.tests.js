const assert = require('chai').assert;
const sinon = require('sinon');

const Parser = require('./parser');
const Mailer = require('./mailer');
const InvitationSender = require('./invitation-sender');

describe('Invitation Sender', () => {
  it('validates correctly and sends invitations to Mailer', () => {

    let csv = `email,name
cool_email@email.com,Bob the Massive
spool@email.com,Jane the even Bigger`;

    let parser = new Parser(csv);
    let invitationSender = new InvitationSender(parser, "You're invited!");
    assert(invitationSender.isValid());

    let mailer = sinon.mock(Mailer);
    mailer
      .expects("sendInvitation")
      .withArgs("Bob the Massive", "cool_email@email.com", "You're invited!");

    mailer
      .expects("sendInvitation")
      .withArgs("Jane the even Bigger", "spool@email.com", "You're invited!");

    invitationSender.sendEmails();
  });

  it ('is invalid when recipient list is empty', () => {
    let csv = 'email,name';

    let parser = new Parser(csv);
    let invitationSender = new InvitationSender(parser, "holla");
    assert(!invitationSender.isValid());
  });

  it ('is invalid with an empty message', () => {
    let csv = `email,name
cool_email@email.com,Bob the Massive
spool@email.com,Jane the even Bigger`;

    let parser = new Parser(csv);
    let invitationSender = new InvitationSender(parser, "");
    assert(!invitationSender.isValid());
  });
});

describe('Parser', () => {
  it('cleans trailing and leading spaces from emails', () => {
    let csv = `email,name
       spaces@everywhere.help      ,Space Gurl`;

    let parser = new Parser(csv);

    let recipients = parser.recipients;
    let spaceGurl = recipients[0];

    assert.equal(recipients.length, 1);
    assert.equal(spaceGurl.email, 'spaces@everywhere.help');
  });

  it('rejects invalid email addresses', () => {
    let csv = `email,name
               not an email address,Yep`;
    let parser = new Parser(csv);

    assert.equal(parser.recipients.length, 0);
  });
});
