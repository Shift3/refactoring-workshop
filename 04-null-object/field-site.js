class FieldSite {
  constructor(location, contact) {
    this.location = location;
    this.contact = contact;
  }

  get fullLocationName() {
    if (this.contact) {
      return `${this.location} (${this.contact.name} [${this.contact.phone}])`;
    } else {
      return `${this.location} (No Contact)`;
    }
  }

  get contactPhoneString() {
    if (this.contact) {
      return this.contact.phone;
    } else {
      return 'No Phone';
    }
  }

  emailContact(message) {
    if (this.contact) {
      this.contact.sendEmail(message);
    }
  }
}

module.exports = FieldSite;
