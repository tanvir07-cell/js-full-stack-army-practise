const Ticket = require("../model/Ticket");
class MyDb {
  constructor() {
    this.tickets = [];
  }
  //   create a single ticket from model/Ticket.js file:

  /**
   *
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  // create a multiple ticket that means user can buy multiple tickets:

  /**
   * create multiple tickets because user can buy multiple tickets:
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>} returns a list of tickets object
   */
  bulkCreate(username, price, quantity) {
    const result = [];

    for (let i = 0; i < quantity; i++) {
      // eikahne create function ke call korlei to create hoye jabe tickets gula and ei tickets gula create hobe quanity er parameter joto deoaa totbar:
      const ticket = this.create(username, price);
      result.push(ticket);
    }

    return result;
  }

  //   get all tickets:
  /**
   * returns all available tickets
   
   */
  find() {
    return this.tickets;
  }

  // get ticket by id:
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {string} ticketId
       * @returns {Ticket}
       */

      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  //   get ticket by username:
  // eikhane ekti username onekgula ticket kinte pare and ei ticket gula find korar jonne filter method use kora hobe:

  findByUsername(username) {
    const tickets = this.tickets.filter(
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * return an updated ticket;
   * @param {string} ticketId
   * @param {{username:string,price :number }} ticketBody
   * @returns {Ticket}
   */

  updateById(ticketId, ticketBody) {
    // ticketBody er moddeh ekti ticket er username and price thakbe karon amra shudu username ar price ei update korbo:
    const ticket = this.findById(ticketId);
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.updatedAt = new Date();

    return ticket;
  }

  // delete ticket by id:
  /**
   *
   * @param {string} ticketId
   * return true if deleted succesfully otherwise false:
   */
  deleteById(ticketId) {
    // amra filter and splice ei 2 vabei array theke data remove korte pari ekhon e ami remove korbo splice and splice diye delete korate chaile index laagbe tai findIndex method ti use korechi:
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else return false;
  }

  draw(winnerCount) {
    // kotojon winner chaitesi seta holo winnerCount:
    let winnerIndices = new Array(winnerCount);
    let index = 0;
    while (index < winnerCount) {
      // randomly choose the winner;
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);

      if (!winnerIndices.includes(winnerIndex)) {
        winnerIndices[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerIndices.map((index) => this.tickets[index]);
    return winners;
  }
}

// amra jani amader database alltime single thake tai ei full MyDb class ti ke amra bahire export korbo nah korbo ekti object ke jate kore onno file e kono change hole shudu ei MyDb class ei tah change hoy:

const myDb = new MyDb();

module.exports = myDb;
