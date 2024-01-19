// class StringBuilder {
//   #value = "";
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     return this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//     return this;
//   }

//   padBoth(str) {
//     this.#value = str + this.#value + str;
//     return this;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

class User {
  email;
  blacklistedEmails = [];

  
  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
