const Mailer = require('./mailer');

class InvitationSender {
  constructor(parser, message) {
    this.parser = parser;
    this.message = message;
  }

  sendEmails() {
    this.parser.recipients.forEach(recipient => {
      Mailer.sendInvitation(recipient.name, recipient.email, this.message);
    });
  }

  isValid() {
    return this._isValidMessage() && this.parser.valid();
  }

  _isValidMessage() {
    return !!this.message;
  }
}

module.exports = InvitationSender;
