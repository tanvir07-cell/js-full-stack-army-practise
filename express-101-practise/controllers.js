const homeController = (_req, res) => {
  res.status(200).json({ message: "First express server" });
};

const aboutController = (_req, res) => {
  res.render("pages/about.ejs", { title: "Rifat | About" });
};

module.exports = { homeController, aboutController };
