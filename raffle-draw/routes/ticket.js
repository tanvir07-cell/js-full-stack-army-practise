const router = require("express").Router();

const myDb = require("../db/db");

// amra normally router gula eivabe liki:
// eivabe likhle dekha jay je ekoi url but different method(get,patch,delete) er jonne bar bar ekoi url likha laage tai eivabe nah likhe router.route() eivabe likhbo
// router.get("/tickets/t/:ticketId", () => {});
// router.patch("/tickets/t/:ticketId", () => {});

router
  .route("/t/:ticketId")
  .get((req, res) => {
    // :ticketId eitake params ba url parameter bole:

    const ticketId = req.params.ticketId;
    const ticket = myDb.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({ message: "Updated successfully", updatedTicket });
  })
  .delete((req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    // jehetu kono kichu return kora laage nah delete er jonne tai res.send() diyechi:
    res.status(203).send();
  });

router
  .route("/u/:username")
  .get((req, res) => {
    const username = req.params.username;
    const tickets = myDb.findByUsername(username);
    res.status(200).json(tickets);
  })
  .patch(() => {})
  .delete(() => {});

router.post("/sell", (req, res) => {
  // sell route e hit korle req.body er moddeh username ar price ti asbe:
  const { username, price } = req.body;
  const ticket = myDb.create(username, price);
  //   201 -- created successfully status code:
  res.status(201).json({ message: "Ticket created succesfully", ticket });
});
router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = myDb.bulkCreate(username, price, quantity);
  res
    .status(201)
    .message({ message: "Bulk ticket created successfully", tickets });
});
router.get("/draw", (req, res) => {
  // raffledraw korte gele winner koy jon nite chai tar paramter laagbe and eita query parameter akare nibo:
  //   ei url ti amra eivabe likhbo /draw?wc=5 eivabe:
  const winnerCount = req.query.wc ?? 3;
  const winners = myDb.draw(winnerCount);
  res.status(200).json(winners);
});
router.get("", (req, res) => {
  const tickets = myDb.find();
  res.status(200).json({ message: "All tickets here : ", tickets });
});

module.exports = router;
