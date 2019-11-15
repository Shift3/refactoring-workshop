class NullContact {
  get phone () { return 'No Phone'; }

  toString() {
    return `(No Contact)`;
  }

  sendEmail() {}
}

class FieldSite {
  constructor(location, contact) {
    this.location = location;
    this.contact = contact || new NullContact();
  }

  get fullLocationName() {
    return `${this.location} ${this.contact}`;
  }

  get contactPhoneString() {
    return this.contact.phone;
  }

  emailContact(message) {
    this.contact.sendEmail(message);
  }
}

module.exports = FieldSite;
