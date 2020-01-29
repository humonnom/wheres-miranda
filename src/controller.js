import routes from "./routes";

export const getHome = (req, res) => {
  res.render("home", { pageTitle: "Where's Miranda", pacon: "🥜" });
};

export const getGame = (req, res) => {
  try {
    res.render("game", { pageTitle: "Where's Miranda Game", pacon: "🃏" });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getMusic = (req, res) => {
  try {
    res.render("music", { pageTitle: "Song's from Miranda", pacon: "🎷" });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getBestscene = (req, res) => {
  try {
    res.render("bestscene", {
      pageTitle: "Best Scene from Miranda",
      pacon: "🍿"
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
