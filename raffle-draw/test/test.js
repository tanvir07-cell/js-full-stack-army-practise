const myDb = require("../db/db");

myDb.create("user1", 10);
myDb.create("user2", 20);
myDb.create("user3", 30);

myDb.bulkCreate("user4", 40, 3);

console.log("All tickets = ", myDb.find());

console.log("Winners = ", myDb.draw(2));
