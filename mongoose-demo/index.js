const mongoose = require("mongoose");
// mongoose schema defines what's the document looks like:
const personSchema = new mongoose.Schema({
  // amra chaitesi firstName ti ke validate korbo! that means firstName chara database e kono person ei create kora jabe nah:
  firstName: {
    type: String,
    required: true,
    minlength: [3, "name should be minimum 3 length"],
    maxlength: [10, "name should be maximum 10 length"],
  },
  lastName: String,
  email: String,
  age: Number,
  bio: String,
  single: Boolean,
});
// creating model and inside model what's type operation does our app is defined:
const Person = mongoose.model("Person", personSchema);

// eikhane localhost er pore /mongoose-demo hocceh amar database er name and ei name e ekti collection o thakhbe mongodbCampus app e
mongoose
  .connect("mongodb://localhost/mongoose-demo")
  .then(async () => {
    console.log("Database connection successfully");
    // jehetu database connection ei jaygay hoy tai ei jay sob code likha laagbe:

    // person gula create korechi :

    // const person = new Person({
    //   firstName: "Tanvir",
    //   lastName: "Rifat",
    //   email: "tanvir@gmail.com",
    //   age: 22,
    //   bio: "a seeker backend developer",
    //   single: true,
    // });
    // await person.save();
    // console.log("Person created successfully", person);

    // created person gula find korbo:
    // const person = await Person.find({ email: "tanvir@gmail.com" });
    // console.log(person);

    // firstName er validation er jonne ekti person create korlam:
    const person = new Person({
      firstName: "Arafat",
      lastName: "Riman",
    });

    await person.save();
    console.log(person);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
