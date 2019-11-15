class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  toString() {
    return `(${this.name} [${this.phone}])`;
  }

  sendEmail(message) {
  }
}

module.exports = Contact;
