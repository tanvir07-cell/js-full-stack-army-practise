// eti hocceh ekti ticket er shape dekhte kemon hobe tah and ei shape ti kei model bole

const shortid = require("shortid");

class Ticket {
  /**
   * constructor and shape a single ticket object
   * @param {string} username
   * @param {number} price
   */

  constructor(username, price) {
    this.id = shortid.generate();
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
