const parse = require('csv-parse/lib/sync');

class Parser {
  get PERMISSIVE_EMAIL_REGEX() { return /.+@.+\..+/; }
  constructor(csv) {
    this.csv = csv;
  }

  get recipients() {
    return this._recipients = this._recipients ||
      parse(this.csv, {columns: true}).map(recipient => {
        if (this._isValidEmail(recipient.email)) {
          return this._clean(recipient);
        }
      }).filter(r => r);
  }

  valid() {
    return this.recipients && this.recipients.length > 0;
  }

  _clean(recipient) {
    recipient.email = recipient.email.trim();
    return recipient;
  }

  _isValidEmail(email) {
    return this.PERMISSIVE_EMAIL_REGEX.test(email);
  }
}

module.exports = Parser;
