const parse = require('csv-parse/lib/sync')

class InvitationSender {
  get PERMISSIVE_EMAIL_REGEX() { return /.+@.+\..+/; }
  constructor(csv, message) {
    this.csv = csv;
    this.message = message;
  }

  sendEmails() {
    this.recipients.forEach(recipient => {
      Mailer.sendInvitation(recipient.name, recipient.email, this.message);
    });
  }

  get recipients() {
    let recipients = parse(this.csv, {columns: true});
    let validRecipients = recipients.map(recipient => {
      recipient.email = recipient.email.trim();
      if (this._isValidEmail(recipient.email)) {
        return recipient;
      }
    }).filter(r => r);

    return validRecipients;
  }

  isValid() {
    return this._isValidMessage() && this._isValidRecipients();
  }

  _isValidRecipients() {
    return this.recipients && this.recipients.length > 0;
  }

  _isValidMessage() {
    return !!this.message;
  }

  _isValidEmail(email) {
    return this.PERMISSIVE_EMAIL_REGEX.test(email);
  }
}

class Mailer {
  static sendInvitation(name, email, message) {
    // queues delivery of an email, don't remove, this call is tested for,
    // imagine this actually sending out your email.
  }
}

module.exports = {InvitationSender, Mailer};
